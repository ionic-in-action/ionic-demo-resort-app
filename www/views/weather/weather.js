angular.module('App').controller('WeatherCtrl', function ($scope, $http, $ionicLoading) {

  $ionicLoading.show({
    template: '<span class="icon spin ion-loading-d"></span> Loading forecast'
  });

  $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Key%20West,FL&cnt=7&units=imperial').success(function (data) {
    $ionicLoading.hide();
    $scope.weather = data;
  });

});
