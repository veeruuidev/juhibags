(function () {

    function menCtrlFn($scope, menSvc, $rootScope) {


        menSvc.getProducts()
            .then(function (response) {

                $scope.products = response.data.products;
                console.log($scope.products);
            })

        .catch(function (response) {

            console.log(response);
        })


        $scope.addProductToCart = function (prod) {


            menSvc.addToCart(prod);
            var data = {
                SpecialPrice: prod.SpecialPrice,
                name: prod.name,
                image: prod.image
            }





            $rootScope.$broadcast("PROUDCT-ADDED", {
                item: data
            });
        };



        $scope.quickView = function (prod) {



            menSvc.addToCart(prod);
            var data = {
                SpecialPrice: prod.SpecialPrice,
                name: prod.name,
                image: prod.image,
                OldPrice: prod.OldPrice
            }


            $rootScope.$broadcast("PROUDCT-VIEW", {
                item: data
            });

        };

    }

    angular.module("men")
        .controller("menCtrl", ["$scope", "menSvc", "$rootScope", menCtrlFn]);








})();
