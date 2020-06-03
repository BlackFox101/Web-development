<?php

  function displayData(): void
  {
    $email = getPostParameter('email');
    if (!checkEmail($email))
    {
      $feedback['email'] = $email;
      $feedback['Error'] = 'Отправитель не найден';
      renderTemplate('feedback.tpl.php', $feedback);
      return;
    }

    $output = getFeedback($email);
    $answer['first_name'] = $output['Name'];
    $answer['email'] = $email;
    $answer['country'] = $output['Country'];
    $answer['gender'] = $output['Gender'];
    $answer['message'] = $output['Message'];
    renderTemplate('feedback.tpl.php', $answer);
  }

  function feedbackPage(): void
  {
    renderTemplate('feedback.tpl.php');
  }
