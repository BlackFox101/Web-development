<?php
  function getGETParametr(string $name):?string
  {
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
  }
  $email = getGETParametr('email');
  $direction = 'task4/data/' . $email . '.txt';
  if (file_exists($direction))
  {
    $fd = fopen($direction, 'r');
    while (!feof($fd))
    {
      $str = htmlentities(fgets($fd));
      echo $str."<br />";
    };
    fclose($fd);
  }
  else
  {
    echo 'Этот пользователь не зарегистирован';
  }
