// Studio54
// code by Phillip

 
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


var PresalesView = Backbone.View.extend({

		el: '.content',

    initialize:function(){
        this.render();
    },

    render: function() {

    	var source 		= $('#presales-template').html(),
    			template 	= Handlebars.compile(source),
					presales 	= template(),
					$presales = $(presales);

			// debugger
			this.$el.append(presales);
			$presales.fadeIn();
    }
});
 
// var presalesView = new PresalesView();

var LineupView = Backbone.View.extend({
    el: '.dj-superstar',
  
    tagName: 'li',

    initialize:function(){
        this.render();
    },

    render: function() {

     var gridster = $("#lineup ul").gridster({
            widget_margins: [10, 10],
            widget_base_dimensions: [140, 140]
     }).data('gridster');

  		_.each(artists.models, function(artist,index){
      	var source 		= $('#lineup-template').html(),
      			template 	= Handlebars.compile(source),
						artist 		= template(artist.toJSON());
     	
        gridster.add_widget(artist, 1,1,1,index+1);
  		});
    }

});
 

var MainView = Backbone.View.extend({

  el: 'body',

  events: {
    'click #nav-lineup': 'clickLineup',
    'click #nav-presales': 'clickPresales',
  },

  initialize: function() {
    this.views = [];
    this.render();
  },

  updateNav: function(event) {
    this.$('.navbar-nav > li').removeClass('active');
    $(event.currentTarget).addClass('active');
  },

  cleanViews: function() {
    _(this.views).each(function(view){
      view.remove();
    });
  },

  clickLineup: function(event) {
    event.preventDefault();
    this.updateNav(event);
    this.cleanViews();
    this.renderLineup();
  },

  clickPresales: function(event) {
    event.preventDefault();
    this.updateNav(event);
    // this.cleanViews();
    this.showPresales(true);
  },

  renderLineup: function() {
    this.showPresales(false);
    var lineupView = new LineupView();

    // this.views.push(lineupView);
  },

  renderPresales: function() {
    var presalesView = new PresalesView();
    this.views.push(presalesView);
  },

  showLineup: function() {
    // debugger;
  },

  showPresales: function(truth) {
    this.$('.presales').toggle(truth);
    // var presalesView = new PresalesView();
    // this.views.push(presalesView);     
  },

  render: function() {
    this.showPresales(true);
  },

});

var mainView = new MainView();


