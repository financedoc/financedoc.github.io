
var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});
/*
var myApp = angular.module('jaws2', ['ui.router']);

myApp.config(function($stateProvider) {
  var docket = {
    name: 'docket',
    url: '/docket',
    template: '<h3>Calendar And Docket</h3>'
  }

  var cases = {
    name: 'cases',
    url: '/cases',
    template: '<h3>This is the case Screen</h3>'
  }

  var orders = {
    name: 'orders',
    url: '/orders',
    template: '<h3>This is the ORDERS</h3>'
  }
  var chambers = {
    name: 'chambers',
    url: '/chambers',
    template: '<h3>CHAMBERS</h3>'
  }

  $stateProvider.state(docket);
  $stateProvider.state(cases);
  $stateProvider.state(orders);
  $stateProvider.state(chambers);

});

*/
