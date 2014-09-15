angular.module('App').controller('TourCtrl', function ($scope, $location, $ionicPopup) {

  $scope.login = function () {
    $ionicPopup.prompt({
      title: 'Login',
      inputPlaceholder: 'Enter reservation code',
      okText: 'Login'
    }).then(function (code) {
      // Login with code
      localStorage.setItem('firstVisit', '1');
      $location.url('/');
    });
  }

});
