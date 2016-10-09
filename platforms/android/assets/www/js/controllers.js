angular.module('starter.controllers', [])
//引导页
.controller('IntroCtrl',['$scope','$state','$timeout', function($scope,$state,$timeout) {
  $scope.firstCome = function () {
    localStorage.isFirst = false;
    $state.go('tab.dash');
  };

  if(localStorage.isFirst)
  {
    $state.go('tab.dash');
  }
  $scope.startApp = function() {
    $state.go('dash');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

  $scope.$on('$ionicView.loaded', function() {
    ionic.Platform.ready( function() {
      // if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
      $timeout(function () {
        if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
      },3000);
    });
  });
}])
//.controller('IntroCtrl', function($scope) {
//// Called to navigate to the main app
//    $scope.startApp = function() {
//      $state.go('login');
//    };
//    $scope.next = function() {
//      $ionicSlideBoxDelegate.next();
//    };
//    $scope.previous = function() {
//      $ionicSlideBoxDelegate.previous();
//    };
//
//    // Called each time the slide changes
//    $scope.slideChanged = function(index) {
//      $scope.slideIndex = index;
//    };
//  })
//登陆
.controller('LoginCtrl', function($scope,$state,$rootScope,$timeout) {
    //$scope.$on('$ionicView.loaded', function() {
    //  console.log("进入login")
    //  $scope.emit('loginLoaded');
    //});
    //console.log("进入login")
    //$rootScope.$broadcast('loginLoaded');
    $scope.$on('$ionicView.loaded', function() {
      ionic.Platform.ready( function() {
        if(navigator && navigator.splashscreen){
          $timeout(function(){
            navigator.splashscreen.hide();
          },1000)
        }
      });
    })
})
//应用
.controller('DashCtrl', function($scope) {})
//数据
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
//蓝牙
.controller('BluetoothCtrl', function($scope) {
    //蓝牙打开
    $scope.open=function(){
      console.log('blue in');
      ble.isEnabled(
        function() {
          console.log("Bluetooth is enabled");
        },
        function() {
          ble.enable(
            function() {
              console.log("Bluetooth is enabled");
            },
            function() {
              console.log("The user did *not* enable Bluetooth");
            }
          );
          console.log("Bluetooth is *not* enabled");
        }
      );
    }
    //搜索设备
    $scope.search=function(){
      console.log('search in');
      $scope.devices = [];
      ble.scan([], 10, function (device) {//成功的回调函数
          //$scope.devices.push(device);
          $scope.$apply(function () {
            $scope.devices.push(device);
          });
          //return $scope.devices;
        }, function(){
          console.log("faile")
        }
      );
    }
    //连接设备
    $scope.connect=function(id){
      console.log(id);
      ble.connect(id, function(){alert("成功")},function(){alert("失败")});

    }


})
//设置
.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
//更多
.controller('MoreCtrl', function($scope) {
  $scope.me = {
    enableFriends: true
  };
});
