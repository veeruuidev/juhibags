( function(){
    
 angular.module("juhibags",["header","components","footer","ngRoute","menu","men","home","viewCart","quickView"]);
    
    
    

    
     angular.module("juhibags")
    .config(function($routeProvider, $locationProvider) {
         
//         
//     $httpProvider.defaults.useXDomain = true;
//        delete $httpProvider.defaults.headers.common['X-Requested-With'];    

         
    
  $routeProvider
   .when('/', {
    templateUrl: 'app/home/home.html',
    controller: 'homeCtrl',
    
  })
  
  .when('/home', {
    templateUrl: 'app/home/home.html',
    controller: 'homeCtrl',
    
  })
  .when('/men', {
    templateUrl: 'app/men/men.html',
    controller: 'menCtrl'
  })
  
  .when('/viewCart', {
    templateUrl: 'app/viewCart/viewCart.html',
    controller: 'viewCartCtrl'
  })
  .when('/contact', {
    templateUrl: 'app/contact/contact.html',
    controller: 'viewCartCtrl'
  })
  
  
  
         
});
    
   
})();