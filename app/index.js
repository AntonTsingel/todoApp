
angular.module('toDoApp', ['ngRoute', 'ngResource'])
   .config(function ($routeProvider) {
       'use strict';

       var routeConfig = {
           controller: 'ToDoController',
           templateUrl: 'index.html',
           resolve: {
               store: function (todoStorage) {

                   return todoStorage.then(function (module) {
                       module.get();
                       return module;
                   });
               }
           }
       };
       var myProfile = {
        controller: 'ToDoController',
        templateUrl: 'myProfile.html',
        resolve: {
            store: function (todoStorage) {
      
                return todoStorage.then(function (module) {
                    module.get();
                    return module;
                });
            }
        }
    };

       $routeProvider
           .when('/', routeConfig)
           .when('/my-profile', myProfile)
           .otherwise({
               redirectTo: '/'
           });
   });