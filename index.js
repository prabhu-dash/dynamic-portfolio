document.getElementById("submit").addEventListener("click", function() {
  var x = document.getElementById("import-name").value;
  var y = document.getElementById("import-contact").value;
  var z = document.getElementById("import-address").value;
  var q = document.getElementById("import-college").value;

  console.log(x);
  console.log(y);
  console.log(z);
  console.log(q);

  document.getElementById('export-name').innerHTML = x;
  document.getElementById('export-contact').innerHTML = y;
  document.getElementById('export-address').innerHTML = z;
  document.getElementById('export-college').innerHTML = q;
});
