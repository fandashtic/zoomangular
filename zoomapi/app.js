const express = require('express');
var request = require("request");
const app = express();
const port = 3000;
const authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IndaVDB0bHVLUTJlVjdzWlhFa2IwR1EiLCJleHAiOjE1OTEyNTk5NjIsImlhdCI6MTU5MDY1NTE2M30.XLBasM1JUFTwJHHP3fL0Fa00os-VqMTE6CMoYOGb9sI';

app.get('/getUsers', (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://api.zoom.us/v2/users',
        qs: {page_number: '1', page_size: '30', status: 'active'},
        headers: {
          authorization: authorization
        }
      };
    
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
        //console.log(body);
      })    
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));