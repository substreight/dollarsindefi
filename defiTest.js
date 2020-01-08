const callApi = async () => {

const numberFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  const response = await fetch("https://public.defipulse.com/api/MarketData");
  if (response.ok) {
    let { All: { total } } = await response.json(); document.getElementById('totalUSD').innerHTML =  numberFormat.format(total);
    setTimeout(() => {
      callApi();
    }, 180000); // wait for one minute before calling the api again
  } else {
    callApi();
  }
};
window.addEventListener("load", () => {
  callApi();
});
