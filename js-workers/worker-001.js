onmessage = function(e) {
  console.log('Message received from main script', e);  
  //var workerResult = URL.createObjectURL(e.data);
  //console.log('Posting message back to main script');
  for(var i=0; i<=10000000000; i++){
    var a = 9, b = 10
    var c = a + b
  }
  postMessage(654321)   
  //postMessage(workerResult);
}
