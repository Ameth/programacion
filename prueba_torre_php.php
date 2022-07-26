<?php
//   $ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');
//   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//   curl_setopt($ch, CURLOPT_HEADER, 0);
//   $data = curl_exec($ch);
//   curl_close($ch);

//   $json=json_decode($data, true);

	$json=array("data" => "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47");

  $datos=$json['data'];
  $datos=str_replace(",","",$datos);

  //print_r(str_replace(",","",$datos));

  $ar=array();
  $count=0;
  $dd=explode(" ",$datos);

  foreach($dd as $val){
    $nw=explode("=",$val);
    if(is_numeric($nw[1])){
      if($nw[1]>=50){
        $count++;
      }      
    }
  }
  
  echo $count;
?>