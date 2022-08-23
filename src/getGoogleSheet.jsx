export default async function getGoogleSheet(){
  const sheetId = '1-RR3pWpOHat8ZAAW5bn8RiYTXom68gLXDROmam-HWYk';
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = 'Sheet1';
  const query = encodeURIComponent('Select *')
  const url = `${base}&sheet=${sheetName}&tq=${query}`

  const res= await fetch ("https://sheets.googleapis.com/v4/spreadsheets/1-RR3pWpOHat8ZAAW5bn8RiYTXom68gLXDROmam-HWYk/values/Sheet1?alt=json&key=AIzaSyBMbhPAB3AaaL04Z5meVASc3Q-5G_cyRk0");
  const obj = await res.json()
  
  return (obj);
}

