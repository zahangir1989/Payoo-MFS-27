
document.getElementById('button').addEventListener('click', function(event){
   event.preventDefault();

  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber, pinNumber)

  if(phoneNumber==='5' && pinNumber==='1234'){
    console.log('you are login now')
   window.location.href = '/home.html';
  }
  else{
    alert('wrong phone number or pin')
  }



})