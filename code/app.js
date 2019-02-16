var app = {

  init: function () {
    //alert("Benvenuti nel nostro sito");
    //$.get("https://api.github.com/users/wbigger")
    $.get("api/data.json")
      .done(app.onSuccess);
  },
  onSuccess: function (data) {
    console.log(data);
  }

};

var init = function () {
  alert("Benvenuti nel nostro sito");
}
$(document).ready(app.init);