  angular.module('firstTodoApp', []).
  controller('TodoAppController', ['$scope', function ($scope) {
    $scope.Todolist = [];
    //Add to List Function		
    $scope.Addtolist = function () {
      $scope.Todolist.push({
        'title': $scope.AddNewItem,
        'done': false
      })
      $scope.AddNewItem = '';
    };

    //How many Remaining Function 		
    $scope.remaining = function () {
      var count = 0;
      angular.forEach($scope.Todolist, function (todo) {
        count += !todo.done ? 1 : 0;
      });
      return count;
    };
    //Delete Items from List Function	
    $scope.DeleteCompleted = function () {
      $scope.Todolist = $scope.Todolist.filter(function (val) {
        return !val.done;
      })
    }

  }])