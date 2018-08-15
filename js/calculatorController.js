mainApp.controller("calculatorController", function ($scope) {

    $scope.add = function() {
        $scope.result = (parseFloat($scope.num1) + parseFloat($scope.num2)).toFixed(2);
    }
    
    $scope.sub = function() {
        $scope.result = (parseFloat($scope.num1) - parseFloat($scope.num2)).toFixed(2);
    }

    $scope.mul = function() {
        $scope.result = (parseFloat($scope.num1) * parseFloat($scope.num2)).toFixed(2);
    }

    $scope.div = function() { 
        $scope.result = (parseFloat($scope.num1) / parseFloat($scope.num2)).toFixed(2);
    }
        
});