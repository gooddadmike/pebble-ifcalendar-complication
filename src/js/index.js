var toIFC = require('ifcalendar-js').toIFC;
var keys  = require('message_keys');

function sendDate() {
  var now = new Date();
  var msg = {};
  msg[keys.IFC_Text]     = toIFC(now, 'short');
  msg[keys.IFC_Date_Key] = now.toISOString().slice(0, 10);
  Pebble.sendAppMessage(msg, function() {
    console.log('IFC sent: ' + msg[keys.IFC_Text]);
  }, function() {
    console.log('IFC send failed');
  });
}

exports.init = function() {
  Pebble.addEventListener('ready', function() {
    sendDate();
  });
};
