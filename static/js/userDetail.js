'use strict';

function UserDetailController() {
  var ctrl = this;

}

angular.module('followersApp').component('userDetail', {
  templateUrl: 'views/userDetail.html',
  controller: UserDetailController,
  bindings: {
    user: '<'
  }
});
