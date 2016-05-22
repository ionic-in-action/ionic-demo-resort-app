angular.module('App').controller('WeatherCtrl', function ($scope, $http, $ionicLoading) {

  $ionicLoading.show({
    template: '<span class="icon spin ion-loading-d"></span> Loading forecast'
  });

  // You need to get a key from Open Weather Map and put the key in API_KEY_HERE
  $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Key%20West,FL&cnt=7&units=imperial&APPID=API_KEY_HERE').success(function (data) {
    $ionicLoading.hide();
    $scope.weather = data;
  });

});
