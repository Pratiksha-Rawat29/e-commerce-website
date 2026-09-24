const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ARw1GANk5UsdSV3zzPGB1dMTcD05l7I4DALTG6dAh1_VAzXc8vwSlEGZqoNIzl__INIobGRLAcX1kn8r",
  client_secret: "EOnFZNEgAmuMiuXMOdSxHGHoFZX6JR9AV4u6h27wOyjQvW7mxBVTMqzUV2W6M4Lfwiucul6ppPrGUcrg",
});

module.exports = paypal;