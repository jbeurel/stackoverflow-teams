'use strict';

angular.module('stackoverflowCompanyApp').controller('UserCtrl', function ($scope, $http) {
    $http.get('https://api.stackexchange.com/2.2/users/580167;380863;282073;369491;2013557;3628817;3628847;2211877;979064;4402624;4173135;2590861;6915759?order=desc&sort=reputation&site=stackoverflow').success(function(data) {
        $scope.users = data;
    });
});
