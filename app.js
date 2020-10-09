//Init a function using contructor github
const github = new GitHub();

//Init UI profile
const ui = new UI();
//Adding event listener for input
const input = document.getElementById("searchUser");

input.addEventListener("keyup", (e) => {
  //Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //   show alert
        //console.log("User not found");
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //   Show profile
        // console.log(data.profile.message);
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
