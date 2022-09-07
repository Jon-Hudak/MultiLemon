export default async function getGoogleSheet(){
  const sheetId = '1-RR3pWpOHat8ZAAW5bn8RiYTXom68gLXDROmam-HWYk';
  const base = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/`;
  const sheetName = 'Sheet1';
  const key=  'AIzaSyBMbhPAB3AaaL04Z5meVASc3Q-5G_cyRk0' //make sure you secure it!
  const query = encodeURIComponent('Select *')
  const url = `${base}/${sheetName}?alt=json&key=${key}`

  const res= await fetch ("https://sheets.googleapis.com/v4/spreadsheets/1-RR3pWpOHat8ZAAW5bn8RiYTXom68gLXDROmam-HWYk/values/Sheet1?alt=json&key=AIzaSyBMbhPAB3AaaL04Z5meVASc3Q-5G_cyRk0");
  const obj = await res.json()
  
  return (obj);
}

