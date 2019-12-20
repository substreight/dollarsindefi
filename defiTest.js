/*
fetch('https://public.defipulse.com/api/MarketData')
  .then(response => response.json())
  .then(data => (document.getElementById('totalUSD').textContent = data.All.total))
  .catch(error => console.error(error));
*/

window.addEventListener("load", () => {

const numberFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

setInterval(async () => {

const response = await fetch("https://public.defipulse.com/api/MarketData");
const { All: { total } } = await response.json();
document.getElementById("totalUSD").textContent = numberFormat.format(total);

}, 5000);

} )
