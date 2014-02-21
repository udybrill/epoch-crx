

var date = new Date();
// Run script as soon as the document's DOM is ready.

function refreshDateStr() {
  document.getElementById("yr").value = date.getFullYear();
  document.getElementById("mon").value = date.getMonth() + 1;
  document.getElementById("day").value = date.getDate();
  document.getElementById("hr").value = date.getHours();
  document.getElementById("min").value = date.getMinutes();
  document.getElementById("sec").value = date.getSeconds();	
}

document.addEventListener('DOMContentLoaded', function () {
	refreshDateStr();
});

function toEpoch() {
  var yr = parseInt(document.getElementById("yr").value);
  var mon = parseInt(document.getElementById("mon").value) - 1;
  var day = parseInt(document.getElementById("day").value);
  var hr = parseInt(document.getElementById("hr").value);
  var min = parseInt(document.getElementById("min").value);
  var sec = parseInt(document.getElementById("sec").value);	

  date = new Date(yr,mon,day,hr,min,sec)
  document.getElementById("epoch").value = date.getTime();
}

function fromEpoch() {
  date = new Date(parseInt(document.getElementById("epoch").value));
  refreshDateStr();
}
