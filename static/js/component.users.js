'use strict';

function UserListController($scope, $element, $attrs, $http) {

  var ctrl = this;

  // This would be loaded by $http etc.
  $http.get("https://api.github.com/users").then(function(res){
    ctrl.list = res.data;
  });

  console.log(ctrl.list);

}

angular.module('followersApp').component('userList', {
  templateUrl: 'views/home.html',
  controller: UserListController
});
