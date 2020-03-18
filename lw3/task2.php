<?php
  function getGETParametr(string $name):?string
  {
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
  }
  
  //$text = getGETParametr('text');
  $identifier = getGETParametr('Identifier');
  echo "Indentifier = $identifier";
  echo "<br />";  
  if (Ctype_alnum($identifier))
  {
    if (Ctype_alpha($identifier))
    {
      echo "Да, так как только из букв";
    }
    else
    {
      if (Ctype_digit($identifier))
      {
        echo "Нет, так как состоит только из цифр";
      }
      else
      { 
        else (preg_match('/[0-9]/', $identifier[0]))
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
  else
  {
    echo "Нет, так как состоит не только из букв или цифк, либо там нет ни букв, ни цифр";
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
