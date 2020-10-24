function randomDozensCrescentOrder(min = 1, max = 60) {
  const array = [];
  for (; array.length < 6;) {
    let random = Math.floor(Math.random() * (max - min) + min);
    if (!array.includes(random)) {
      array.push(random);
    }
  }
  return array.sort((a, b) => { return a - b });
}

function insertBet(data, bet, columns = 10, rows = 6){
  data.addRows(rows);
  for (let i = 0; i < columns; i++) {
    data.addColumn('number');


    for (let j = 0; j < rows; j++) {
      const value = j * columns + i + 1;
      if (bet.includes(value)) {
        data.setCell(j, i, value, null, { 'className': 'cssPurpleFont' })
      } else {
        data.setCell(j, i, value, null)
      }
    }

  }
}


function generateBets() {
  const betsArr = []
  for (; betsArr.length < 3;) {
    let bet = randomDozensCrescentOrder()
    if (!betsArr.includes(bet)) {
      betsArr.push(bet)
    }
  }
  return betsArr;
}



function drawTable(columns = 10, rows = 6, bets = 3) {
  const betsArr = generateBets()

  var data1 = new google.visualization.DataTable();
  var data2 = new google.visualization.DataTable();
  var data3 = new google.visualization.DataTable();

  insertBet(data1, betsArr[0])
  insertBet(data2, betsArr[1])
  insertBet(data3, betsArr[2])


  var table1 = new google.visualization.Table(document.getElementById('chart_div1'));
  var table2 = new google.visualization.Table(document.getElementById('chart_div2'));
  var table3 = new google.visualization.Table(document.getElementById('chart_div3'));


  var cssClassNames = {
    'headerRow': 'cssHeaderRow',
    'tableRow': 'cssTableRow',
    'oddTableRow': 'cssOddTableRow',
    'selectedTableRow': 'cssSelectedTableRow',
    'hoverTableRow': 'cssHoverTableRow',
    'headerCell': 'cssHeaderCell',
    'tableCell': 'cssTableCell',
    'rowNumberCell': 'cssRowNumberCell'
  };


  table1.draw(data1, { showRowNumber: false, width: '80%', height: '80%', 'cssClassNames': cssClassNames });
  table2.draw(data2, { showRowNumber: false, width: '80%', height: '80%', 'cssClassNames': cssClassNames });
  table3.draw(data3, { showRowNumber: false, width: '80%', height: '80%', 'cssClassNames': cssClassNames });

}