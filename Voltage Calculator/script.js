let calcVoltage = document.getElementById('calc-voltage');
calcVoltage.addEventListener('click', () => {
    let currVal = document.getElementById('current').value;
    let resVal = document.getElementById('resistance').value;
    let voltage = (currVal * resVal).toFixed(2);
    document.getElementById('voltage').innerHTML=`Voltage is ${voltage}V`;
})