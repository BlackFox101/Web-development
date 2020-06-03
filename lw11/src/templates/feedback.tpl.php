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
      <form method="POST" >
        <label>Email: <span class="red">*</span></label>
          <input type="email" name="email" value="<?php echo $args['email'] ?? ''; ?>" class="input_data" title="Email" required />
          <?php if (isset($args['Error'])): ?>
            <p><?php echo $args['Error']; ?></p>
          <?php endif; ?>
        <button type="submit" >Отправить</button>
        <?php if (isset($args['error'])): ?>
          <p class="error_message"><?php echo $args['error']; ?></p>
        <?php endif; ?>
      </form>
      <?php if (isset($args['first_name'])): ?>
        <div class="output">
          <label>Имя</label>
          <input class="input_data" value="<?php echo $args['first_name']; ?>" readonly>
          <label>Страна</label>
          <input class="input_data" value="<?php echo $args['country']; ?>" readonly>
          <label>Пол</label>
          <input class="input_data" value="<?php echo $args['gender']; ?>" readonly>
          <label>Сообщение</label>
          <textarea readonly><?php echo $args['message']; ?></textarea>
        </div>
      <?php endif; ?>
    </div>
  </body>
</html>
