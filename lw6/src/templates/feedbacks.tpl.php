<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Просмотр</title>
    <link href="css/styles_for_check.css" rel="stylesheet" >
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="form">
      <div class="header">
        <span class="line_left"></span>
        <h4 class="form_header">Информация</h4>
        <span class="line_right"></span>
      </div>
      <form action="feedbacks.php" method="POST" >
        <label>Email: <span class="red">*</span></label>
        <div>
          <input type="email" name="email" value="<?php echo $args['email'] ?? ''; ?>" class="input_data" title="Email" required />
        </div>
        <button type="submit" >Отправить</button>
        <?php if (isset($args['error'])): ?>
          <p class="error_message"><?php echo $args['error']; ?></p>
        <?php endif; ?>
      </form>
      <?php if (isset($args['answers'])): ?>
        <label>Имя</label>
        <div class="output_data"><?php echo $args['first_name']; ?></div>
        <label>Страна</label>
        <div class="output_data"><?php echo $args['country']; ?></div>
        <label>Пол</label>
        <div class="output_data"><?php echo $args['gender']; ?></div>
        <label>Сообщение</label>
        <div class="output_data"><?php echo $args['message']; ?></div>
      <?php endif; ?>
    </div>
    <footer>© 2006-2018 Поволжский государственный технологический университет, ФГБОУ ВО «ПГТУ»</footer>
  </body>
</html>
