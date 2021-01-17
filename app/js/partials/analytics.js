(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-75622019-6', 'auto');
ga('send', 'pageview');
ga('require', 'displayfeatures');


setTimeout("ga('send', 'event', 'read', '1_seconds')", 1000);
setTimeout("ga('send', 'event', 'read', '10_seconds')", 10000);
// setTimeout("ga('send', 'event', 'read', '20_seconds')", 20000);
// setTimeout("ga('send', 'event', 'read', '30_seconds')", 30000);
// setTimeout("ga('send', 'event', 'read', '40_seconds')", 40000);
// setTimeout("ga('send', 'event', 'read', '50_seconds')", 50000);
// setTimeout("ga('send', 'event', 'read', '60_seconds')", 60000);
// setTimeout("ga('send', 'event', 'read', '70_seconds')", 70000);
// setTimeout("ga('send', 'event', 'read', '80_seconds')", 80000);
// setTimeout("ga('send', 'event', 'read', '90_seconds')", 90000);
// setTimeout("ga('send', 'event', 'read', '100_seconds')", 100000);
// setTimeout("ga('send', 'event', 'read', '110_seconds')", 110000);
// setTimeout("ga('send', 'event', 'read', '120_seconds')", 120000);

var appstore = document.querySelector('.ga-appstore');
var googleplay = document.querySelector('.ga-googleplay');
var promo = document.querySelector('.ga-promo');
var phone = document.querySelectorAll('.ga-phone');
var social = document.querySelectorAll('.ga-social');

appstore.addEventListener('click', function() {
  ga('send', 'event', 'appstore', 'click');
  console.log('appstore');
});
googleplay.addEventListener('click', function() {
  ga('send', 'event', 'googleplay', 'click');
  console.log('googleplay');
});
// promo.addEventListener('click', function() {
//   ga('send', 'event', 'promo', 'click');
//   console.log('promo');
// });
for (var i = 0; i < phone.length; i++) {
  phone[i].addEventListener('click', function() {
    console.log('phone', phone[i]);
    ga('send', 'event', 'phone', 'click');

  });
}
for (var y = 0; y < social.length; y++) {
  social[y].addEventListener('click', function() {
    console.log('social', social[y]);
    ga('send', 'event', 'social', 'click');

  });
}

// $('.ga-appstore').click(function() {
//   ga('send', 'event', 'appstore', 'click');
// });
//
// $('.ga-googleplay').click(function() {
//   ga('send', 'event', 'googleplay', 'click');
// });
// $('.ga-promo').click(function() {
//   ga('send', 'event', 'promo', 'click');
// });
// $('.ga-phone').click(function() {
//   ga('send', 'event', 'phone', 'click');
// });
// $('.ga-social').click(function() {
//   ga('send', 'event', 'social', 'click');
// });
