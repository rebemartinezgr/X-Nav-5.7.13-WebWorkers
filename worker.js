

function buscaprimos(valor){
 	var n = 1;
  primelist = "";
	
  search: while (n<parseInt(valor)) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
	}
	return primelist;
};


self.onmessage = function(event) {
	console.log("worker: He recibido " + event.data);
	valor = event.data;
	var primelist = buscaprimos(valor);
	self.postMessage(primelist);
};

