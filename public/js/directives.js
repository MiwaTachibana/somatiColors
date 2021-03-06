angular.module('SomatiColors')
    .directive('navTop', navTop)
    .directive('footerBottom', footerBottom)

    .directive('oneUser', oneUser)
    .directive('editUserForm', editUserForm)

    .directive('allEvents', allEvents)
    .directive('oneEvent', oneEvent)
    .directive('newEventForm', newEventForm)
    .directive('editEventForm', editEventForm)
    
// Index Directives //'A' == attribute, 'E' == element, 'C' == class
function navTop (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/_nav.html"
  };
  return directive;
}

function footerBottom (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/_footer.html"
  };
  return directive;
}

function oneUser (){
  var directive = {
  restrict: 'E',
  replace: false,
  templateUrl:  "../partials/users/user.html"
  };
  return directive;
}

function editUserForm (){
  var directive = {
  restrict: 'E',
  replace: false,
  templateUrl:  "../partials/users/edit.html"
  };
  return directive;
}

function allEvents (){
  var directive = {
  restrict: 'E',
  replace: false,
  templateUrl:  "../partials/events/events.html"
  };
  return directive;
}

function oneEvent (){
  var directive = {
  restrict: 'E',
  replace: false,
  templateUrl:  "../partials/events/event.html"
  };
  return directive;
}

function newEventForm (){
  var directive = {
  restrict: 'E',
  replace: false,
  templateUrl:  "../partials/events/new.html"
  };
  return directive;
}

function editEventForm (){
  var directive = {
  restrict: 'E',
  replace: false,
  templateUrl:  "../partials/events/edit.html"
  };
  return directive;
}