/**
 * author : SungYong Jang <jsy@adain.kr>
 * date : 2015-06-22
 * description : main
 */

if (Meteor.isClient) {
  Template.main.onCreated(function () {
  });

  Template.main.onRendered(function () {
  });

  Template.main.onDestroyed(function () {
  });

  Template.main.helpers({});

  Template.main.events({
    'click #enter': function(e, t){
      // 유저명 저장
      var username = t.$('#username').val();

      if(!username){
        alert('유저명을 입력해주세요.');
        return;
      }

      Session.set('username', username);

      // 채팅 페이지로 이동
      Router.go('chat');
    }
  });
}