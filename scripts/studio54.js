// studio54underground.com
// by Phillip

var Artists = Backbone.Collection.extend();
var Masterpieces = Backbone.Collection.extend();

var artists = new Artists([
  {
    name: 'Ethan Miller',
    mix: 'https://soundcloud.com/djethan',
    photo: 'https://i1.sndcdn.com/avatars-000038731944-1lqeu7-t500x500.jpg',
    col: 1,
    row: 1
  },
  {
    name: 'Micron',
    mix: 'https://soundcloud.com/la-cosa-nostra-micron',
    photo: 'https://i1.sndcdn.com/avatars-000040396912-4jrsiz-t500x500.jpg',
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
    name: 'Lick the DJ',
    mix: 'https://soundcloud.com/lickthedj',
    photo: 'https://i1.sndcdn.com/avatars-000001512740-lb7m6k-t500x500.jpg',
    col: 2,
    row: 3
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
    row: 4
  },
  {
    name: 'Lt. Daaan',
    mix: 'https://soundcloud.com/ltdaaan',
    photo: 'https://i1.sndcdn.com/avatars-000071834613-tiljds-t500x500.jpg',
    col: 1,
    row: 4
  }
]);

var masterpieces = new Masterpieces([
  {
    name: 'Vincent van Gogh',
    photo: 'http://uploads0.wikiart.org/images/vincent-van-gogh/wheat-field-with-cypresses-1889.jpg',
    col: 1,
    row: 1
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://4.bp.blogspot.com/-QeoHSfWQ0bg/UO9PnLmySOI/AAAAAAAAQE8/C1HWqQrfdyE/s1600/Van-Gogh-Painting-1.jpg',
    col: 1,
    row: 2
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://uploads0.wikiart.org/images/vincent-van-gogh/wheat-field-with-cypresses-1889.jpg',
    col: 1,
    row: 3
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://4.bp.blogspot.com/-QeoHSfWQ0bg/UO9PnLmySOI/AAAAAAAAQE8/C1HWqQrfdyE/s1600/Van-Gogh-Painting-1.jpg',
    col: 1,
    row: 4
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://uploads0.wikiart.org/images/vincent-van-gogh/wheat-field-with-cypresses-1889.jpg',
    col: 2,
    row: 1
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://4.bp.blogspot.com/-QeoHSfWQ0bg/UO9PnLmySOI/AAAAAAAAQE8/C1HWqQrfdyE/s1600/Van-Gogh-Painting-1.jpg',
    col: 2,
    row: 2
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://uploads0.wikiart.org/images/vincent-van-gogh/wheat-field-with-cypresses-1889.jpg',
    col: 2,
    row: 3
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://4.bp.blogspot.com/-QeoHSfWQ0bg/UO9PnLmySOI/AAAAAAAAQE8/C1HWqQrfdyE/s1600/Van-Gogh-Painting-1.jpg',
    col: 2,
    row: 4
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://uploads0.wikiart.org/images/vincent-van-gogh/wheat-field-with-cypresses-1889.jpg',
    col: 3,
    row: 1
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://4.bp.blogspot.com/-QeoHSfWQ0bg/UO9PnLmySOI/AAAAAAAAQE8/C1HWqQrfdyE/s1600/Van-Gogh-Painting-1.jpg',
    col: 3,
    row: 2
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://uploads0.wikiart.org/images/vincent-van-gogh/wheat-field-with-cypresses-1889.jpg',
    col: 3,
    row: 3
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://4.bp.blogspot.com/-QeoHSfWQ0bg/UO9PnLmySOI/AAAAAAAAQE8/C1HWqQrfdyE/s1600/Van-Gogh-Painting-1.jpg',
    col: 3,
    row: 4
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://uploads0.wikiart.org/images/vincent-van-gogh/wheat-field-with-cypresses-1889.jpg',
    col: 4,
    row: 1
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://4.bp.blogspot.com/-QeoHSfWQ0bg/UO9PnLmySOI/AAAAAAAAQE8/C1HWqQrfdyE/s1600/Van-Gogh-Painting-1.jpg',
    col: 4,
    row: 2
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://uploads0.wikiart.org/images/vincent-van-gogh/wheat-field-with-cypresses-1889.jpg',
    col: 4,
    row: 3
  },
  {
    name: 'Vincent van Gogh',
    photo: 'http://4.bp.blogspot.com/-QeoHSfWQ0bg/UO9PnLmySOI/AAAAAAAAQE8/C1HWqQrfdyE/s1600/Van-Gogh-Painting-1.jpg',
    col: 4,
    row: 4
  }


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
            'Content' : '#content'
        },
 
        events: {
          'click #nav-presales'   : 'showPresales',
          'click #nav-lineup'     : 'showLineup',
          'click #nav-artshow'    : 'showArtShow',
          'click #nav-directions' : 'showDirections'
        },

        initialize: function() {
          this.pages = ['presales', 'lineup', 'artshow', 'directions'];
        },
 
        checkBrowserWidth: function(event) {
          var $window = $(window),
              $error  = this.$('#error-message'),
              width   = $window.width();

          if(width < 1380) $error.html('<p>Site looks best at <span class="silver">1380px</span> wide, you\'re at <span class="silver">' + width + '</span>.</p>');
          else $error.html('');
        },

        updateNav: function(event) {
          if (!event) return;
          this.$('.navbar-nav > li').removeClass('active');
          $(event.currentTarget).addClass('active');
        },

        positionLogo: function(page) {
          if (!this.$logo) this.$logo = $('#logo');
          var logoClass = this.$logo.attr('class');

          if (page !== logoClass) {
            this.$logo.hide();
            this.$logo.removeClass(logoClass);
            this.$logo.addClass(page);
           
            if (page !== 'hide') this.$logo.fadeIn();
          } 
        },

        hideAllPagesExcept: function(shownPage) {
          _.each(this.pages, function(hiddenPage, index) {
            if (hiddenPage !== shownPage) this.$('#' + hiddenPage).hide();
          });
        },

        showLineup: function(event) {
          // debugger
          if (this.Content.currentView != this.lineupLayout) this.renderLineup();

          // if (this.Content)
          this.updateNav(event);
          this.positionLogo('hide');
          this.hideAllPagesExcept('lineup');
          this.$('#lineup').fadeIn(2000);
          this.$('.soundcloud-widget').fadeIn(1000);
        },

        showPresales: function(event) {
          this.updateNav(event);
          this.positionLogo('presales');
          this.hideAllPagesExcept('presales')
          this.$('#presales').fadeIn();
        },

        showArtShow: function(event) {
          this.updateNav(event);
          this.positionLogo('artshow');
          this.hideAllPagesExcept('artshow');
          this.renderArtShow();
          this.$('#artshow').fadeIn(1000);
        },

        showDirections: function(event) {
          this.updateNav(event);
          this.positionLogo('lineup');
          this.hideAllPagesExcept('directions');
          this.$('#lineup').hide();
          this.$('#artshow').hide();
          this.$('#directions').fadeIn();
        },

        renderPresales: function(event) {
          var presalesLayout = new module.PresalesLayoutView();
          this.Content.show(presalesLayout);
          this.updateNav(event);
        },

        renderLineup: function(event) {
          this.lineupLayout = new module.LineupLayoutView();
          this.Content.show(this.lineupLayout);
        },

        renderDirections: function(event) {
          var detailsLayout = new module.DirectionsLayoutView();
          this.Content.show(detailsLayout);
          this.updateNav(event);
        },

        renderArtShow: function(event) {
          var artshowLayout = new module.ArtShowLayoutView();
          this.Content.show(artshowLayout);
          this.updateNav(event);
        },

        onRender: function() {
          if( ! Backbone.History.started) Backbone.history.start();
        },
 
        onShow: function() {
          this.renderLineup();
          // this.checkBrowserWidth();
          // $(window).on('resize', this.checkBrowserWidth);
        }
    });
 
    // ART SHOW
    module.ArtShowLayoutView = Marionette.LayoutView.extend({
      tagName: 'div',
      id: 'artshow',
      className: 'content',

      template: '#artshow-template',

      events: {},

      initialize: function() {
      },

      initGridster: function() {
        this.gridster = $("#artshow").gridster({
          widget_selector: '.masterpiece',
          widget_margins: [10, 10],
          widget_base_dimensions: [300, 250],
          extra_rows: 4,
          max_size_x: 4,
          avoid_overlapped_widgets: true,
          autogenerate_stylesheet: true
        }).data('gridster');

        this.gridster.disable();
      },


      renderGridster: function() {
        var that = this,
            widgets = [];

        _.each(masterpieces.models, function(masterpiece,index){
          var source    = $('#masterpiece-template').html(),
              template  = Handlebars.compile(source),
              html      = template(masterpiece.toJSON()),
              col       = masterpiece.get('col')
              row       = masterpiece.get('row');

          var $widget = that.gridster.add_widget(html,1,1,col,row);
          widgets.push($widget);

          _.each(widgets, function($widget,index){
            debugger;
          });
          // debugger;
        });
      },

      eventsGridster: function() {
        var $widget,
            currentLocation,
            originalLocation,
            futureLocation,
            that = this;

        this.gridster.$el
          .on('mouseenter', '> .masterpiece', function() {
              $widget          = $(this);
              currentLocation  = that.gridster.dom_to_coords($widget);
              originalLocation = _.clone(currentLocation);
              futureLocation   = { col: (currentLocation.col - 1), row: currentLocation.row, size_x: 2, size_y: 3 };

              // if (currentLocation.row >= 4) $("html, body").animate({ scrollTop: $(document).height() }, "fast");

              if (currentLocation.col > 1) that.gridster.mutate_widget_in_gridmap($widget, currentLocation, futureLocation);
              else that.gridster.resize_widget($widget, 2, 3);
          })
          .on('mouseleave', '> .masterpiece', function() {
              if(originalLocation.col > 1) that.gridster.mutate_widget_in_gridmap($widget, currentLocation, originalLocation);
              else that.gridster.resize_widget($widget, 1, 1);
          });
      },

      onShow: function(){
        this.initGridster();
        this.renderGridster();
        this.eventsGridster();
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
          this.gridster = $("#lineup").gridster({
            widget_selector: '.dj-superstar',
            widget_margins: [20, 24],
            widget_base_dimensions: [500, 130],
            extra_rows: 4,
            max_size_x: 2,
            avoid_overlapped_widgets: true,
            autogenerate_stylesheet: true
          }).data('gridster');

          this.gridster.disable();
        },

        renderGridster: function() {
          var that = this;

          _.each(artists.models, function(artist,index){
            var source    = $('#dj-template').html(),
                template  = Handlebars.compile(source),
                html      = template(artist.toJSON()),
                col       = artist.get('col')
                row       = artist.get('row');

            that.gridster.add_widget(html,1,1,col,row);
          });
        },

        eventsGridster: function() {
          var $widget,
              $soundcloud,
              currentLocation,
              originalLocation,
              futureLocation,
              that = this;

          this.gridster.$el
            .on('mouseenter', '> .dj-superstar', function() {
                $widget          = $(this);
                $soundcloud      = $widget.find('.soundcloud-widget');
                currentLocation  = that.gridster.dom_to_coords($widget);
                originalLocation = _.clone(currentLocation);
                futureLocation   = { col: 1, row: currentLocation.row, size_x: 2, size_y: 2 };

                // if (currentLocation.row >= 4) $("html, body").animate({ scrollTop: $(document).height() }, "fast");

                  if (currentLocation.col > 1) that.gridster.mutate_widget_in_gridmap($widget, currentLocation, futureLocation);
                  else that.gridster.resize_widget($widget, 2, 2);

                  that.bigSoundCloud($soundcloud);
            })
            .on('mouseleave', '> .dj-superstar', function() {
                if(originalLocation.col > 1) that.gridster.mutate_widget_in_gridmap($widget, currentLocation, originalLocation);
                else that.gridster.resize_widget($widget, 1, 1);
                that.smallSoundcloud($soundcloud);
            });
        },
        
        smallSoundcloud: function($soundcloud) {
          $soundcloud.hide();
          // renders better than sending classes
          // $soundcloud.css('margin-top', '5px');
          $soundcloud.css('height', '122px');
          $soundcloud.css('width', '365px');
          $soundcloud.fadeIn(1500);
        },

        bigSoundCloud: function($soundcloud) {
          // setTimeout(function(){
            $soundcloud.hide();
            // renders better than setting classes
            $soundcloud.css('height', '300px');
            $soundcloud.css('width', '728px');
            $soundcloud.fadeIn(2500);
          // }, 1000);

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