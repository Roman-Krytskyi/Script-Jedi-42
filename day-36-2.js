// https://www.codewars.com/kata/587593285448632b8d000143

function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  const order = OrderAPI.getShoppingCartAsync(user)
                        .then(function(cart) {
      shoppingCart = cart;
  });
  const userCheck = CustomerAPI.getProfileAsync(user)
                          .then(function(profile) {
    zipCode = profile.zipCode;
  });
  Promise.all([order, userCheck])
          .then (() => shippingRate = calculateShipping(shoppingCart, zipCode))
          .then( () => {
          OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
          orderSuccessful = success;
          });
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
  });
  }
