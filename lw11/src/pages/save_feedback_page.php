<?php

  function saveFeedbackPage()
  {
    $feedback = [];
    $email = getPostParameter('email');
    $first_name = getPostParameter('first_name');
    $country = getPostParameter('country');
    $gender = getPostParameter('gender');
    $message = getPostParameter('message');

    if (empty($first_name))
    {
      $feedback['name_error_msg'] = 'Укажите имя';
    }

    if (empty($email))
    {
      $feedback['email_error_msg'] = 'Укажите email';
    }

    if (empty($message))
    {
      $feedback['sms_error_msg'] = 'Напишите что-нибудь';
    }

    if (!empty($first_name) &&  !empty($email) && !empty($message))
    {
      $direction = 'data/' . $email . '.txt';
      $fd = fopen($direction, 'w+');
      fwrite($fd, $first_name."\r\n".$email."\r\n".$country."\r\n".$gender."\r\n".$message);
      fclose($fd);
    }

    $feedback['email'] = $email;
    $feedback['first_name'] = $first_name;
    $feedback['message'] = $message;

    renderTemplate('main.tpl.php', $feedback);
  }
