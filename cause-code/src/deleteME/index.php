<?php

	for($i=0; $i<=1000; $i++) {
		$data = array("product" => "Some Product");                                                                    
		$data_string = json_encode($data);                                                                                   
		                                                                                                                     
		$ch = curl_init('http://localhost:3000/');                                                                      
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
		    'Content-Type: application/json',                                                                                
		    'Content-Length: ' . strlen($data_string))                                                                       
		);                                                                                                                   
		                                                                                                                     
		$result = curl_exec($ch);
	}

?>