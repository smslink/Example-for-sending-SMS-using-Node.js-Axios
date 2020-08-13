const axios = require("axios");

axios({
  "method": "GET",
  "url": "https://secure.smslink.ro/sms/gateway/communicate/index.php",
  "headers": {
    "content-type": "application/octet-stream",
    "useQueryString": true
  }, "params": {
    "to": "07xyzzzzzz",
    "message": "test",
    "connection_id": "... connection id ...",
    "password": "... password ..."
  }
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })