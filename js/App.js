//cardinput
document.getElementById('name').addEventListener("keyup", function(e){
    var cname = e.target.value;
    document.getElementById('cardName').innerHTML = cname;
})
document.getElementById('number').addEventListener("keyup", function(e){
    var number = e.target.value;
    document.getElementById('cardNum').innerText = number.replace(/(.{4})/g, "$1 ");
})
//Date
var month='';
var year='';

document.getElementById('month').addEventListener("keyup", function(e){  
  month = e.target.value;
  var date = `${month}/${year}`;
  document.getElementById('cardDate').innerHTML = date;
  if(!month.value && !year.value){
    document.getElementById('cardDate')=00/00;
  }
})
document.getElementById('year').addEventListener("keyup", function(e){
    year = e.target.value;
    date = `${month}/${year}`;
    document.getElementById('cardDate').innerHTML = date;
    if(!month.value && !year.value){
      document.getElementById('cardDate')=00/00;
    }
})


document.getElementById('cvc').addEventListener("keyup", function(e){
    var cvc = e.target.value;
    document.getElementById('cardCvc').innerHTML = cvc;
})

document.getElementById('submit_btn').addEventListener("click", function(e){
  document.getElementById('thank').classList.remove("hidden");
  document.getElementById('form').classList.add("hidden");
})
document.getElementById('continue_btn').addEventListener("click", function(e){
  document.getElementById('form').classList.remove("hidden");
  document.getElementById('thank').classList.add("hidden");
  
})


//cardfront
