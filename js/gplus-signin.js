var helper = (function() {
  var BASE_API_PATH = 'plus/v1/';

  return {
    /**
     * Hides the sign in button and starts the post-authorization operations.
     *
     * @param {Object} authResult An Object which contains the access token and
     *   other authentication information.
     */
     onSignInCallback: function(authResult) {
      gapi.client.load('plus','v1', function(){
        if (authResult['access_token']) {
          $('#authOps').show('slow');
          $('#gButton').hide('slow');
          $('#gButton2').hide('slow');
          helper.profile();

        } else if (authResult['error']) {
          // There was an error, which means the user is not signed in.
          // As an example, you can handle by writing to the console:
          console.log('There was an error: ' + authResult['error']);
          $('#profile').hide('quick');
          $('#authOps').hide('slow');
          $('#gButton').show('slow');
          $('#gButton2').show('slow');
        }
        console.log('authResult', authResult);
      });
    },

    /**
     * Calls the OAuth2 endpoint to disconnect the app for the user.
     */
     disconnect: function() {
      // Revoke the access token.
      $.ajax({
        type: 'GET',
        url: 'https://accounts.google.com/o/oauth2/revoke?token=' +
        gapi.auth.getToken().access_token,
        async: false,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(result) {
          console.log('revoke response: ' + result);
          $('#authOps').hide('quick');
          $('#profile').hide('quick');
          $('#profile').empty();
          $('#gButton').show('slow');
          $('#gButton2').show('slow');
        },
        error: function(e) {
          console.log(e);
        }
      });
    },

    /**
     * Gets and renders the currently signed in user's profile data.
     */
     profile: function(){
      var request = gapi.client.plus.people.get( {'userId' : 'me'} );
      request.execute( function(profile) {
        $('#profile').empty();
        if (profile.error) {
          $('#profile').append(profile.error);
          return;
        }
        localStorage.setItem('userLogged', profile.displayName + profile.tagline);
        var username = localStorage.getItem('userLogged');   
        console.log(username);
        $('#profile').append(
          $('<img src=\"' + profile.image.url + '\" style="max-height:20px; max-width:20px;" />'));
      });
    }
  };
})();

/**
 * jQuery initialization
 */
 $(document).ready(function() {
  $('.fancybox').fancybox({
    type: 'iframe',
    autoSize : false
  });
  $('#disconnect').click(helper.disconnect);
  $('#loaderror').hide();
  
});

/**
 * Calls the helper method that handles the authentication flow.
 *
 * @param {Object} authResult An Object which contains the access token and
 *   other authentication information.
 */
 function onSignInCallback(authResult) {
  helper.onSignInCallback(authResult);
}