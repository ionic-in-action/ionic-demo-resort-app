angular.module('App').controller('EventsCtrl', function ($scope, EventsService) {

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day = new Date().getDay();
  var index = 0;
  $scope.events = EventsService.$asArray();

  $scope.events.$loaded().then(function () {
    while (day != index && index < 7) {
      $scope.events.push($scope.events.shift());
      index++;
    }
  });
});
