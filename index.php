<?php

$html = file_get_contents('_index.html');
$data = json_decode(file_get_contents('data/cities.json'));

$cities = '';
foreach ($data as $city) {
  $cities .= '<option>'.$city.'</option>';
}
$city = $data[0];

$html = str_replace("%cities%", $cities, $html);
$html = str_replace("%city%", $city, $html);
echo $html;
