var surveyBuilder = angular.module('idbSiteApp', ['ui.bootstrap']);

surveyBuilder.controller('idbSite', function ($scope, $anchorScroll, $location, $window, $http) {
  $scope.currentTab = 'risk';
  $scope.currentRef = '';

  $scope.goTo = function(tab, x) {
    $scope.currentRef = x;
    if (tab != $scope.currentTab) {
      $scope.currentTab = tab;
    }
    console.log('$scope.currentRef', $scope.currentRef);
    console.log('$scope.currentTab', $scope.currentTab);
    var newHash = tab + '_' + x;
    if ($location.hash() !== newHash) {
      $location.hash(newHash);
    } else {
      $anchorScroll();
    }
  };

});


