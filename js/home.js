
//1 add event handler
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

// 2   add input money
const addInputMoney = document.getElementById('add-input-money').value;
console.log(addInputMoney);

const addInputPin =document.getElementById('input-pin').value;
console.log(addInputPin);

//3  verify pin number

 if(addInputPin === '1234'){
    console.log('adding money to you account')
// 4   get the current balance
 const balance = document.getElementById('balance').innerText;
 console.log(balance)
//5  add money
 const addMoney = parseFloat(addInputMoney);
 const addBalance= parseFloat(balance);
 const newBalance = addMoney+addBalance;
 console.log(newBalance);

//  6 account update
document.getElementById('balance').innerText=newBalance;

 }
 else{
    alert('failed to add money! Please tr again.')
 }

})