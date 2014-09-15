angular.module('App').controller('HomeCtrl', function ($scope, $http, $timeout, $ionicModal, $ionicLoading, $ionicPopup, EventsService) {

  var comment = {
    message: '',
    rating: 5
  };
  $scope.comment = angular.copy(comment);

  $scope.sendComments = function () {
    // Send comment
    $scope.cancelComments();
    $ionicPopup.alert({
      title: 'Thank you!',
      template: 'We appreciate your comments!',
      okText: 'Close'
    });
  };

  $scope.cancelComments = function () {
    $scope.comment = angular.copy(comment);
    $scope.modal.hide();
  }

  $scope.openComments = function() {
    $ionicModal.fromTemplateUrl('views/home/comments.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    if ($scope.modal) {
      $scope.modal.remove();
    }
  });

  $http.get('http://api.openweathermap.org/data/2.5/weather?q=Key%20West,FL&units=imperial').success(function (data) {
    $scope.weather = data;
  });

  var events = EventsService.$asArray();
  events.$loaded().then(function () {
    $scope.today = events[new Date().getDay()];
  });

});
