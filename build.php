<?php
  $command = "javac Main.java 2>&1";
  $result = passthru($command);
  echo($result);
?>