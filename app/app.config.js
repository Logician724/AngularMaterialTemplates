'use strict';

angular.
module('AngularMaterialTemplates')
.config([
  '$locationProvider',
  '$routeProvider',
  function config($locationProvider,$routeProvider){
  $locationProvider.hashPrefix('!');
  $routeProvider.
  when('/register',{
    template:'<register-form></register-form>'
  })
  .otherwise('/register');
}
]);
