<?php

require_once "../lib/auth.php";
$auth = new AuthClass();

if ($auth->logged()) {
  $key = @$_GET['id'];
  if (!empty($key)) {
    $json = json_decode(file_get_contents('../data/cities.json'));
    unset($json[$key]);
    file_put_contents('../data/cities.json',json_encode($json));
  }
}

header("Location: /admin");
