window.onload = function() {
  var items = document.getElementsByClassName('item');
  var items_lenght = items.length;
  var count = 0;
  var total = 0;

  for (var i = 0; i < items_lenght; i++) {
    count = count + parseInt(items[i].getAttribute("data-count"));
    
    if (items[i].getAttribute("data-price") != null) {
      total = total + parseInt(items[i].getAttribute("data-price"));
    }
  }

  document.getElementById('total').innerHTML = count;
  document.getElementById('total-price').innerHTML = "R$ " + total.toLocaleString('pt-br', {minimumFractionDigits: 2});
}
