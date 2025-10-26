const gitHubApi = "https://api.github.com/users/josh-a-bant";

fetch(gitHubApi).then(function (data) {
  console.log(data);
});

fetch(gitHubApi).then((data) => console.log(data));





//callback hell
// const cart = ["BMW", "Triumph", "Kawasaki"];
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummery(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

//promise chaining
//createOrdr(cart)
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => showOrderSummery(paymentInfo))
// .then((paymentInfo) => updateWalletBalance(paymentInfo));
