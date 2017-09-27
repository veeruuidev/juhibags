(function () {
        
       function viewCartCtrlFn($scope,$location){
           
           
           $scope.cartItems = JSON.parse(localStorage.getItem('cartData'));
           
           
           
           
           
           
           
           $scope.contShopping= function(){
               
            $location.path('/home');
               
           }
           
           
       }
        angular.module("viewCart")
        .controller("viewCartCtrl",["$scope","$location",viewCartCtrlFn]);
        
        
    })();