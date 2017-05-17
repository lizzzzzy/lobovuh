<?php

require_once "../lib/auth.php";
$auth = new AuthClass();

if ($auth->logged()) {
  $city = @$_POST['title'];
  if (!empty($city)) {
    $json = array();
    $temp = json_decode(file_get_contents('../data/cities.json'));
    foreach ($temp as $t) {
      $json[] = $t;
    }
    $json[] = $city;
    file_put_contents('../data/cities.json',json_encode($json));
  }
}

header("Location: /admin");
