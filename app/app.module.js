'use strict';
let app = angular.module('AngularMaterialTemplates', ['ngMaterial']);
app.controller('sidenavController',function($scope,$mdSidenav){
  $scope.OpenLeftMenu = function(){
    $mdSidenav('nav-left').toggle();
  }
});
app.controller('registerController',function(){
});
