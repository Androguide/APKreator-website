/* LICENSED UNDER THE GENERAL PUBLIC LICENSE (GPL) 
 *
 * @author: Louis Teboul
 * @email: admin@androguide.fr
 * Written for APKreator.com
 */

 var editor = ace.edit("editor");
 var currTheme = localStorage.getItem('currTheme');

 if (currTheme != "" && currTheme != null)
 	editor.setTheme(currTheme);
 else
 	editor.setTheme("ace/theme/monokai");

 // Default behaviors
 editor.getSession().setMode(localStorage.getItem('currMode'));
 editor.setShowPrintMargin(false);

    // Auto-save the content of the editor when it changes ///////////////
    editor.getSession().on('change',function(){
    	var mContent = editor.getValue();
    	var elem = document.getElementById("test");
    	elem.value = mContent;
    	localStorage.setItem('code', mContent);
    });

    // Restore saved code in window.onload() ////////////////////////////
    window.onload = function(){
    	var stored = localStorage.getItem('code');

    	if (stored != null && stored != "") {
    		editor.setValue(stored);
    		editor.clearSelection();
    	}
    };

    // Undo & Redo //////////////////////////////////////////////////////
    document.getElementById('undo').addEventListener("click", function() {
    	editor.undo();
        $('#editor').effect('shake', 500);
    });
    document.getElementById('redo').addEventListener("click", function() {
    	editor.redo();
        $('#editor').hide();
        $('#editor').show('slide', 400);
    });


    // Font-size handling ///////////////////////////////////////////////
    document.getElementById('editor').style.fontSize='12px';
    var currSize = 2;
    var sizes = ["10px", "11px", "12px", "13px","14px", "15px", "16px", "17px", "18px", "19px", "20px", "21px", "22px", "24px", "26px"];

    // Increment font size
    document.getElementById('fs-more').addEventListener("click", function() {
    	if (currSize < sizes.length) {
    		currSize ++;
    		document.getElementById('editor').style.fontSize=sizes[currSize];
    		editor.resize();
    	}
    });

    // Decrement font size
    document.getElementById('fs-less').addEventListener("click", function() {
    	if (currSize >= 0) {
    		currSize --;
    		document.getElementById('editor').style.fontSize=sizes[currSize];
    		editor.resize();
    	}
    });

    // Save editor content to hidden form /////////////////////////////////
    document.getElementById('saveToDrive').addEventListener("click", function() {
    	var mContent = editor.getValue();
    	document.getElementById("test").value = mContent;
        document.getElementById("filenameForm").value = localStorage.getItem('currFile');
        var username = localStorage.getItem('userLogged');
        username = username.replace(/\s/g, '');
        username = username.replace(/\s/g, '');
        username = username.replace(/\(/g, '');
        username = username.replace(/\)/g, '');
        username = username.replace(/\'/g, '');
        username = username.replace(/\"/g, '');
        username = username.replace(/,/g, '');
        document.getElementById("username").value = username;
    });


    // Full Screen Button //////////////////////////////////////////////////
    document.getElementById('fullscreen').addEventListener("click", function() {
        $('#header-navbar').slideToggle('slow');
    });


    // Keybinding select box ////////////////////////////////////////////////
    document.getElementById('keybinding').addEventListener("change", function() {
    	switch(document.getElementById('keybinding').selectedIndex) {
    		case 0:
    			localStorage.setItem("currKbdHandler", 0);
    			break;
    		case 1:
    			editor.setKeyboardHandler("vim");
    			localStorage.setItem("currKbdHandler", 1);
    			break;
    		case 2:
    			editor.setKeyboardHandler("emacs");
    			localStorage.setItem("currKbdHandler", 2);
    			break;
    		case 3:
    			// launch a fancybox to set custom shortcuts
    			localStorage.setItem("currKbdHandler", 3);
    			break;
    		default:
    			break;
    	}
    });

    // Additionnal APKreator keyboard shortcuts ////////////////////////////
    editor.commands.addCommand({
    	name: 'kbdSave',
    	bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
    	exec: function(editor) {
    		document.hiddenForm.submit();
    	},
    	readOnly: false
    });

     editor.commands.addCommand({
        name: 'kbdUndo',
        bindKey: {win: 'Ctrl-Z',  mac: 'Command-Z'},
        exec: function(editor) {
            editor.undo();
            $('#editor').effect('shake', 500);
        },
        readOnly: false
    });

     editor.commands.addCommand({
        name: 'kbdRedo',
        bindKey: {win: 'Ctrl-Y',  mac: 'Command-Y'},
        exec: function(editor) {
            editor.redo();
            $('#editor').hide();
            $('#editor').show('slide', 400);
        },
        readOnly: false
    });

     editor.commands.addCommand({
        name: 'kbdRedo2',
        bindKey: {win: 'Ctrl-Shift-Z',  mac: 'Command-Shift-Z'},
        exec: function(editor) {
            editor.redo();
            $('#editor').hide();
            $('#editor').show('slide', 400);
        },
        readOnly: false
    });

    