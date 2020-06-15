<?php
   	
   $myFile = "data.json";
   $arr_data = array(); // create empty array

  try
  {
	   //Get form data
	   $formdata = file_get_contents('php://input');
		$arr_data2 = json_decode($formdata, true);

	   //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);


	   foreach ($arr_data as $key => $value) {
		   
			if ($value['firstName'] == "aboutme") {
				// echo $value['firstName']."--";
				// array_push($arr_data,"ffffff");
				$arr_data[$key]['lastName'] = $arr_data2['lastName'];
			}
		}



	   // Push user data to array
	  //  array_push($arr_data,$arr_data2);


       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
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

?>
