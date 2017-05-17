<?php

$html = file_get_contents('index.html');
$data = json_decode(file_get_contents('data/cities.json'));

$html = str_replace("%cities%", $cities, $html);
$html = str_replace("%city%", $city, $html);
