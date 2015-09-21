var arrayOfClickButtons = [];
var total = [];

$("span").not($(".operator")).on("click", function(){
  var btnClicked = $(this).html();
  addToScreen(btnClicked);
  arrayOfClickButtons.push(btnClicked);
});

$(".operator").not($("#cancel, #calc")).on("click", function(){
  var btnClicked = $(this).html();
  addToScreen(btnClicked);
  total.push(arrayOfClickButtons.join(""));
  arrayOfClickButtons = [];
  total.push(btnClicked);
});

$("#cancel").on("click", function(e){
  $("#screen").html("");
  arrayOfClickButtons = [];
  total = [];
});

$("#calc").on("click", function(e){
  total.push(arrayOfClickButtons.join(""));
  var answer =calculate4(total);
  $("#screen").html(answer);
  arrayOfClickButtons = [answer];
  total = [];
});

function addToScreen(btn){
  $("#screen").append(btn + '&nbsp;');
}


function calculate2(arr){
  var  workArr = arr.slice(0);
  while (workArr.length !== 1){
    var answer;
    for (var i = 0; i < workArr.length; i++) {
      if(workArr[i]=== "x"){
        answer = parseFloat(workArr[i-1]) * parseFloat(workArr[i+1]);
        workArr.splice([i-1],3,answer);
      }
    }
    for (var j = 0; j < workArr.length; j++) {
      if(workArr[j]=== "/"){
        answer = parseFloat(workArr[j-1]) / parseFloat(workArr[j+1]);
        workArr.splice([j-1],3,answer);
      }
    }
    for (var k = 0; k < workArr.length; k++) {
      if(workArr[k]=== "+"){
        answer = parseFloat(workArr[k-1]) + parseFloat(workArr[k+1]);
        workArr.splice([k-1],3,answer);
      }
    }
    for (var n = 0; n < workArr.length; n++) {
      if(workArr[n]=== "-"){
        answer = parseFloat(workArr[n-1]) - parseFloat(workArr[n+1]);
        workArr.splice([n-1],3,answer);
      }
    }
  }
  return workArr;
}

// try to solidify ubove into a loop.
function calculate3(arr){
  var  workArr = arr.slice(0);
  while (workArr.length !== 1){
    var answer;
    for (var n = 0; n < 3; n++) {
      for (var i = 0; i < workArr.length; i++) {
        if(workArr[i]=== "x"){
          answer = parseFloat(workArr[i-1]) * parseFloat(workArr[i+1]);
          workArr.splice([i-1],3,answer);
        }
      }
    }
  }
}

function calculate4(arr){
  answer = arr.join("").replace("x","*");
  return eval(answer);
}
