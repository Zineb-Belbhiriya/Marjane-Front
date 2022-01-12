const $ = (className) => {
  return document.querySelector(className);
};
const addMarjaneCenter = () => {
  console.log("hhhh");

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer " + localStorage.getItem("user_key")
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    city: $("#city").value,
    admin_id: localStorage.getItem("loggedIn"),
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://192.168.0.161:8080/api/users/createmarjane", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

$("#marjane_").addEventListener("click", (event) => {
  addMarjaneCenter();
  console.log("yoi");
});
