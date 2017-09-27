(function () {
   

    function nbHeader() {
        return {

            templateUrl: 'app/header/header.html',
            restrict: "A,E,C,M"
        };

    }
    
    
    function nbFooter() {
        return {

            templateUrl: 'app/footer/footer.html',
            restrict: "A,E,C,M"
        };

    }
    
    function nbMenu() {
        return {

            templateUrl: 'app/menu/menu.html',
            restrict: "A,E,C,M"
        };

    }
    
    
    function slideit(){
        
        return {
    link: function (scope, element, attrs) {          
      $(element).nivoSlider();
    }
  }
        
    }
    
   function rmvDialog(){
        
        return {
 restrict: 'AE',
 templateUrl: 'app/quickView/quickView.html',
 replace: true,
 transclude: true,
 scope: {
 btnMap: '=',
 title: '@',
 image:'@',
 name:'@',
 specialPrice:'@' ,
     oldPrice:'@'
     
     
 }
 };
  }
        
   
    angular.module("components")
   
        .directive("nbHeader", [nbHeader])
        .directive("nbFooter",[nbFooter])
        .directive("nbMenu",[nbMenu])
        .directive("slideit",[slideit])
        .directive("rmvDialog",[rmvDialog])
       
    
        
})();
