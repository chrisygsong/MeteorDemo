/**
 * author : SungYong Jang <jsy@adain.kr>
 * date : 2015-06-22
 * description : chat publish
 */

Meteor.publish('chat', function () {
  return ChatCollection.find({});
});
