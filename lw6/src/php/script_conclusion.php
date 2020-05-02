<?php
  function getGETParametr(string $name):?string
  {
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
  }
  $email = getGETParametr('email');
  $direction = '../data/' . $email . '.txt';
  if (file_exists($direction))
  {
    $fd = fopen($direction, 'r');

    $first_name = htmlentities(fgets($fd));
    $email = htmlentities(fgets($fd));
    $country = htmlentities(fgets($fd));
    $gender = htmlentities(fgets($fd));
    $message = htmlentities(fgets($fd));
  }
  else
  {
    $first_name = "Нет данных..";
    $country = "Нет данных..";
    $gender = "Нет данных..";
    $message = "Нет данных..";
  }
?>