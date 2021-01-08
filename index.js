const axios = require("axios");

exports.handler = async (event, context, callback) => {
    axios.get(`http://ec2-18-191-176-57.us-east-2.compute.amazonaws.com/sendmail`)
    .then((response)=> {
        callback(null, response.data);
    })
    .catch(function (error) {
        callback(null, error);
    })
};