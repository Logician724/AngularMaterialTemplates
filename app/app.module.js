'use strict';
let app = angular.module('AngularMaterialTemplates', [
  'ngMaterial',
  'ngRoute',
  'registerForm',
  'navList'
]);
app.controller('sidenavController', function($scope, $mdSidenav) {
  $scope.OpenLeftMenu = function() {
    $mdSidenav('nav-left').toggle();
  }
});
