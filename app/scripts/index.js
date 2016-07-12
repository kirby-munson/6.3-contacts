var Backbone = require('backbone');
var views = require('./views/contact');
var Contact = require('./models/contact').Contact;
var ContactCollection = require('./models/contact').ContactCollection;
var $ = require('jquery');
var $deleteButton = require('./views/contact');

var allTheContacts = new ContactCollection();
var contactListHtml = new views.ContactListView({'collection': allTheContacts});
allTheContacts.fetch();

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

  allTheContacts.on('add', function(contact){
    var $deleteButton = $('<button class="btn btn-danger">Delete Post</button>');
    var $newContact = $('<h1>'+ contact.get('name') +'<br />'+ '<h4>' + 'Email: ' + contact.get('email') + '</h4>' + contact.get('instagram') + '</h1><br />');
    $('#contact-list').append($newContact).append($deleteButton);
    $deleteButton.on('click', function(event){
      event.preventDefault();
      contact.destroy();
      $newContact.hide();
      $deleteButton.hide();
    });
});
