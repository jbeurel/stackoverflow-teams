'use strict';

angular.module('stackoverflowCompanyApp').controller('UserCtrl', function ($scope, $http) {
    $http.get('http://api.stackexchange.com/2.2/users/380863;282073;369491;2013557;3628817;3628847;2211877;979064?order=desc&sort=reputation&site=stackoverflow').success(function(data) {
        $scope.users = data;
    });
});
