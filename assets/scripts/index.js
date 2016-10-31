'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(()=>{
  $('.sign-up-form').on('submit', function(e){
    e.preventDefault();
    let email = $('#sign-up-email').val();
    let password = $('#sign-up-password').val();
    debugger;

    $('#sign-up-modal').modal('hide');
  });

});
