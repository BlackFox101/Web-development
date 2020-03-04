<?php
  FUNCTION getGETParametr(String$name):?String
  {
    return isset($_GET[$name])?(String)$_GET[$name]:null;
  }
  $email = getGETParametr('email');
  $direction = 'task4/data/' . $email . '.txt';
  $fd = fopen($direction, 'r');
  while(!feof($fd))
  {
    $str = htmlentities(fgets($fd));
    echo $str."<br />";
  }
  fclose($fd);
