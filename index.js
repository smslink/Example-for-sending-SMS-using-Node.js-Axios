const axios = require("axios");

/* 

  Get your SMSLink / SMS Gateway Connection ID and Password from 
  https://www.smslink.ro/get-api-key/

*/

/*

  HTTPS API Endpoint:  https://secure.smslink.ro/sms/gateway/communicate/index.php
  HTTP API Endpoint:   http://www.smslink.ro/sms/gateway/communicate/index.php

*/

axios({
  "method": "GET",
  "url": "https://secure.smslink.ro/sms/gateway/communicate/index.php",
  "headers": {
    "content-type": "application/octet-stream",
    "useQueryString": true
  }, "params": {
    "to": "07xyzzzzzz",
    "message": "My Test Message",
    "connection_id": "... My SMS Gateway Connection ID ...",
    "password": "... My SMS Gateway Connection Password ..."
  }
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
