var turn = 0;
var edges = [];
var redScore = 0;
var blueScore = 0;
var SIDES = 8;

module.exports = function() {
  var tbody = document.getElementById("matrix");
  tbody.innerHTML = '';
  for (var row = 0; row < side; row++){
    var tr = document.createElement("tr");
    for (var col = 0; col < side; col++){
      tr.innerHTML += `<td id='x${row}x${col}'>
                        <div class='dot'></div>
                      </td>`
    }
    tbody.appendChild(tr);
  }

};
