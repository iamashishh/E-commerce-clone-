const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfVWAN08uIy0aOhR3b9mz-YzwANdia2SeLA0Oa5rq1yJ70_YPee_s_NjFtSP08Pe6lPtTwNuHYlISn9L",
  client_secret: "EF1RG2iRmkBYopUadG30zSM4OB-senfcuJPDrI3UJXJ16a_3O8AdxIJk3yI1BB0YRnALRwNENmfQuPLd",
});

module.exports = paypal;