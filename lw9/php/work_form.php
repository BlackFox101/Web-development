<?php
$first_name = $_POST['first_name'];
$email = $_POST['email'];
if (preg_match("/^[a-zA-Z]+$/",$first_name))
{
  $correct_name = 'true';
}
elseif (preg_match("/^[А-Яа-яЁё]+$/",$first_name))
{
  $correct_name = 'true';
}
else
{
  $correct_name = 'false';
}

$direction = '../';
chdir($direction);
$direction = 'data/' . $email . '.txt';

if (filter_var($email, FILTER_VALIDATE_EMAIL))
{
  if (!file_exists($direction))
  {
    $correct_email = 'true';
  }
  else
  {
    $correct_email = 'registered';
  }
}
else
{
  $correct_email = 'false';
}

$my_array = ["email" => "$correct_email",
             "first_name" => "$correct_name"];
$json_str = json_encode($my_array);
echo $json_str;

if ($correct_email == 'true' && $correct_name == 'true')
{
  form_entry($direction, $email);
}

function form_entry($direction, $email)
{
  $first_name = $_POST['first_name'];
  $country = $_POST['country'];
  $gender = $_POST['gender'];
  $message = $_POST['message'];

  $fd = fopen($direction, 'w+');
  fwrite($fd, $first_name."\r\n".$email."\r\n".$country."\r\n".$gender."\r\n".$message);
  fclose($fd);
}
