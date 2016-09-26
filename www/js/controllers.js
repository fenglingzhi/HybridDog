angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {})

.controller('LoginCtrl', function($scope,$state) {
    //$state.go('/app');
})
  .controller('DashCtrl', function($scope) {
    $scope.open=function(){
      console.log('blue in');
      ble.enable(
        function() {
          console.log("Bluetooth is enabled");
        },
        function() {
          console.log("The user did *not* enable Bluetooth");
        }
      );
    }
  })
//数据模块
  .controller('ChatsCtrl', function($scope, $state) {
    $state.transitionTo('tab.chat.total');
    $scope.gotoAcquire = function () {
      $('.triangle').css('display','inline');
      $('#acquire-line').addClass('data-nav-line-fouce');
      $('#acquire').addClass('data-nav-block-focus');
      $('#total').removeClass('data-nav-block-focus');
      $('#total-line').removeClass('data-nav-line-fouce');
      $state.go('tab.chat.acquire');
    }
    $scope.gotoTotal = function () {
      $('.triangle').css('display','none');
      $('#acquire-line').removeClass('data-nav-line-fouce');
      $('#acquire').removeClass('data-nav-block-focus');
      $('#total').addClass('data-nav-block-focus');
      $('#total-line').addClass('data-nav-line-fouce');
      $state.go('tab.chat.total');
    }
  })
.controller('AcquireCtrl', function($scope,$state) {
  $scope.gotoChats = function () {
    $state.go('tab.chats');
  }
})
.controller('TotalCtrl', function($scope, $state) {
})

.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('MoreCtrl', function($scope) {
  $scope.me = {
    enableFriends: true
  };
});
