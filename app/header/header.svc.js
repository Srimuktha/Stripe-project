var myApp = angular.module("myApp") ? angular.module("myApp") : angular.module("myApp",[]);
         
myApp.factory('headerService', function($http) {
  var headerservice = {};
  var url='https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4';
 
  headerservice.getDetails = function () {
    return $http.get(url);
   };

  return headerservice;
});