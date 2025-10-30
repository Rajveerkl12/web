let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
}

function scrollToShop() {
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}
