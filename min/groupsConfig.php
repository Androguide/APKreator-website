<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 *
 * See http://code.google.com/p/minify/wiki/CustomSource for other ideas
 **/

return array(
	'jQueryPlugins' => array('//js/jquery.js', '//js/superfish.js', '//js/jquery.easing.1.3.js', '//js/jquery.cookie.js', '//js/touchTouch.jquery.js'),
    'bootstrapAndStyles' => array('//css/bootstrap.css', '//css/responsive.css', '//css/style.css', '//css/touchTouch.css'),
    'fancyboxJs' => array('//fancybox/source/jquery.fancybox.pack.js', '//fancybox/lib/jquery.mousewheel-3.0.6.pack.js', '//fancybox/source/helpers/jquery.fancybox-buttons.js', '//fancybox/source/helpers/jquery.fancybox-media.js', '//fancybox/source/helpers/jquery.fancybox-thumbs.js'),
    'fancyboxCss' => array('//fancybox/source/jquery.fancybox.css', '//fancybox/source/helpers/jquery.fancybox-buttons.css', '//fancybox/source/helpers/jquery.fancybox-thumbs.css'),
);