(function () {


    function quickViewFn($scope, $rootScope) {


        $rootScope.$on("PROUDCT-VIEW", function (evet, args) {
            console.log(args);
            $scope.cartItems2 = args.item;

            console.log($scope.cartItems2);
            $scope.image = $scope.cartItems2.image;
            $scope.name = $scope.cartItems2.name;
            $scope.newPrice = $scope.cartItems2.SpecialPrice;
            $scope.oldPrice = $scope.cartItems2.OldPrice;

        });


    }



    angular.module("quickView")
        .controller("quickViewCtrl", ["$scope", "$rootScope", quickViewFn])





})();
