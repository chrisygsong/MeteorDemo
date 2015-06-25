/**
 * author : 장성용 <jsy@adain.kr>
 * date : 2015-06-22
 * description : chat
 */

Meteor.methods({

  /**
   * insert message to database
   * @param username
   * @param message
   * @returns id
   */
  insertMessage: function (username, message) {
    check(username, String);
    check(message, String);

    var id = ChatCollection.insert({
      username: username,
      content: message,
      createdAt: new Date()
    });

    return id;
  }
});