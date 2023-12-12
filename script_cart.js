document.addEventListener('DOMContentLoaded', function () {
  // fariaveis
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.querySelector('.checkout-button');
    const cart = [];
    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });
  
    function addToCart(e) {
      const button = e.target;
      const product = button.closest('.card'); // Encontra o elemento pai mais próximo com a classe 'card'
      
      // Verifica se o produto foi encontrado
      if (product) {
        const productName = product.dataset.name;
        const productPrice = parseFloat(product.dataset.price);
  
        const item = { name: productName, price: productPrice };
        cart.push(item);
  
        updateCart();
      }
    }
    function updateCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
  
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
  
        total += item.price;
      });
  
      cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    }
  
    checkoutButton.addEventListener('click', function() {
      checkout();
    });
  
    function checkout() {
      if(cart.length > 0){
      alert('Compra realizada com sucesso!');
      cart.length = 0; // Limpar o carrinho
      updateCart(); // Atualizar o carrinho após a compra
      }
      else{
        alert('Nenhum item no carrinho');
      }
    }
  });
