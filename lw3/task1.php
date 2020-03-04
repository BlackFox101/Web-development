<?php
  header("Content-Type: text/plain");

  FUNCTION getGETParametr(String$name):?String
  {
    return isset($_GET[$name]) ? (String)$_GET[$name] : null;
  }
  $text = getGETParametr('text');
  $text = trim($text); // Удаляет пробелы до и после текста
  $double_space = "  ";
  $pos = strripos($text, $double_space); //Находит два пробела в строке
  WHILE ($pos <> 0) //Пока будут двойные пробелы работает
  {
    $text = str_replace("  ", " ", $text);
    $pos = strripos($text, $double_space);
  }
  echo $text;