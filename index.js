const axios = require("axios");

axios({
  "method": "GET",
  "url": "https://secure.smslink.ro/sms/gateway/communicate/index.php",
  "headers": {
    "content-type": "application/octet-stream",
    "useQueryString": true
  }, "params": {
    "to": "07xyzzzzzz",
    "message": "My Test Message",
    "connection_id": "... My Connection ID ...",
    "password": "... My Connection Password ..."
  }
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })