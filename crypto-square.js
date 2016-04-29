var normalizePlaintext;
var size;
var plaintextSegments;
var ciphertext;

//Crypto class takes a string argument
var Crypto = function(text){
//store the string for use elsewhere
	this.text = text.replace(/[\W]/g,"").toLowerCase();
	

};

Crypto.prototype.normalizePlaintext = function() {
	return this.text;

};

Crypto.prototype.size = function() {
	size = Math.sqrt(this.text.length);

	if (size % 1 === 0) {
		return size;
	}

	else 
		return Math.ceil(size);
};

Crypto.prototype.plaintextSegments = function() {
var elements = [];

	for (i = 0, j = 0; i < this.text.length; i += this.size(), j++) {
		elements[j] = this.text.slice(i, this.size() + i);
	}

	return elements;
};

Crypto.prototype.ciphertext = function() {
	
var message = "";
var word = this.plaintextSegments();

	//loop throught the columns
	for (var i = 0; i < size; i++) {
		//loop through the rows 
		for (var j = 0; j < word.length; j++) {
			message += word[j].charAt(i); 
		}
	}


	return message;
};

module.exports = Crypto;
