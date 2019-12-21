let navBarToggle = document.getElementById('js-navbar-toggle');
let mainNav = document.getElementById('js-menu');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

function handleMenuItemClick() {
  $('.nav-links').on('click', function(event) {
    $('.main-nav').hide();
  });
}

function handleMenuIconClick(){
  //listen for click on burger icon
  // show main nav
  $('.navbar-toggle').on('click', function(event){
      $('.main-nav').show();
  })
}

function callFns() {
  handleMenuItemClick();
  handleMenuIconClick();
}

$(callFns());