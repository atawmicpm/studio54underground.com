var Artists = Backbone.Collection.extend();  
 
var artists = new Artists([
  { id: 1, 
    name: 'Ethan Miller', 
    mix: 'https://soundcloud.com/djethan/live-at-fnf-campout-xviii', 
    photo: 'https://i1.sndcdn.com/avatars-000038731944-1lqeu7-t500x500.jpg'
  },
  {
    id: 2, 
    name: 'Chipper Guy', 
    mix: 'https://soundcloud.com/chipper-guy/deep-end-of-the-pool', 
    photo: 'https://i1.sndcdn.com/avatars-000023321689-cqclvs-t500x500.jpg'
  }
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
 
        initialize: function(){console.log('Lineup: initialize');},
        
        onRender: function(){


          console.log('Lineup: onRender');
        },
        
        onShow: function(){
          var gridster = $("#lineup ul").gridster({
            widget_margins: [10, 10],
            widget_base_dimensions: [200, 200]
          }).data('gridster');

          _.each(artists.models, function(artist,index){
            var source    = $('#dj-template').html(),
                template  = Handlebars.compile(source),
                artist    = template(artist.toJSON());

            gridster.add_widget(artist, 1,1,1,index+1);
          });

          console.log('Lineup: onShow');
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