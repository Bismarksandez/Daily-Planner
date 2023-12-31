// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentTimeEl = $("#currentDay");

//var localeSettings = {};
//dayjs.locale(localeSettings);

$(function () {

  //Display date and time at top.
  function timeDisplay() {
    var currentTime = dayjs().format("MMM DD YYYY h:m:ss a");
    currentTimeEl.text(currentTime);
  };

  //Applies color to the columns.
  var currentTime = dayjs().format("H");
  function barColor() {
    $(".time-block").each(function() {
      var barTime = parseInt(this.id);
      $(this).toggleClass(".past", barTime < currentTime);
      $(this).toggleClass(".present", barTime === currentTime);
      $(this).toggleClass(".future", barTime > currentTime);
    });
    
  };
  
  //Change color of the columns.
  function refreshColor() {
    $('.time-block').each(function() {
      var barTime = parseInt(this.id);
      if (barTime == currentTime) {
        $(this).removeClass('past future').addClass('present');
      } else if (barTime < currentTime) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  };

  function saveEntry(){
    $(".saveBtn").on("click", function(){
      var key
    })
  }
 
  function printtodoList() {

    var todoLists = readtodolistFromStorage();

  }



  function readtodolistFromStorage() {
    var todoLists = localStorage.getItem('todoLists');
    if (todoLists) {
      todoLists = JSON.parse(todoLists);
    } else {
      todoLists = [];
    }
    return todoLists;
  }











  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  barColor();
  printtodoList();
  refreshColor();
  timeDisplay();
});




