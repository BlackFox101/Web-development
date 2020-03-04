<?php
  FUNCTION getGETParametr(String$name):?String
  {
    return isset($_GET[$name])?(String)$_GET[$name]:null;
  }
  //first_name=Alexei&last_name=Sadovin&email=sad_alexxxei@mail.ru&age=18
  //Открывает файл в разных режимах
  $email = getGETParametr('email');
  $direction = 'data/' . $email . '.txt'; // data/sad_alexxxei@mail.ru.txt
  $email = "Email: $email";
  
  $first_name = getGETParametr('first_name');
  $first_name = "First_name: $first_name";
  
  $last_name = getGETParametr('last_name');
  $last_name = "Last_name: $last_name";
  
  $age = getGETParametr('age');
  $age = "Age: $age";
  
  
  $fd = fopen($direction, 'w+');
  fwrite($fd, $first_name."\r\n".$last_name."\r\n".$email."\r\n".$age);
  fclose($fd);
