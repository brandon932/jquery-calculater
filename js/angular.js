var app = angular.module("myApp",[]);

app.controller("calculate", function($scope){
  var num = [];
  var expression = [];

  $scope.buttonVal = function(event){
    x = event.target;
    btn = angular.element(x).html();

    if (btn === "=") {
      expression.push(num.join(""));
      answer = calculate2(expression);
      $scope.screen= answer;
      num = [answer];
      expression = [];
    }

    else if (btn === "C") {
      num = [];
      expression = [];
      $scope.screen= "";
    }

    else if (btn==="x"||btn==="/"||btn==="+"||btn==="-") {
      expression.push(num.join(""));
      expression.push(btn);
      $scope.screen = num;
      num = [];
    }

    else if (x.nodeName === "SPAN") {
      x = btn;
      num.push(x);
      $scope.screen= num;
    }
  };
});
