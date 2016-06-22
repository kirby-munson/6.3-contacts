var Backbone = require('backbone');
var views = require('./views/contact');
var Contact = require('./models/contact').Contact;
var ContactCollection = require('./models/contact').ContactCollection;
var $ = require('jquery');


var allTheContacts = new ContactCollection();
var contactListHtml = new views.ContactListView({'collection': allTheContacts});
$('#contact-list').append(contactListHtml.render().el);

$('.app-form').append('Name: <input type="text" name="name"><br />');
$('.app-form').append('Email: <input type="text" name="email"><br />');
$('.app-form').append('Instagram: <input type="text" name="instagram"><br />');
$('.app-form').append('<input class="submit-button" type="submit" value="Add Contact">');

$('.submit-button').on('click', function(event){
  var inputName = $('input[name="name"]').val();
  var inputEmail = $('input[name="email"]').val();
  var inputInsta = $('input[name="instagram"]').val();
  event.preventDefault();
  var newContact = new Contact({ name: inputName, email: inputEmail, instagram: inputInsta });
  newContact.save();
  allTheContacts.fetch();
});

$('.delete-button').on('click', function(event){
  event.preventDefault();
    model.destroy();
});
