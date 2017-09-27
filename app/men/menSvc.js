( function(){
    
    function menSvcFn($http,$q){
        
        this.getProducts= function(){
            
           var dfd= $q.defer();
            
            $http.get("http://192.168.10.227:8080/test/test")
            .then (function(response){
                   
                        dfd.resolve(response);
                
                console.log(response.data);

                })
            
            .catch (function(){
                
                dfd.reject(response);
                
            })
            return dfd.promise;
            
        }
        
        
        
        
        
        this.cartItems =[];
        this.addToCart = function(item){
           this.cartItems.push(item);
       };
        
       this.getProductFromCart = function(item){
           return this.cartItems;
       };
        
        
    }
    
    
    
    
    
    angular.module("men")
    .service("menSvc", ["$http","$q", menSvcFn]);
})();