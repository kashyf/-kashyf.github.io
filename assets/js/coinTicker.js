var uti = 64.28;
$.get("https://api.fixer.io/latest?base=USD&symbols=USD,INR", function(data){
  uti = data.rates.INR;
});


var utiSign = "₹ ";
var btcPrc, ethPrc, omgPrc, eosPrc, cvcPrc, gnoPrc = 0;

$.get("https://coincap.io/sscoins", function(data){

  for (i = 0; i < data.length; i++) {

    if (data[i].short == "BTC") {
      btcPrc = (data[i].price * uti).toFixed(2);
      $('#btc-val > p.coin-value').text(utiSign + (data[i].price * uti).toFixed(2));
      var indicator = (data[i].cap24hrChange) < 0 ? "down-val" : "up-val";
      $('#btc-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
      $('#btc-val .blocks-inline > p.coin-change').addClass(indicator);
      $('#btc-val .blocks-inline > p.coin-change').text(data[i].cap24hrChange + "%");
    }
    if (data[i].short == "XRP") {
      btcPrc = (data[i].price * uti).toFixed(2);
      $('#xrp-val > p.coin-value').text(utiSign + (data[i].price * uti).toFixed(2));
      var indicator = (data[i].cap24hrChange) < 0 ? "down-val" : "up-val";
      $('#xrp-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
      $('#xrp-val .blocks-inline > p.coin-change').addClass(indicator);
      $('#xrp-val .blocks-inline > p.coin-change').text(data[i].cap24hrChange + "%");
    }

    if (data[i].short == "ETH") {
      ethPrc = (data[i].price * uti).toFixed(2);
      $('#eth-val > p.coin-value').text(utiSign + (data[i].price * uti).toFixed(2));
      var indicator = (data[i].cap24hrChange) < 0 ? "down-val" : "up-val";
      $('#eth-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
      $('#eth-val .blocks-inline > p.coin-change').addClass(indicator);
      $('#eth-val .blocks-inline > p.coin-change').text(data[i].cap24hrChange + "%");
    }
    if (data[i].short == "OMG") {
      omgPrc = (data[i].price * uti).toFixed(2);
      $('#omg-val > p.coin-value').text(utiSign + (data[i].price * uti).toFixed(2));
      var indicator = (data[i].cap24hrChange) < 0 ? "down-val" : "up-val";
      $('#omg-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
      $('#omg-val .blocks-inline > p.coin-change').addClass(indicator);
      $('#omg-val .blocks-inline > p.coin-change').text(data[i].cap24hrChange + "%");
    }
    if (data[i].short == "EOS") {
      eosPrc = (data[i].price * uti).toFixed(2);
      $('#eos-val > p.coin-value').text(utiSign + (data[i].price * uti).toFixed(2));
      var indicator = (data[i].cap24hrChange) < 0 ? "down-val" : "up-val";
      $('#eos-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
      $('#eos-val .blocks-inline > p.coin-change').addClass(indicator);
      $('#eos-val .blocks-inline > p.coin-change').text(data[i].cap24hrChange + "%");
    }
    if (data[i].short == "CVC") {
      cvcPrc = (data[i].price * uti).toFixed(2);
      $('#cvc-val > p.coin-value').text(utiSign + (data[i].price * uti).toFixed(2));
      var indicator = (data[i].cap24hrChange) < 0 ? "down-val" : "up-val";
      $('#cvc-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
      $('#cvc-val .blocks-inline > p.coin-change').addClass(indicator);
      $('#cvc-val .blocks-inline > p.coin-change').text(data[i].cap24hrChange + "%");
    }
    if (data[i].short == "GNO") {
      gnoPrc = (data[i].price * uti).toFixed(2);
      $('#gno-val > p.coin-value').text(utiSign + (data[i].price * uti).toFixed(2));
      var indicator = (data[i].cap24hrChange) < 0 ? "down-val" : "up-val";
      $('#gno-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
      $('#gno-val .blocks-inline > p.coin-change').addClass(indicator);
      $('#gno-val .blocks-inline > p.coin-change').text(data[i].cap24hrChange + "%");
    }

  }

});





// Modify data live from socket



var socket = io.connect('https://coincap.io',{
  transports: ['websocket']
});
socket.on('trades', function(tradeMsg) {
  // console.log(tradeMsg);
  if (tradeMsg.message.coin == "BTC") {
    var liveIndicator = (tradeMsg.message.msg.price * uti).toFixed(2) < btcPrc ? "down-val" : "up-val";
    btcPrc = (tradeMsg.message.msg.price * uti).toFixed(2);
    $('#btc-val > p.circle').removeClass("up-val down-val");
    $('#btc-val > p.circle').addClass(liveIndicator);

    $('#btc-val > p.coin-value').text(utiSign + (tradeMsg.message.msg.price * uti).toFixed(2));

    var indicator = (tradeMsg.message.msg.cap24hrChange) < 0 ? "down-val" : "up-val";
    $('#btc-val .blocks-inline .blocks-inline > p.coin-change').removeClass("up-val down-val");
    $('#btc-val .blocks-inline .blocks-inline > p.coin-change').addClass(indicator);
    $('#btc-val .blocks-inline .blocks-inline > p.coin-change').text(tradeMsg.message.msg.cap24hrChange + "%");
  }
  if (tradeMsg.message.coin == "XRP") {
    var liveIndicator = (tradeMsg.message.msg.price * uti).toFixed(2) < btcPrc ? "down-val" : "up-val";
    btcPrc = (tradeMsg.message.msg.price * uti).toFixed(2);
    $('#xrp-val > p.circle').removeClass("up-val down-val");
    $('#xrp-val > p.circle').addClass(liveIndicator);

    $('#xrp-val > p.coin-value').text(utiSign + (tradeMsg.message.msg.price * uti).toFixed(2));

    var indicator = (tradeMsg.message.msg.cap24hrChange) < 0 ? "down-val" : "up-val";
    $('#xrp-val .blocks-inline .blocks-inline > p.coin-change').removeClass("up-val down-val");
    $('#xrp-val .blocks-inline .blocks-inline > p.coin-change').addClass(indicator);
    $('#xrp-val .blocks-inline .blocks-inline > p.coin-change').text(tradeMsg.message.msg.cap24hrChange + "%");
  }

  if (tradeMsg.message.coin == "ETH") {
    var liveIndicator = (tradeMsg.message.msg.price * uti).toFixed(2) < ethPrc ? "down-val" : "up-val";
    ethPrc = (tradeMsg.message.msg.price * uti).toFixed(2);
    $('#eth-val > p.circle').removeClass("up-val down-val");
    $('#eth-val > p.circle').addClass(liveIndicator);

    $('#eth-val > p.coin-value').text(utiSign + (tradeMsg.message.msg.price * uti).toFixed(2));

    var indicator = (tradeMsg.message.msg.cap24hrChange) < 0 ? "down-val" : "up-val";
    $('#eth-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
    $('#eth-val .blocks-inline > p.coin-change').addClass(indicator);
    $('#eth-val .blocks-inline > p.coin-change').text(tradeMsg.message.msg.cap24hrChange + "%");
  }
  if (tradeMsg.message.coin == "OMG") {
    var liveIndicator = (tradeMsg.message.msg.price * uti).toFixed(2) < omgPrc ? "down-val" : "up-val";
    omgPrc = (tradeMsg.message.msg.price * uti).toFixed(2);
    $('#omg-val > p.circle').removeClass("up-val down-val");
    $('#omg-val > p.circle').addClass(liveIndicator);

    $('#omg-val > p.coin-value').text(utiSign + (tradeMsg.message.msg.price * uti).toFixed(2));

    var indicator = (tradeMsg.message.msg.cap24hrChange) < 0 ? "down-val" : "up-val";
    $('#omg-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
    $('#omg-val .blocks-inline > p.coin-change').addClass(indicator);
    $('#omg-val .blocks-inline > p.coin-change').text(tradeMsg.message.msg.cap24hrChange + "%");
  }
  if (tradeMsg.message.coin == "EOS") {
    var liveIndicator = (tradeMsg.message.msg.price * uti).toFixed(2) < eosPrc ? "down-val" : "up-val";
    eosPrc = (tradeMsg.message.msg.price * uti).toFixed(2);
    $('#eos-val > p.circle').removeClass("up-val down-val");
    $('#eos-val > p.circle').addClass(liveIndicator);

    $('#eos-val > p.coin-value').text(utiSign + (tradeMsg.message.msg.price * uti).toFixed(2));

    var indicator = (tradeMsg.message.msg.cap24hrChange) < 0 ? "down-val" : "up-val";
    $('#eos-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
    $('#eos-val .blocks-inline > p.coin-change').addClass(indicator);
    $('#eos-val .blocks-inline > p.coin-change').text(tradeMsg.message.msg.cap24hrChange + "%");
  }
  if (tradeMsg.message.coin == "CVC") {
    var liveIndicator = (tradeMsg.message.msg.price * uti).toFixed(2) < cvcPrc ? "down-val" : "up-val";
    cvcPrc = (tradeMsg.message.msg.price * uti).toFixed(2);
    $('#cvc-val > p.circle').removeClass("up-val down-val");
    $('#cvc-val > p.circle').addClass(liveIndicator);

    $('#cvc-val > p.coin-value').text(utiSign + (tradeMsg.message.msg.price * uti).toFixed(2));

    var indicator = (tradeMsg.message.msg.cap24hrChange) < 0 ? "down-val" : "up-val";
    $('#cvc-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
    $('#cvc-val .blocks-inline > p.coin-change').addClass(indicator);
    $('#cvc-val .blocks-inline > p.coin-change').text(tradeMsg.message.msg.cap24hrChange + "%");
  }
  if (tradeMsg.message.coin == "GNO") {
    var liveIndicator = (tradeMsg.message.msg.price * uti).toFixed(2) < cvcPrc ? "down-val" : "up-val";
    gnoPrc = (tradeMsg.message.msg.price * uti).toFixed(2);
    $('#gno-val > p.circle').removeClass("up-val down-val");
    $('#gno-val > p.circle').addClass(liveIndicator);

    $('#gno-val > p.coin-value').text(utiSign + (tradeMsg.message.msg.price * uti).toFixed(2));

    var indicator = (tradeMsg.message.msg.cap24hrChange) < 0 ? "down-val" : "up-val";
    $('#gno-val .blocks-inline > p.coin-change').removeClass("up-val down-val");
    $('#gno-val .blocks-inline > p.coin-change').addClass(indicator);
    $('#gno-val .blocks-inline > p.coin-change').text(tradeMsg.message.msg.cap24hrChange + "%");
  }

})
