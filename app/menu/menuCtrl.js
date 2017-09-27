( function(){
    
    function menuCtrlFn($scope,loginSvc){
        
       
        
        $scope.menu=[
            
            
    {
        "id": "0",
        "name": "men",
        "sub": [
            {"name": "SItem 1-1"},
            {"name": "SItem 1-2"},
            {"name": "SItem 1-3"},
            {"name": "SItem 1-4"},
            {"name": "SItem 1-5"},
            {"name": "SItem 1-3"},
            {"name": "SItem 1-4"},
            {"name": "SItem 1-5"},
            {"name": "SItem 1-3"},
            {"name": "SItem 1-4"},
            {"name": "SItem 1-5"}
            
        ]
    },
    {
        "id": "1",
        "name": "women",
        "sub": [
            {"name": "SItem 2-1"},
            {"name": "SItem 2-2"},
            {"name": "SItem 2-3"},
            {"name": "SItem 2-4"}
        ]
    },
    {
        "id": "2",
        "name": "kids",
        "sub": [
            {"name": "SItem 3-1"},
            {"name": "SItem 3-2"},
            {"name": "SItem 3-3"},
            {"name": "SItem 3-4"}
            
        ]
    },
    {
        "id": "3",
        "name": "office",
        "sub": [
            {"name": "SItem 4-1"},
            {"name": "SItem 4-2"},
            {"name": "SItem 4-3"},
            {"name": "SItem 4-4"}
        ]
    }
]
    
        
        $scope.submenu = $scope.menu[0].sub; 
            
            $scope.changeSub = function (menuId) {
                    $scope.submenu = $scope.menu[menuId].sub;
                }
        
            
            
            
          

    $scope.select= function(index) {
       $scope.selected = index; 
    };
        
        
    $scope.login = function(){
        
        var data=  {username: $scope.name, password: $scope.password}
        
        console.log(data);
       
        loginSvc.getLogin(data)
                    .then(function (response) {
                        $scope.msg = response;
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
        
    }   
        
        
        
        
            
        
        
    }
    
     
    
    angular.module("menu")
    .controller("menuCtrl",["$scope","loginSvc",menuCtrlFn])
})();