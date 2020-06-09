<?php

  function database(): PDO
  {
    static $connection = null;
    if ($connection === null)
    {
      $connection = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
      $connection->query('SET NAMES utf8');
    }

    return $connection;
  }

  function saveFeedback(array $feedback) : void
  {
    $name = database()->quote($feedback['name']);
    $email = database()->quote($feedback['email']);
    $country = database()->quote($feedback['country']);
    $gender = database()->quote($feedback['gender']);
    $message = database()->quote($feedback['message']);
    $stm = database()->query("
        INSERT INTO
            People(Name, Email, Country, Gender, Message)
        VALUES
            ($name, $email, $country, $gender, $message);
    ");
  }

  function checkEmail($email) : bool
  {
    $email = database()->quote($email);
    $stm = database()->query("
        SELECT * 
        FROM 
            People 
        WHERE 
            Email = $email;
    ");
    $outputАvailable = $stm->fetch(PDO::FETCH_BOUND);
    if ($outputАvailable) {
      return true;
    }
    return false;
  }

  function getFeedback(string $email): array
  {
    $email = database()->quote($email);
    $stm = database()->query("
        SELECT * 
        FROM 
            People 
        WHERE 
            Email = $email;
    ");
    $outputStr = $stm->fetch();
    return $outputStr;
  }

