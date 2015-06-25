/**
 * author : SungYong Jang <jsy@adain.kr>
 * date : 2015-06-22
 * description : chat
 */

if (Meteor.isClient) {
  Template.chat.onCreated(function () {
    this.subscribe('chat');
    var cursor = ChatCollection.find({});
    cursor.observe({
      added: function(){
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      }
    })
  });

  Template.chat.onRendered(function () {
  });

  Template.chat.onDestroyed(function () {
  });

  Template.chat.helpers({
    currentUser: function(){
      return Session.get('username');
    },

    list: function(){
      return ChatCollection.find({}, {sort: {createdAt: 1}});
    }
  });

  Template.chat.events({
    'keyup #content': function(e, t){
      // 엔터 입력시
      if(e.keyCode === 13){
        // 메시지 저장
        var message = e.currentTarget.value;

        if(!message){
          return;
        }

        Meteor.call('insertMessage', Session.get('username'), message, function(err, res){
          if(err){
            console.log(err);
          }else{
            e.currentTarget.value = '';
          }
        });
      }
    }
  });
}