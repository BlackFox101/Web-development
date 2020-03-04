<?php
  FUNCTION getGETParametr(String$name):?String
  {
    return isset($_GET[$name])?(String)$_GET[$name]:null;
  }
  
  $pass = getGETParametr('password');
  $len = StrLen($pass); // Длина пароля 4
  $rel = 0; //Надежность reliability
  echo "Password security: "; 
  if (preg_match('/[a-zA-Z0-9]/', $pass))
  {
    //К надежности прибавляет (4*n) длина пароля
    $rel = 4 * $len;
       
    //Поместим в $digits все цифры пароля
    preg_match_all('/[0-9]/', $pass, $digits, PREG_SET_ORDER);
    //К надежности прибавляется +(n*4), где n - количество цифр в пароле
    $rel = $rel + (4 * count($digits));
    
    //Если есть символы в верхнем регистре то будут расчеты
    IF (preg_match('/[A-Z]/', $pass))
    {
      //Помести в $upper все буквы верхнего регистра
      preg_match_all('/[A-Z]/', $pass, $upper, PREG_SET_ORDER);
      // К надежности прибавляется +((len-n)*2) в случае, 
      // если пароль содержит n символов в верхнем регистре
      $rel = $rel + (($len - count($upper))*2);
    };
    
    //Если есть символы в нижнем регистре то будут расчеты
    IF (preg_match('/[a-z]/', $pass))
    {
      //Помести в $lower все буквы нижнего регистра
      preg_match_all('/[a-z]/', $pass, $lower, PREG_SET_ORDER);
      // К надежности прибавляется +((len-n)*2) в случае, 
      // если пароль содержит n символов в нижнем регистре
      $rel = $rel + (($len - count($lower))*2);
    };
    
    //Если пароль состоит только из букв вычитаем число равное количеству символов
    IF (Ctype_alpha($pass))
    {
      $rel = $rel - $len;
    };
    
    //Если пароль состоит только из цифр вычитаем число равное количеству символов.
    IF (Ctype_digit($pass))
    {
      $rel = $rel - $len;
    };
    
    foreach (count_chars($data, 1) as $i => $val) 
    {
     IF ($val > 1)
     {
       $rel = $rel - $val;
     };
    };
    echo $rel;
    
  }
  else
  {
    echo $rel;
  }