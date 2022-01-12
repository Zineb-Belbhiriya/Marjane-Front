const $ = (className) => {
  return document.querySelector(className);
};

const login = () => {
  // console.log("test");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", "Bearer " + localStorage.getItem("user"));
  var raw = JSON.stringify({
    email: $("#email").value,
    password: $("#password").value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/users/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("result is " + JSON.stringify(result));
      localStorage.setItem("user", JSON.stringify(result.token));

      if (JSON.stringify(result.user.role) === "admin_general") {
        console.log("user is admin");
      }

      if (JSON.stringify(result.user.role) === "admin_marjan") {
        console.log("user is user");
      }

      if (JSON.stringify(result.user.role) === "chef_rayon") {
        console.log("user is user");
      }

      location.replace("/api/admin");
    })
    .catch((error) => console.log("error", error));
};

$("#login").addEventListener("click", (event) => {
  login();
  // console.log("yoi");
});
