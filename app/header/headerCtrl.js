(function () {

    function headerCtrlFn($scope,$rootScope,$location) {


        $scope.cartItems = JSON.parse(localStorage.getItem('cartData'));

        $scope.removeItem = function (cart) {


            var index = $scope.cartItems.indexOf(cart);
            $scope.cartItems.splice(index, 1);
            localStorage.removeItem(cart);

            localStorage.setItem("cartData", JSON.stringify($scope.cartItems));
            $scope.cartItems = JSON.parse(localStorage.getItem('cartData'));

            if (localStorage.cartData) {

                var total = $scope.cartItems.length
                $scope.totalItems = total;

            } else {

                $scope.totalItems = 0;
            }




        };


        if (localStorage.cartData) {

            var total = $scope.cartItems.length
            $scope.totalItems = total;
        } else {

            $scope.totalItems = 0;
        }






        $scope.totalPrice = 0;

        //angular.forEach($scope.cartItems, function(item1){
        //              
        //            $scope.totalPrice = $scope.totalPrice+item1.SpecialPrice
        //          })


        $rootScope.$on("PROUDCT-ADDED", function (evet, args) {
            console.log(args);
            $scope.cartItems1 = args.item;


            var data = [];

            if (localStorage.cartData) {

                data = JSON.parse(localStorage.getItem('cartData'));
            } else {

                data = [];
            }

            data.push($scope.cartItems1);

            localStorage.setItem("cartData", JSON.stringify(data));


            $scope.cartItems = JSON.parse(localStorage.getItem('cartData'));

            console.log($scope.cartItems);



            if (localStorage.cartData) {

                var total = $scope.cartItems.length
                $scope.totalItems = total;
                
            } else {

                $scope.totalItems = 0;
            }







        });


        $scope.viewCart = function () {


            $location.path('/viewCart');

        }




    }

    angular.module("header")
        .controller("headerCtrl", ["$scope","$rootScope","$location", headerCtrlFn]);


})();
