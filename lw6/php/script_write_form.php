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

  $email = "Email: $email";
  
  $first_name = getGETParametr('first_name');
  $first_name = "First_name: $first_name";
  
  $country = getGETParametr('country');
  $country = "Сountry: $country";
  
  $gender = getGETParametr('gender');
  $gender = "Gender: $gender";
  
  $message = getGETParametr('message');
  $message = "Message: $message";

  $fd = fopen($direction, 'w+');
  fwrite($fd, $first_name."\r\n".$email."\r\n".$country."\r\n".$gender."\r\n".$message);
  fclose($fd);