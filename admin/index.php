<?php

require_once "../lib/auth.php";
$auth = new AuthClass();

if (isset($_POST['login']))
  $auth->login($_POST['login'],$_POST['pass']);
?><!doctype html>
<head>
  <link rel="stylesheet" href="../assets/css/style.css" />
  <title>Админ-панель</title>
</head>
<body>
  <h2>Города</h2>
  <?php if ($auth->logged()):?>
    <?php
    $json = json_decode(file_get_contents('../data/cities.json'));
    foreach ($json as $key => $city){
      print "<li>".$city." [<a href='/admin/remove.php?id=".$key."'>x</a>]</li>";
    }

    ?>
    <form action="/admin/add.php" method="post">
      <input type="text" name="title" placeholder="Город" />
      <button type="submit">Добавить</button>
    </form>
  <?php else:?>
    <form method="post">
      <input type="text" name="login" placeholder="Логин" />
      <input type="password" name="pass" placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>
  <?php endif;?>
</body>
</html>
