function send_post(file_name, data, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(null, xhr.responseText);
      } else {
        callback("Hubo un error en la solicitud.", null);
      }
    }
  };

  xhr.open("POST", file_name, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);
}

function send_post_get(file_name, data, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(null, xhr.responseText);
      } else {
        callback("Hubo un error en la solicitud.", null);
      }
    }
  };

  xhr.open("GET", file_name, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);
}

function send_data_email(data) {
  let url = "https://mailerspace.neonxstudios.com/send.php";

  let queryString = new URLSearchParams(data).toString();

  function solution_callback(error, respuesta) {
    if (error) {
      console.error("Error: " + error);
    } else {
      console.log("Response: " + respuesta);
    }
  }

  send_post(url, queryString, solution_callback);
}
