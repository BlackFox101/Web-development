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
    $checkEmail = checkEmail($email);

    if ($checkEmail)
    {
      $feedback['email_error_msg'] = 'Такой Email уже зарегистирован';
    }

    if (!empty($first_name) &&  !empty($email) && !empty($message) && !$checkEmail)
    {
      $feedback = [
        'name' => $first_name,
        'email' => $email,
        'country' => $country,
        'gender' => $gender,
        'message' => $message
      ];
      saveFeedback($feedback);
    }

    $feedback['email'] = $email;
    $feedback['first_name'] = $first_name;
    $feedback['message'] = $message;

    renderTemplate('main.tpl.php', $feedback);
  }
