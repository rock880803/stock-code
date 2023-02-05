const $setting = $('.setting');
const $codeName = $('.code-name');
const $subNavLs = $('.sub-nav-ls');

$setting.click(() => {
    // $subNavLs.toggle()
    var random = Math.floor(Math.random()*10000);
    console.log(random);
})

const endpoint = "https://github.com/rock880803/stock-code/blob/main/data.json/code.json"
$.ajax({
    url: endpoint,
  }).done(function (data) {
    console.log(data);
    console.log(typeof data); // object
  });