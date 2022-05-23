window.onload = function() {
  var items = document.getElementsByClassName('item');
  var items_lenght = items.length;
  var count = 0;
  var total = 0;

  for (var i = 0; i < items_lenght; i++) {
    count = count + parseInt(items[i].getAttribute('data-count'));
    
    if (items[i].getAttribute('data-price') != null) {
      price = parseInt(items[i].getAttribute('data-price'));
      total = total + price;

      price = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      price_element = document.createElement('spam');
      price_element.innerHTML = `<span class="price">${price}</spam>`;
      title_element = items[i].getElementsByClassName('title')[0];
      title_element.appendChild(price_element);
    }
  }

  total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  document.getElementsByClassName('total')[0].innerHTML = count;
  document.getElementsByClassName('total-price')[0].innerHTML = `(${total})`;
}
