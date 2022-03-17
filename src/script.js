var arr = [];
var a = 100;
var oldvalue;
function add() {
  var val = document.getElementById("new").value;
  var obj = { uid: a, id: val, flag: 0 };
  a++;
  if (checkIfTaskPresent(val) && val!="") {
    arr.push(obj);
    document.getElementById("new").value = "";
    displayIncomplete();
  } else if(val=="") {
    alert("Task cannot be empty!!")
  } else {
    alert("This task is already present!!");
  }
}

function checkIfTaskPresent(id) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return false;
    }
  }
  return true;
}
function displayIncomplete() {
  document.getElementById("new").value = "";
  var html = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].flag == 0) {
      console.log(arr[i].id + arr[i].flag);
      html +=
        "<li><input type='checkbox' onclick='checking(" +
        arr[i].uid +
        ")'><label>" +
        arr[i].id +
        "</label><input type='text'><button class='edit' onclick='editTask(" +
        arr[i].uid +
        ")'>Edit</button><button class='delete' onclick='deleteTask(" +
        arr[i].uid +
        ")'>Delete</button></li>";
    }
  }
  document.getElementById("incomplete-tasks").innerHTML = html;
  displayComplete();
}

function displayComplete() {
  var html = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].flag == 1) {
      console.log(arr[i].id + arr[i].flag);
      html +=
        "<li><input type='checkbox' onclick='checking(" +
        arr[i].uid +
        ")'><label>" +
        arr[i].id +
        "</label><input type='text'><button class='edit' onclick='editTask(" +
        arr[i].uid +
        ")'>Edit</button><button class='delete' onclick='deleteTask(" +
        arr[i].uid +
        ")'>Delete</button></li>";
    }
  }
  document.getElementById("completed-tasks").innerHTML = html;
}

function checking(r) {
  console.log(typeof r);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].uid == r) {
      if (arr[i].flag == 1) {
        arr[i].flag = 0;
      } else {
        arr[i].flag = 1;
      }
      break;
    }
  }
  displayIncomplete();
}
function deleteTask(id) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].uid == id) {
      arr.splice(i, 1);
    }
  }
  displayIncomplete();
}

function editTask(id) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].uid == id) {
      document.getElementById("new").value = arr[i].id;
      break;
    }
  }
  document.getElementById("addtask").style.display = "none";
  document.getElementById("updatetask").style.display = "block";
  oldvalue = document.getElementById("new").value;
}

function update() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == oldvalue) {
      arr[i].id = document.getElementById("new").value;
    }
  }
  document.getElementById("addtask").style.display = "block";
  document.getElementById("updatetask").style.display = "none";
  displayIncomplete();
}
