var app = {

  init: function () {
    //alert("Benvenuti nel nostro sito");
    //$.get("https://api.github.com/users/wbigger")
    $.get("api/data.json")
      .done(app.onSuccess);
  },
  onSuccess: function (data) {
    console.log(data);
    let list = data.userList;
    // Array destructuring
    let [user1,user2,user3] = list;
    // Object destructuring
    let {username,password} = user1;
    console.log(username);

    // loop with lambda function
    list.forEach(element => {
      // use template string to create the HTML element
      let txt = `<p>username: ${element.username}, password: ${element.password}</p>`
      console.log(txt);
    });

  }

};

var init = function () {
  alert("Benvenuti nel nostro sito");
}
$(document).ready(app.init);