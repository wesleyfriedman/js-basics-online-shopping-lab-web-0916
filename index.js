var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart(){
	return cart
}

function addToCart(item){
	var price = Math.floor((Math.random()*100))
	var food = new Object()
	cart.push({[item]: price})
	console.log(`${item} has been added to your cart.`)
	return cart
}

function viewCart(){
	if(cart.length === 0){
		 // "Your shopping cart is empty."
		console.log("Your shopping cart is empty.")
	} else {
		var string = "In your cart, you have "
		for(var i = 0; i < cart.length; i++) {
			var name = Object.keys(cart[i])[0]
			var price = cart[i][name]
			// debugger
			string+= `${name} at $${price}`
			if(i < cart.length - 1){
				string += ', '
			}
			else{
				string += '.'
			}
		}
	}
	console.log(string)
}

// function viewCart() {
//  const leng = cart.length
//  if (!leng) {
//  return console.log("Your shopping cart is empty.")
//  }

//  const words = []

//  for (let i = 0; i < leng; i++){
//    let both = cart[i]
//    let item = Object.keys(both)[0]
//    let price = both[item]
//    words.push(`${item} at \$${price}`) 
//    }
//  console.log(`In your cart, you have ${words.join(', ')}.`)
// }

function placeOrder(cc_num = false){
	if(!cc_num){
		console.log("We don't have a credit card on file for you to place your order.")
	}
	else{
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cc_num}.`)
		cart.length = 0
	}
}

function removeFromCart(item_name){
	if (!(item_name in cart)){
		console.log("That item is not in your cart.")
	}
	else{
		delete cart[item_name]
		return cart
	}
	cart = []
}




