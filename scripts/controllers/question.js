'use strict';

angular.module('stackoverflowCompanyApp').controller('QuestionCtrl', function ($scope, $http) {
    $http.get('http://api.stackexchange.com/2.2/users/380863;282073;369491;2013557;3628817;3628847;2211877/questions?order=desc&sort=activity&site=stackoverflow').success(function(data) {
        $scope.questions = data;
    });
});
