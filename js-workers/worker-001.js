onmessage = function(e) {
  console.log('Message received from main script', e);  
  var workerResult = URL.createObjectURL(e.data);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}