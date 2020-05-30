<?php

  function displayData(): void
  {
    $email = getPostParameter('email');
    $feedback['email'] = $email;
    $file = 'data/' . $email . '.txt';;
    if (!file_exists($file))
    {
      $answer['Error'] = 'Отправитель не найден';
      renderTemplate('feedbacks.tpl.php', $feedback);
      return;
    }
    $direction = 'data/' . $email . '.txt';
    if (file_exists($direction))
    {
      $fd = fopen($direction, 'r');

      $answer['first_name'] = htmlentities(fgets($fd));
      $email = htmlentities(fgets($fd));
      $answer['country'] = htmlentities(fgets($fd));
      $answer['gender'] = htmlentities(fgets($fd));
      $answer['message'] = htmlentities(fgets($fd));
    }
  }

  function feedbackPage(): void
  {
    renderTemplate('feedback.tpl.php');
  }
