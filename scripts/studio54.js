var Artists = Backbone.Collection.extend();
 
var artists = new Artists([
  {
    name: 'Ethan Miller',
    mix: 'https://soundcloud.com/djethan/live-at-fnf-campout-xviii',
    photo: 'https://i1.sndcdn.com/avatars-000038731944-1lqeu7-t500x500.jpg',
    col: 1,
    row: 1
  },
  {
    name: 'Chipper Guy',
    mix: 'https://soundcloud.com/chipper-guy/deep-end-of-the-pool',
    photo: 'https://i1.sndcdn.com/avatars-000023321689-cqclvs-t500x500.jpg',
    col: 2,
    row: 2
  },
  {
    name: 'Basehead',
    mix: 'https://soundcloud.com/djethan/live-at-fnf-campout-xviii',
    photo: 'https://i1.sndcdn.com/avatars-000038731944-1lqeu7-t500x500.jpg',
    col: 3,
    row: 3
  },
  {
    name: 'Noizeeboy',
    mix: 'https://soundcloud.com/chipper-guy/deep-end-of-the-pool',
    photo: 'https://i1.sndcdn.com/avatars-000023321689-cqclvs-t500x500.jpg',
    col: 4,
    row: 4
  },
  {
    name: 'Indy Nylez',
    mix: 'https://soundcloud.com/djethan/live-at-fnf-campout-xviii',
    photo: 'https://i1.sndcdn.com/avatars-000038731944-1lqeu7-t500x500.jpg',
    col: 1,
    row: 1
  },
  {
    name: 'LT DAAN',
    mix: 'https://soundcloud.com/chipper-guy/deep-end-of-the-pool',
    photo: 'https://i1.sndcdn.com/avatars-000023321689-cqclvs-t500x500.jpg',
    col: 2,
    row: 2
  },
  {
    name: 'Galen',
    mix: 'https://soundcloud.com/djethan/live-at-fnf-campout-xviii',
    photo: 'https://i1.sndcdn.com/avatars-000038731944-1lqeu7-t500x500.jpg',
    col: 3,
    row: 3
  },
  {
    name: 'Alixr',
    mix: 'https://soundcloud.com/chipper-guy/deep-end-of-the-pool',
    photo: 'https://i1.sndcdn.com/avatars-000023321689-cqclvs-t500x500.jpg',
    col: 4,
    row: 4
  },
]);


var app = new Backbone.Marionette.Application();
 
app.addRegions({
    appRegion: '#studio54underground'
});
 
app.module('App',function(module, App, Backbone, Marionette, $, _){
     
    module.PresalesLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'presalesLayoutView',
        className: 'content',

        template: '#presales-template',
 
        initialize: function(){console.log('Presales: initialize');},
        onRender: function(){console.log('Presales: onRender');},
        onShow: function(){console.log('Presales: onShow');}
    });
 
    module.LineupLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'LineupLayoutView',
        className: 'content',
 
        template: '#lineup-template',
 
        events: {},

        initialize: function(){
          var gridster;
        },

        onRender: function(){
          console.log('Lineup: onRender');
        },
        
        onShow: function(){
          gridster = $("#lineup").gridster({
            widget_selector: '.dj-superstar',
            widget_margins: [5, 5],
            widget_base_dimensions: [200, 200],
            extra_cols: 2,
            max_size_x: 4,
            avoid_overlapped_widgets: true,
            autogenerate_stylesheet: true
          }).data('gridster');

          gridster.enable();

          _.each(artists.models, function(artist,index){
            var source    = $('#dj-template').html(),
                template  = Handlebars.compile(source),
                html      = template(artist.toJSON());

            gridster.add_widget(html,1,1,artist.get('col'),artist.get('row'));

          });

          gridster.$el
            .on('mouseenter', '> .dj-superstar', function() {
                console.log( JSON.stringify(gridster.serialize($(this))) );
                gridster.resize_widget($(this), 4, 2);
            })
            .on('mouseleave', '> .dj-superstar', function() {
                gridster.resize_widget($(this), 1, 1);

            });

          gridster.init();
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
 
    /* define a view; in this case a 'Layout' */
    module.AppLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'AppContainer',
        template: '#layout-template',
 
        regions: {
            'Content' : '#content',
        },
 
        events: {
          'click #nav-presales': 'renderPresales',
          'click #nav-lineup': 'renderLineup',
          'click #nav-details': 'renderDetails'
        },


        /* called when the view initializes, before it displays */
        initialize: function() {
            console.log('main layout: initialize');
        },
 
        updateNav: function(event) {
          if (!event) return;
          this.$('.navbar-nav > li').removeClass('active');
          $(event.currentTarget).addClass('active');
        },

        renderPresales: function(event) {
          var presalesLayout = new module.PresalesLayoutView();
          this.Content.show(presalesLayout);
          this.updateNav(event);
        },

        renderLineup: function(event) {
          var lineupLayout = new module.LineupLayoutView();
          this.Content.show(lineupLayout);
          this.updateNav(event);
        },

        renderDetails: function(event) {
          var detailsLayout = new module.DetailsLayoutView();
          this.Content.show(detailsLayout);
          this.updateNav(event);
        },

        onRender: function() {
          this.renderPresales();
        },
 
        onShow: function() {
            console.log('main layout: onShow');
        }
    });
 
    /* Tell the module what to do when it is done loading */
    module.addInitializer(function(){
        /* create a new instance of the layout from the module */
        var layout = new module.AppLayoutView();
 
        /* display the layout in the region defined at the top of this file */
        app.appRegion.show(layout);
    });
});
 
/* once the DOM initializes, start the app */
$(document).ready(function() {
  app.start();
});