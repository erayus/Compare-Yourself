const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'ap-southeast-2', apiVersion: '2012-08-10'});

exports.handler =  (event, context, callback) => {
    const params = {
        Item:{
            "UserId":{
                S: 'User_' + Math.random()
            },
            "Age": {
                N: event.age
            },
            "Height":{
                N: event.height
            },
            "Income":{
                N: event.income
            }
        },
        TableName: "compare-yourself"
    };
    dynamodb.putItem(params, function(err, data){
        if(err){
            console.log(err);
            callback(err);
        }else{
            callback(data);
        }
    });
    const age = event.age;
    const response = {
        age: age
    }
    callback(null, response)
};
