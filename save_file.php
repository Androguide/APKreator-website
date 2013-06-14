<?php
	$user = $_POST['username'];
    $content = $_POST['test'];
    $myFile = $_POST['filenameForm'];
    $mkdir = 'mkdir ';
    echo exec('mkdir '.$user);
    $fh = fopen($user.'/'.$myFile, 'w') or die("ERROR: can't open file. Please contact us if the issue persists.");
    fwrite($fh, $content);
    fclose($fh);
    header("Location: /sandbox.html");
    exit;
?>