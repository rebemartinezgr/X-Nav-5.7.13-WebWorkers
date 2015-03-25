

function buscaprimos(valor){
 	var n = 1;
	var cont = 0;
  primelist = "";
	
  search: while (n<parseInt(valor)) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
	 cont++;
		if (cont > 100000){
			cont = 0;
			self.postMessage(primelist);
		}
	}
	return primelist;
};


self.onmessage = function(event) {
	valor = event.data;
	var primelist = buscaprimos(valor);
	self.postMessage(primelist);
};

