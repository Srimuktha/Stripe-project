
         
var myApp = angular.module("myApp",[]);
         
myApp.controller('appController', ["$scope","headerService",function($scope, headerService) {

getdetails();

function getdetails(){
    headerService.getDetails()
        .then(function (response) {
            $scope.menuObject = response.data;
            console.log("menuObject",$scope.menuObject);
            $scope.navObjects= Object.keys($scope.menuObject);
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }
}]);

