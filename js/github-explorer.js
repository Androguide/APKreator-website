/* LICENSED UNDER THE GENERAL PUBLIC LICENSE (GPL) 
 *
 * @author: Louis Teboul
 * @email: admin@androguide.fr
 * Written for APKreator.com
 */

 $(document).ready(function() {
  var currFile = localStorage.getItem('currFile');
  var currUser = localStorage.getItem('currUser');
  var currRepo = localStorage.getItem('currRepo');
  console.log(currUser + "/" + currRepo);

  // Set the current file tab's name
  if (currFile != "" && currFile != null) {
    $('#file-tab').empty().html(currFile);


    // Show or hide the build button depending on currFile's extension
    var whichMode = currFile.split('.');
    if (whichMode[whichMode.length - 1] == "java")
      $('#build-java').show('explode');
    else
      $('#build-java').hide('explode');
  }

  // Set the input box to last visited github repo
  if (currUser != "" && currUser != null && currRepo != "" && currRepo != null) {  
    $('#repo').val(currUser + "/" + currRepo);
    $('#git-root').empty();
    $('#git-root').repo({ user: currUser, name: currRepo });
  }

  // Go to the right github repo on click
  $('#git-button').click(function(){
    var input = (document.getElementById('repo').value).split('/');
    console.log(input[0] + " --> " + input[1]);
    localStorage.setItem("currUser", input[0]);
    localStorage.setItem("currRepo", input[1]);
    $('#git-root').empty();
    $('#git-root').repo({ user: input[0], name: input[1] });
  });

});