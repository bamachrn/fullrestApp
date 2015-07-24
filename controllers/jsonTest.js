var jsonQuery = require('json-query')
 
 var data =[
    {
        "id":"1",
        "name":"dighi",
        "pin":"411015"
    },
    {
        "id":"2",
        "name":"Wadgaon",
        "pin":"411041"
    }
    ]
  
//  var area = jsonQuery('areas[id=1]', {
//        data: data
// });
 //var person = data.people[country='NZ'];
  
  console.log(JSON.parse(data));
