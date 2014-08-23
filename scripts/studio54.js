// studio54underground.com
// by Phillip

var Artists = Backbone.Collection.extend();
 
var artists = new Artists([
  {
    name: 'Ethan Miller',
    mix: 'https://soundcloud.com/djethan',
    photo: 'https://i1.sndcdn.com/avatars-000038731944-1lqeu7-t500x500.jpg',
    col: 1,
    row: 1
  },
  {
    name: 'Chipper Guy',
    mix: 'https://soundcloud.com/chipper-guy',
    photo: 'https://i1.sndcdn.com/avatars-000023321689-cqclvs-t500x500.jpg',
    col: 1,
    row: 3
  },
  {
    name: 'Joshuah Vincent',
    mix: 'https://soundcloud.com/joshuahv',
    photo: 'https://i1.sndcdn.com/avatars-000070791708-kp5nsn-t500x500.jpg',
    col: 2,
    row: 2
  },
  {
    name: 'Tiesto',
    mix: 'https://soundcloud.com/tiesto',
    photo: 'https://i1.sndcdn.com/avatars-000080089386-wy50vf-t500x500.jpg',
    col: 1,
    row: 4
  },
  {
    name: 'Alixr',
    mix: 'https://soundcloud.com/djalixr',
    photo: 'https://i1.sndcdn.com/avatars-000086799753-oqfeor-t500x500.jpg',
    col: 1,
    row: 2
  },
  {
    name: 'Influence',
    mix: 'https://soundcloud.com/influence-2',
    photo: 'https://i1.sndcdn.com/avatars-000041124403-fxrbrz-t500x500.jpg?e76cf77',
    col: 2,
    row: 1
  },
  {
    name: 'Kelee Silva',
    mix: 'https://soundcloud.com/djkeleesilva',
    photo: 'https://i1.sndcdn.com/avatars-000003531961-f3fid3-t500x500.jpg',
    col: 2,
    row: 3
  },
  {
    name: 'Paul Oakenfold',
    mix: 'https://soundcloud.com/pauloakenfold',
    photo: 'https://i1.sndcdn.com/avatars-000084720176-mq6noe-t500x500.jpg',
    col: 2,
    row: 4
  },
]);


var app = new Backbone.Marionette.Application();
 
app.addRegions({
    appRegion: '#studio54underground'
});
 
app.module('App',function(module, App, Backbone, Marionette, $, _){
     
    // LAYOUT VIEW
    module.AppLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'studio54underground',
        template: '#layout-template',
 
        regions: {
            'Content' : '#content',
        },
 
        events: {
          'click #nav-presales': 'showPresales',
          'click #nav-lineup': 'showLineup',
          'click #nav-details': 'renderDetails'
        },

        initialize: function() {},
 
        checkBrowserWidth: function(event) {
          var $window = $(window),
              $error  = this.$('#error-message');
              width   = $window.width();
          if(width < 1380) $error.html('<p>Site looks best at <span class="silver">1380px</span> wide, you\'re at <span class="silver">' + width + '</span>.</p>');
          else $error.html('');
        },

        updateNav: function(event) {
          if (!event) return;
          this.$('.navbar-nav > li').removeClass('active');
          $(event.currentTarget).addClass('active');
        },

        showLineup: function(event) {
          this.updateNav(event);
          this.$('#presales').hide();
          this.$('#lineup').fadeIn(2000);
          this.$('.soundcloud-widget').fadeIn();
        },

        showPresales: function(event) {
          this.updateNav(event);
          this.$('#lineup').hide();
          this.$('#presales').fadeIn();
        },

        renderPresales: function(event) {
          var presalesLayout = new module.PresalesLayoutView();
          this.Content.show(presalesLayout);
          this.updateNav(event);
        },

        renderLineup: function(event) {
          var lineupLayout = new module.LineupLayoutView();
          this.Content.show(lineupLayout);
        },

        renderDetails: function(event) {
          var detailsLayout = new module.DetailsLayoutView();
          this.Content.show(detailsLayout);
          this.updateNav(event);
        },

        onRender: function() {
        },
 
        onShow: function() {
          this.renderLineup();
          // this.checkBrowserWidth();
          // $(window).on('resize', this.checkBrowserWidth);
        }
    });
 
    // PAGE VIEW
    module.LineupLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'LineupLayoutView',
        className: 'content',
 
        template: '#lineup-template',
 
        events: {},

        initialize: function(){
        },

        initGridster: function() {
          gridster = $("#lineup").gridster({
            widget_selector: '.dj-superstar',
            widget_margins: [20, 24],
            widget_base_dimensions: [500, 130],
            extra_rows: 4,
            max_size_x: 2,
            avoid_overlapped_widgets: true,
            autogenerate_stylesheet: true
          }).data('gridster');

          gridster.disable();
        },

        renderGridster: function() {
          _.each(artists.models, function(artist,index){
            var source    = $('#dj-template').html(),
                template  = Handlebars.compile(source),
                html      = template(artist.toJSON()),
                col       = artist.get('col')
                row       = artist.get('row');

            gridster.add_widget(html,1,1,col,row);
          });
        },

        eventsGridster: function() {
          var $widget,
              $soundcloud,
              currentLocation,
              originalLocation,
              futureLocation,
              that = this;

          gridster.$el
            .on('mouseenter', '> .dj-superstar', function() {
                console.log('inside');
                $widget = $(this);
                currentLocation = gridster.dom_to_coords($widget);
                originalLocation = _.clone(currentLocation);
                futureLocation = { col: 1, row: currentLocation.row, size_x: 2, size_y: 2 };

                if(currentLocation.col === 2) gridster.mutate_widget_in_gridmap($widget, currentLocation, futureLocation);
                else gridster.resize_widget($widget, 2, 2);

                $soundcloud = $widget.find('.soundcloud-widget');
                that.bigSoundCloud($soundcloud);
            })
            .on('mouseleave', '> .dj-superstar', function() {
                if(originalLocation.col === 2) gridster.mutate_widget_in_gridmap($widget, currentLocation, originalLocation);
                else gridster.resize_widget($widget, 1, 1);
                that.smallSoundcloud($soundcloud);
            });
        },
        
        smallSoundcloud: function($soundcloud) {
          $soundcloud.hide();
          // renders better than sending classes
          // $soundcloud.css('margin-top', '5px');
          $soundcloud.css('height', '122px');
          $soundcloud.css('width', '365px');
          $soundcloud.fadeIn(100);
        },

        bigSoundCloud: function($soundcloud) {
          $soundcloud.hide();
          // renders better than setting classes
          $soundcloud.css('height', '300px');
          $soundcloud.css('width', '728px');
          $soundcloud.fadeIn(1200);
        },

        onRender: function(){
          console.log('Lineup: onRender');
        },
        
        onShow: function(){
          this.initGridster();
          this.renderGridster();
          this.eventsGridster();
        }
    });
 
    // load application 
    module.addInitializer(function(){
        var layout = new module.AppLayoutView();
        app.appRegion.show(layout);
    });
});

// start app when DOM ready 
$(document).ready(function() {
  app.start();
});