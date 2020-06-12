<?php
   	
   $myFile = "bird.json";
   $arr_data = array(); // create empty array

  try
  {
	   //Get form data
	   $formdata = array(
	      'firstName'=> $_POST['firstName'],
	      'lastName'=> $_POST['lastName'],
	      'email'=>$_POST['email'],
	      'mobile'=> $_POST['mobile']
	   );

	   //Get data from existing json file
	   //$jsondata = file_get_contents($myFile);

	   // converts json data into array
	   // $arr_data = json_decode($jsondata, true);

	   // Push user data to array
       // array_push($arr_data,$formdata);
       
       $data = file_get_contents($myFile);

       // decode json to array
       $arr_data = json_decode($data, true);
       
       foreach ($arr_data as $key => $value) {
           if ($value['firstName'] == 'Paki') {
               $arr_data[$key]['mobile'] = "117";
           }
       }
       
       // encode array to json and save to file
       file_put_contents($myFile, json_encode($json_arr));
    }

       //Convert updated array to JSON
	   // $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
	        echo 'Data successfully saved';
	    }
	   else 
	        echo "error";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }




   // read file




?>