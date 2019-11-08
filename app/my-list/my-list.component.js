'use strict';

angular.
  module('myList').
  component('myList', {
    templateUrl: 'my-list/my-list.template.html',
    controller: 
      function ToDoController($scope) {
        $scope.tasks = [];
        $scope.editIndex = false;
        $scope.addTask = function () {
            if( $scope.editIndex === false){
                $scope.tasks.push({task: $scope.task, done: false})
            } else {
                $scope.tasks[$scope.editIndex].task = $scope.task;
            }
            $scope.editIndex = false;
            $scope.task = '';
        }
            
        $scope.editTask = function (index) {
          $scope.task = $scope.tasks[index].task;
          $scope.editIndex = index;
        }
        $scope.doneTask = function (index) {
          $scope.tasks[index].done = true;
        }
        $scope.unDoneTask = function (index) {
          $scope.tasks[index].done = false;
        }
        $scope.deleteTask = function (index) {
          $scope.tasks.splice(index, 1);
        }
      }
    }
  );


