angular.module('conversorApp', [])
  .controller('ConversorCtrl', function($scope) {
    $scope.conversor = {};
    $scope.conversor.kilometros = 0;
    
    $scope.convertir = function(){
      $scope.conversor.kilometros = $scope.conversor.millas * 1.609
    }
    
  });