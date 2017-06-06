'use strict';

function UserDetailController($location) {
  var ctrl = this;

}

angular.module('followersApp').component('userDetail', {
  templateUrl: 'views/userDetail.html',
  controller: UserDetailController,
  bindings: {
    user: '<'
  },
  require: {
    usersCtrl: '^userList'
  }
});
