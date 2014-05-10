'use strict';

angular
    .module('stackoverflowCompanyApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/question.html',
                controller: 'QuestionCtrl'
            })
            .when('/user', {
                templateUrl: 'views/user.html',
                controller: 'UserCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
