function dec2bin() {
	var c = document.getElementById("number").value;
	if ((/[^0-9]/g.test(c)) || c == "") {
		alert ("NAN!");
		document.getElementById("number").value = "";
		document.getElementById("number").focus();
		return false;
	}

	c = parseInt(c);

	var binary = c.toString(2);
	var hexidecimal = c.toString(16).toUpperCase();
	var octal = c.toString(8);

	var data = "The binary representation of " + c + " is " + binary + "<br>";
	data = data + "The hexadecimal representation of " + c + " is " + hexidecimal + "<br>";
	data = data + "The octal representation of " + c + " is " + octal + "<br>";

	document.getElementById("display-result").innerHTML = data;
}
