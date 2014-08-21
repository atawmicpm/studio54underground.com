// studio54underground.com
// by Phillip

var Artists = Backbone.Collection.extend();
 
var artists = new Artists([
  {
    name: 'DJ Ethan Miller',
    // mix: 'https://soundcloud.com/djethan/live-at-fnf-campout-xviii',
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
    row: 2
  },
  {
    name: 'Noizeeboy',
    mix: 'https://soundcloud.com/noizeeboy',
    photo: 'https://i1.sndcdn.com/avatars-000030852263-tiqew9-t500x500.jpg',
    col: 1,
    row: 3
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
    col: 2,
    row: 1
  },
  {
    name: 'Sean Murray',
    mix: 'https://soundcloud.com/sean-murray',
    photo: 'https://i1.sndcdn.com/avatars-000049400337-r3kbhh-t500x500.jpg',
    col: 2,
    row: 2
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
     
    // MAIN VIEW
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

        initialize: function() {
            console.log('main layout: initialize');
        },
 
        updateNav: function(event) {
          if (!event) return;
          this.$('.navbar-nav > li').removeClass('active');
          $(event.currentTarget).addClass('active');
        },

        showLineup: function(event) {
          this.updateNav(event);
          this.$('#presales').hide();
          this.$('#lineup').fadeIn();
          this.$('.soundcloud-widget').fadeIn();
        },

        showPresales: function(event) {
          this.updateNav(event);
          this.$('#lineup').hide();
          this.$('#presales').fadeIn();
          this.$('#soundcloud-widget').hide();
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
        }
    });

    // PRESALES VIEW
    module.PresalesLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'presalesLayoutView',
        className: 'content',

        template: '#presales-template',
 
        initialize: function(){console.log('Presales: initialize');},
        onRender: function(){console.log('Presales: onRender');},
        onShow: function(){console.log('Presales: onShow');}
    });
 
    // LINEUP VIEW
    module.LineupLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'LineupLayoutView',
        className: 'content',
 
        template: '#lineup-template',
 
        events: {},

        initialize: function(){
          var gridster;
        },

        initGridster: function() {
          gridster = $("#lineup").gridster({
            widget_selector: '.dj-superstar',
            widget_margins: [20, 20],
            widget_base_dimensions: [400, 150],
            helper: 'clone',
            extra_cols: 2,
            extra_rows: 2,
            // max_size_x: 4,
            avoid_overlapped_widgets: true,
            autogenerate_stylesheet: true
          }).data('gridster');

          gridster.disable(); // disables sorting
          // gridster.init();
        },

        renderGridster: function() {
          _.each(artists.models, function(artist,index){
            var source    = $('#dj-template').html(),
                template  = Handlebars.compile(source),
                html      = template(artist.toJSON());

            gridster.add_widget(html,1,1,artist.get('col'),artist.get('row'));
          });
        },

        eventsGridster: function() {
          gridster.$el
            .on('mouseenter', '> .dj-superstar', function() {
                gridster.resize_widget($(this), 2, 2);

                var $soundcloud = $(this).find('.soundcloud-widget');
                    $soundcloud.hide();
                    $soundcloud.css('margin-top', '12px');
                    $soundcloud.css('height', '303px');
                    $soundcloud.css('width', '532px');
                    $soundcloud.fadeIn(750);
            })
            .on('mouseleave', '> .dj-superstar', function() {
                gridster.resize_widget($(this), 1, 1);

                var $soundcloud = $(this).find('.soundcloud-widget');
                    // $soundcloud.hide();
                    $soundcloud.css('margin-top', '5%');
                    $soundcloud.css('height', '110px');
                    $soundcloud.css('width', '250px');
                    // $soundcloud.fadeIn();
            });
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
 
     module.DetailsLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'DetailsLayoutView',
        className: 'content',
 
        template: '#details-template',
 
        events: {},
 
        initialize: function(){console.log('Details: initialize');},
        onRender: function(){console.log('Details: onRender');},
        onShow: function(){console.log('Details: onShow');}
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