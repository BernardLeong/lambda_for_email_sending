// const mailgun = require("mailgun-js");
// const DOMAIN = 'replies.izeemiot.de';
// const api_key = 'f92f93a32c4a56e183d57ff56ec8bef6-3d0809fb-33dfe060';

// const mg = mailgun({apiKey: api_key, domain: DOMAIN});
// const data = {
// 	from: 'bernard.leong@izeem.com',
// 	to: 'bernardleongqijie@gmail.com',
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });

const axios = require("axios");

axios.get(`http://ec2-18-191-176-57.us-east-2.compute.amazonaws.com/sendmail`)
.then((response)=> {
	console.log(response.data)
})
.catch(function (error) {
	console.log(error);
})
