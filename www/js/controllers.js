angular.module('starter.controllers', [])

.controller('PouchCtrl', function($scope) {
  var db = new PouchDB('pouch');                                // <--- this one uses any available adapter
  var idb = new PouchDB('idbpouch', {adapter: 'idb'});          // <--- this one uses IndexedDB
  var websql = new PouchDB('websqlpouch', {adapter: 'websql'}); // <--- this one uses WebSQL
  
  $scope.pouchdbSupported = !!db.adapter;
  $scope.idbSupported = !!idb.adapter;
  $scope.websqlSupported = !!websql.adapter;
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
