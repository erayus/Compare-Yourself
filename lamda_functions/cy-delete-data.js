const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'ap-southeast-2', apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) =>{
    // TODO implement
    const params = {
          Key:{
              "UserId": {
                  S: "User_0.5162124313710601"
              }
          },
          TableName: "compare-yourself"
        };
        dynamodb.delete(params, function(error, data){
            if(error){
                console.log(error)
                callback(error)
            }else{
                console.log(data);
                callback(null, data);
            }
        })
};
