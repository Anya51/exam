let url = 'https://randomuser.me/api/?results=10';

async function request() {
  const res = await fetch(url)
  const json = await res.json()
  return json;
}


function formatData(res) {
  return [`<img src=${res.picture.large}>`, `${res.name.title} ${res.name.first} ${res.name.last}`, res.dob.age, res.gender ,res.cell, res.phone, res.location.city, res.location.state, res.location.country, `${res.location.postcode}`, res.email, res.login.username, res.login.password]
}

async function drawTable() {
  const res = await request()
  console.log(res)
  var data = new google.visualization.DataTable();
  data.addColumn('string')
  data.addColumn('string', 'Name');
  data.addColumn('number', 'Age');
  data.addColumn('string', 'Gender');
  data.addColumn('string', 'Cell');
  data.addColumn('string', 'Phone');
  data.addColumn('string', 'City');
  data.addColumn('string', 'State');
  data.addColumn('string', 'Country');
  data.addColumn('string', 'Postcode');
  data.addColumn('string', 'Email');
  data.addColumn('string', 'Login');
  data.addColumn('string', 'Password');


  for (let i = 0; i < 10; i++) {
    data.addRows([
      formatData(res.results[i]),
    ]);
  }


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

  var table = new google.visualization.Table(document.getElementById('table_div'));
  table.draw(data, { allowHtml: true, showRowNumber: false, width: '100%', height: '100%', 'cssClassNames': cssClassNames});
}