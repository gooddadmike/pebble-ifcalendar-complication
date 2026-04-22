import { toIFC } from 'ifcalendar-js';

Pebble.addEventListener('ready', () => {
  const ifcDate = toIFC(new Date(), 'short');
  
  // Use the injected MessageKey object
  Pebble.sendAppMessage({
    "IFC_Text": ifcDate
  }, 
  () => { console.log('Sent: ' + ifcDate); },
  (e) => { console.log('Send failed!'); }
  );
});
