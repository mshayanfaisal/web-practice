const calculateTemp = () => {

  const numberTemp = document.getElementById('Temp').value;

  const tempSelected = document.getElementById('temp_diff');
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
  
  const celToFah = (cel) => {
    let fahrenheit = (cel * 9/5)
  }



  let result;

  if(valueTemp == 'cel'){
    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result} Fahrenheit`;
  }else{
    result = fahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result} Celsius`;
  }
}