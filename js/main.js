require.config({
  baseUrl: 'js'
});

require(['utils/numberFormatter'], function(numberFormatter) {
  alert(numberFormatter.format(1234567));
});
