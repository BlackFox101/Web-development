<?php
  FUNCTION getGETParametr(String$name):?String
  {
    return isset($_GET[$name])?(String)$_GET[$name]:null;
  }
  //first_name=Alexei&last_name=Sadovin&email=sad_alexxxei@mail.ru&age=18
  //Открывает файл в разных режимах
  $email = getGETParametr('email');
  $direction = 'data/' . $email . '.txt'; // data/sad_alexxxei@mail.ru.txt
  $email = "email: $email";
  
  $first_name = getGETParametr('first_name');
  $first_name = "first_name: $first_name";
  
  $last_name = getGETParametr('last_name');
  $last_name = "last_name: $last_name";
  
  $age = getGETParametr('age');
  $age = "age: $age";
  
  
  $fp = fopen($direction, 'w+');
  fwrite($fp, $email.'<br />'.$first_name.'<br />'.$last_name.'<br />'.$age);
  fclose($fp);