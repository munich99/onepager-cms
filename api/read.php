<?php
// load file
$data = file_get_contents('../assets/birds.json');

// decode json to associative array
$json_arr = json_decode($data, true);

foreach ($json_arr as $key => $value) {
    echo  $json_arr[$key] . " - " .  $json_arr[$value] . "<br/>";
}


echo $json_arr[0]['ID'];
echo 'hallo';

// https://www.kodingmadesimple.com/2017/05/add-update-delete-read-json-file-php.html
?>