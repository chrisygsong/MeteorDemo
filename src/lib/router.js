/**
 * Created by sixpoly on 2015-06-22.
 */

Router.route('/', {
  name: 'main'
});

Router.route('/chat', {
  name: 'chat',
  onBeforeAction: function(){
    if(!Session.get('username')){
      Router.go('main');
    }else{
      this.next();
    }
  }
});
