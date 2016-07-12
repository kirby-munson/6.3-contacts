var Backbone = require('backbone');


var Contact = Backbone.Model.extend({
  idAttribute:"_id",
   urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby',
  initialize: function(){
    console.log("a new contact is born");
  }

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby'
});

module.exports = {
  'Contact': Contact,
  'ContactCollection': ContactCollection
};
