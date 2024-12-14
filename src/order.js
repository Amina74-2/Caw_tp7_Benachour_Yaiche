export const placeOrder = (cart) => {
    if (cart.length === 0) {
      console.log("Your cart is empty. Cannot place order.");
      return;
    }
  
    console.log("Order Summary:");
    cart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - Price ${item.price}DA`);
    });
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total Price: Price ${total}DA`);
  
    alert("Your order has been placed successfully! 🎉");
  };
  