[{"API":"https://emumba-test.herokuapp.com/trend","Method":"GET","Request Payload (json)":"N/A","Response Contains":"N/A","Expected Response Code":201,"Expected Response time in seconds (less than)":10,"Expected Response Size in kilobyte (less than)":6},{"API":"https://emumba-test.herokuapp.com/user","Method":"POST","Request Payload (json)":"{\n    \"first_name\": \"Ali\",\n    \"last_name\": \"Ahmad\",\n    \"email\": \"ali.ahmad2356@gmail.com\",\n    \"password\": \"12345\",\n    \"confirm_password\": \"12345\"\n}","Response Contains":"[\"email\", \"first_name\", \"last_name\", \"plan\", \"id\", \"access_token\", \"refresh_token\"]","Expected Response Code":200,"Expected Response time in seconds (less than)":10,"Expected Response Size in kilobyte (less than)":2},{"API":"https://emumba-test.herokuapp.com/user/login","Method":"POST","Request Payload (json)":"{\n    \"email\": \"ali.ahmad23@gmail.com\",\n    \"password\": \"12345\"\n}","Response Contains":"[\"email\", \"first_name\", \"last_name\", \"plan\", \"id\"]","Expected Response Code":200,"Expected Response time in seconds (less than)":10,"Expected Response Size in kilobyte (less than)":2}]