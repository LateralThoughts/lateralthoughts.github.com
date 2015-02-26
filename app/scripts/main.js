'use strict'; 

$('.bio-trigger').on('click', function(e) {
    var person = $(e.target).closest('.person');
    if(person) {
        var title = person.find('.person-title').html() || '';
        var content = person.find('.bio').html() || '';
        var tags = person.find('.tags').html() || '';
        var image = person.find('.person-picture').attr('src') || '';

        $('#modal-bio .modal-title').html(title);
        $('#modal-bio .bio').html(content);
        $('#modal-bio .modal-footer').html(tags);
        $('#modal-bio .modal-image').attr('src', image);
    }
});


// Over state of Studio, Swat, Training.
var offerRollover = function(offerName) {
  $('.lt-' + offerName).hover(function() {
    $(this).find('.offer-pic').removeClass('icon-lt_' + offerName).addClass('icon-lt_offer_rollover');
  }, function() {
    $(this).find('.offer-pic').addClass('icon-lt_' + offerName).removeClass('icon-lt_offer_rollover');
  });
};
offerRollover('studio');
offerRollover('training');
offerRollover('swat');


// Active menu item
$(function() {
    var path = location.pathname.split("/")[1];
    if(path) {
        $('.nav a[href^="/' + path + '"]').parent().addClass('active');
    }
});


// Animated scroll for links with anchors
$('a[href^=\'#\']').on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 600, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$('.project .description').readmore({
    moreLink: '<a href="#" style="text-align:center"><i class="fa fa-plus-circle fa-lg"></i> Voir plus</a>',
    lessLink: '<a href="#" style="text-align:center"><i class="fa fa-minus-circle fa-lg"></i> Fermer</a>',
    speed: 200,
    maxHeight: 100
});

new WOW().init();
