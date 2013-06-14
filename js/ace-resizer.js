/* LICENSED UNDER THE GENERAL PUBLIC LICENSE (GPL) 
 *
 * @author: Louis Teboul
 * @email: admin@androguide.fr
 * Written for APKreator.com
 */

 $(document).ready(function(){

 	var heightUpdateFunction = function() {

        // see http://stackoverflow.com/questions/11584061/
        var newHeight = editor.getSession().getScreenLength()
        * editor.renderer.lineHeight
        + editor.renderer.scrollBar.getWidth()
        + 75;

        $('#editor').height(newHeight.toString() + "px");
        editor.resize();
    };

    heightUpdateFunction();
    editor.getSession().on('change', heightUpdateFunction);
});