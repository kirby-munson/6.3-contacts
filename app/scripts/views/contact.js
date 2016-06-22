var Backbone = require('backbone');
var contactTemplate = require('../templates/contact-item.hbs');

var ContactListView = Backbone.View.extend({
  tagName: 'dd',
  attributes:{
    'id':'list-contact',
    className: 'well col-md-offset-3 col-md-6'
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderContact);
  },
  render: function(){
    return this
  },
  renderContact: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.append(contactItem.render().el);
}
});


var ContactItemView = Backbone.View.extend({
  tagName: 'dl',
  className:'list-group-item',
  template: contactTemplate,

  render: function(){
    var context = this.model.toJSON();
    var renderedHtml = this.template(context);

    this.$el.html(renderedHtml);
    return this;
  },
});

module.exports = {
  'ContactListView': ContactListView,
  'ContactItemView': ContactItemView
};
