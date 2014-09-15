angular.module('App').controller('FoodCtrl', function ($scope, $ionicListDelegate, $ionicLoading, $ionicModal, $ionicPopup, MenuService) {

  $scope.sendOrder = function () {
    $ionicPopup.alert({
      title: 'Order submitted',
      template: 'Your order will be delieved to your room within 30 minutes.',
    }).then(function (code) {
      $scope.modal.hide();
    });
  }

  $scope.openPreview = function() {
    $ionicModal.fromTemplateUrl('views/food/preview.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.cancelPreview = function () {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    if ($scope.modal) {
      $scope.modal.remove();
    }
  });

  $scope.order = {
    items: [],
    total: 0
  };

  $scope.add = function (item) {
    $ionicListDelegate.closeOptionButtons();
    $scope.order.items.push(angular.copy(item));
    $scope.order.total += item.price;
  };

  $scope.remove = function (index) {
    $scope.order.total -= $scope.order.items[index].price;
    $scope.order.items.splice(index, 1);
  };

  $ionicLoading.show({
    template: '<span class="icon spin ion-loading-d"></span> Loading menu'
  });

  $scope.menu = MenuService.$asArray();
  $scope.menu.$loaded().then(function () {
    $ionicLoading.hide();
  });

});
