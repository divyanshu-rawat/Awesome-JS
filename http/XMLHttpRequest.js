
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest(); //creates an XMLHttpRequest object

  xhttp.onreadystatechange = function() {
      //During a server request, the readyState changes from 0 to 4:
      //0: request not initialized
      //1: server connection established
      //2: request received
      //3: processing request
      //4: request finished and response is ready
      // When readyState is 4 and status is 200, the response is ready
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("response_div").innerHTML =
      this.responseText; //The responseText property returns the response as a string.
    }
  };
  xhttp.open("GET", "test_info.txt", true);
  xhttp.send();
}

// source: w3schools.com
