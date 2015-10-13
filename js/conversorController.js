angular.module('conversorApp', [])
  .controller('ConversorCtrl', function($scope) {
    var conversor = this;
  
    conversor.kilometros = 0;
    
    $scope.convertir = function(){
      conversor.kilometros = conversor.millas * 1.609
    }
    
  });