console.log('Hello Hackers ;)');
$(document).ready(function() {

  // calls to links in the navbar
  $('#home').click(function(){
    window.location = 'http://charlestonhackers.com';
  });

  $('#projects').click(function(){
    window.location = 'http://charlestonhackers.com/projects.html';
  });
  $('#about').click(function(){
    console.log('clicked');
    window.location = 'http://charlestonhackers.com/about.html';
  });


});
