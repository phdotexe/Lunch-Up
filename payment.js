const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();
  let handler = PaystackPop.setup({
    key: 'pk_test_51c885798361cea41ac5c47db36402122411fdcf',
    email: document.getElementById("email-address").value,
    address: document.getElementById("address").value,
    amount: document.getElementById("amount").value * 100,
   
    
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });
  handler.openIframe();
}