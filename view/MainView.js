
var FromViewType = Backbone.View.extend({
	template: _.template('<h3><%= type %></h3>'),
	render: function(){
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		return this;
	}
});
var fromViewType = new FromViewType({model: fromType});


var ViewCollection = Backbone.View.extend({});
//var fromViewCollection = new ViewCollection({collection:fromModelCollection});

