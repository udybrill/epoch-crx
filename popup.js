

// Run script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  var date = new Date();
document.getElementById("yr").value = date.getFullYear();
document.getElementById("mon").value = date.getMonth() + 1;
document.getElementById("day").value = date.getDate();
document.getElementById("hr").value = date.getHours();
document.getElementById("min").value = date.getMinutes();
document.getElementById("sec").value = date.getSeconds();
});
