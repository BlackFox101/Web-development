<?php
  FUNCTION getGETParametr(String$name):?String
  {
    return isset($_GET[$name])?(String)$_GET[$name]:null;
  }
  
  //$text = getGETParametr('text');
  $identifier = getGETParametr('Identifier');
  echo "indentifier = $identifier";
  $check = 'Y'; //Y - подходит по правилу, N - не подходит  

  echo "<br />";  
  IF (Ctype_alnum($identifier))
  {
    IF (Ctype_alpha($identifier))
    {
      echo "Да, так как только из букв";
    }
    ELSE
    {
      IF (Ctype_digit($identifier))
      {
        echo "Нет, так как состоит только из цифр";
      }
      ELSE
      { 
        IF (preg_match('/^[0-9]+$/', $identifier[0]))
        {
          echo 'Нет, начинается с цифры';
        }
        else
        {
          echo 'ДА';
        }
      }
    }
  }
  ELSE
  {
    echo "Нет, так как состоит не только из букв или цифк, либо там нет ни букв, ни цифр";
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
