const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = priceElement.value;
  const number = numberElement.value;
  const name = priceElement.options[priceElement.selectedIndex].text; // 商品名を取得

  let purchase = {
    name: name.split(" ")[0], // "オリジナルブレンド200g 500円"のような文字列から商品名のみを抽出
    price: parseInt(price),
    number: parseInt(number),
  };

  const newPurchase = purchases.findIndex((item) => item.price === purchase.price) // --1
  if(purchases.length < 1 || newPurchase === -1) {
    purchases.push(purchase)
  } else {
    purchases[newPurchase].number += purchase.number
  }

  window.alert(`${purchase.name} ${purchase.price}円 ${purchase.number}点\n小計${subtotal()}円`);  priceElement.value = "";
  numberElement.value = "";
}


function display() {
  return purchases.map(purchase => {
    return `${purchase.price}円が${purchase.number}点`
  }).join("\n");
};

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    console.log(prev)
    return prev + purchase.price * purchase.number 
  }, 0);
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  let detail = purchases.map(p => `${p.name} ${p.price}円 ${p.number}点`).join("\n");
  window.alert(`${detail}\n小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum >= 3000) {
    return 0;
  } else if (sum >= 2000) {
    return 250;
  } else {
    return 500;
  }
}
