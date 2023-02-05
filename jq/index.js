const $setting = $('.setting');
const $codeName = $('.code-name');
const $subNavLs = $('.sub-nav-ls');

$setting.click(() => {
    // $subNavLs.toggle()
    var random = Math.floor(Math.random()*10000);
    console.log(random);
})
