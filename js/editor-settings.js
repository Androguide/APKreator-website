/* LICENSED UNDER THE GENERAL PUBLIC LICENSE (GPL) 
 *
 * @author: Louis Teboul
 * @email: admin@androguide.fr
 * Written for APKreator.com
 */

 $(document).ready(function() {

  var editor = ace.edit("editor");
  var themeBox = document.getElementById('theme');
  var kbdBox = document.getElementById('keybinding');
  var modes = document.getElementById('mode-box');

  if (localStorage.getItem('currKbdHandler') != "" && localStorage.getItem('currKbdHandler') != null)
  	kbdBox.options[localStorage.getItem('currKbdHandler')].selected = true;

  if(localStorage.getItem("themePos") != "" && localStorage.getItem("themePos") != null)
  	themeBox.options[localStorage.getItem("themePos")].selected = true;

  if(localStorage.getItem("modePos") != "" && localStorage.getItem("modePos") != null)
  	modes.options[localStorage.getItem("modePos")].selected = true;


  themeBox.addEventListener("change", function() {

    var currTheme = document.getElementById('theme').value;
    localStorage.setItem("currTheme", currTheme);
    localStorage.setItem("themePos", themeBox.options.selectedIndex);
    console.log(themeBox.options.selectedIndex);
    editor.setTheme(currTheme);
  });

  modes.addEventListener("change", function() {
    editor.getSession().setMode(modes.value);
    console.log(modes.value);
    localStorage.setItem("currMode", modes.value);
    localStorage.setItem("modePos", modes.options.selectedIndex);
  });

});

