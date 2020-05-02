<?php
  function getGETParametr(string $name):?string
  {
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
  }
  //first_name=Алексей&email=sad_alexei%40mail.ru&country=Россия&gender=men&message=Привет
  //Открывает файл в разных режимах
  $email = getGETParametr('email');
  $direction = '../';
  chdir($direction);
  $direction = 'data/' . $email . '.txt';
  
  $first_name = getGETParametr('first_name');
  
  $country = getGETParametr('country');
  
  $gender = getGETParametr('gender');
  
  $message = getGETParametr('message');

  $fd = fopen($direction, 'w+');
  fwrite($fd, $first_name."\r\n".$email."\r\n".$country."\r\n".$gender."\r\n".$message);
  fclose($fd);