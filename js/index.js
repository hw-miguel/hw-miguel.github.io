window.onload = function () {
  var count = 0;
  var total = 0;
  var items = document.getElementsByClassName('item');
  var items_lenght = items.length;

  for (var i = 0; i < items_lenght; i++) {
    let item = items[i];
    count = count + parseInt(item.getAttribute('data-count'));

    let title_element = item.getElementsByClassName('title')[0];
    let title_text = title_element.innerText;
    let title_url = title_text.toLowerCase();

    if (title_url.includes("maisto")) {
      title_url = `1:64 ${title_url}`;
    } else if (title_url.includes("greenlight")) {
      title_text = `1:64 ${title_url}`;
    } else if (title_url.includes("matchbox")) {
      title_url = `1:64 ${title_url}`;
    } else {
      title_url = `hot wheels 1:64 ${title_url}`;
    }

    title_url = `https://google.com/search?q=${encodeURIComponent(title_url).replace('%20', '+')}`;
    title_element.innerHTML = `<a target="_blank" href="${title_url}">${title_text}</a>`;

    if (item.getAttribute('data-price') != null) {
      let price = parseInt(item.getAttribute('data-price'));

      total = total + price;
      price = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

      let price_element = document.createElement('spam');
      price_element.innerHTML = `<span class="price">${price}</spam>`;

      title_element.appendChild(price_element);
    }
  }

  total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  document.getElementsByClassName('total')[0].innerHTML = count;
  document.getElementsByClassName('total-price')[0].innerHTML = `(${total})`;
}
