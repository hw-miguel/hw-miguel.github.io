window.onload = function() {
  var items = document.getElementsByClassName('item');
  var items_lenght = items.length;
  var count = 0;

  for (var i = 0; i < items_lenght; i++) {
    count = count + parseInt(items[i].getAttribute("data-count"));
  }

  document.getElementById('total').innerHTML = count;
}
