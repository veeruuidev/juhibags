(function () {

    function loginSvcFn($http, $q) {

        this.getLogin = function (data) {

            var dfd = $q.defer();



            $http({
                method: 'POST',
                url: "http://192.168.10.227:8080/test/test",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: data
            })
                .then(function (response) {

                dfd.resolve(response);

                console.log(response);

            })


            .catch(function () {

                dfd.reject(response);
                console.log(response);

            })



            return dfd.promise;

        }







    }





    angular.module("menu")
        .service("loginSvc", ["$http", "$q", loginSvcFn]);
})();
