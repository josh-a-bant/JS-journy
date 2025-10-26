const gitHubApi = "https://api.github.com/users/josh-a-bant";

fetch(gitHubApi).then(function (data) {
  console.log(data);
});

fetch(gitHubApi).then((data) => console.log(data));

const cart = ["BMW", "Triumph", "Kawasaki"];

//callback hell
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummery(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });
