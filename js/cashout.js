document.getElementById('btn-cash-out').addEventListener('click', function(event){
event.preventDefault();

const cashOut = document.getElementById('cash-out-money').value;
const cashOutFloat = parseFloat(cashOut);
const cashOutPin = document.getElementById('cash-out-pin').value;
console.log(cashOut, cashOutPin)

// varify pin
if(cashOutPin === '1234'){
 console.log('money is reducing')
 const balance = document.getElementById('balance').innerText;
 console.log(balance)
 const balanceFloat = parseFloat(balance);

//  reduce the balance
 const newBalance = balanceFloat - cashOutFloat;

//  update the balance
document.getElementById('balance').innerText = newBalance
}
else{
    alert('failed to cash out.Please try again later.')
}
})