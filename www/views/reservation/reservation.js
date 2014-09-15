angular.module('App').controller('ReservationCtrl', function ($scope, $timeout, $ionicModal, $ionicLoading, $ionicPopup) {

  $ionicLoading.show({
    template: '<span class="icon spin ion-loading-d"></span> Loading your reservation details'
  });

  $timeout(function () {
    var today = new Date();
    $scope.reservation = {
      checkin: today,
      checkout: new Date(today.getTime() + 1000 * 60 * 60 * 24 * 7),
      service: new Date(today.getTime() + 1000 * 60 * 60 * 24 * 4),
      room: 156,
      parkingSpace: 324,
      rate: 149
    };
    $ionicLoading.hide();
  }, 2000);

});
