<?php

//! Full Access to another domain
// После тестирования закомментировать
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// TOKEN
$token = "965793654:AAHV1_ZOIjCWaGD-0BXuUmWpGb-FFL94nwk";

/*
  GET CHAT ID
  go to: https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
  where "XXXXXXXXXXXXXXXXXXXXXXX" is bot token (from @botfather)
*/

$chat_id = "-269166451";

// Grab js data
$_DATA = json_decode(file_get_contents('php://input'), true);

foreach($_DATA as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  die();
} else {
  echo "Error";die();
}
