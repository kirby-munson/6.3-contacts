var Backbone = require('backbone');
var contactTemplate = require('../templates/contact-item.hbs');
var $ = require('jquery');

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
  }
});



module.exports = {
  'ContactListView': ContactListView
};
