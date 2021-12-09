import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency.js";

$(document).ready(function() {
  $('#currencyConvert').click(function() {
    const number = $("#number").val();
    const outputcurrency = $("#currency").val();
    $('#currencyConvert').val("");

    let promise = CurrencyService.getCurrency();
    promise.then(function(response) {
      const body =JSON.parse(response);      
        $('.showCurrency').html(`${number} USD converts to;${number * body.conversion_rates[outputcurrency]} ${outputcurrency}`);
        
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
