const backendBaseUrl = "https://kdwuyh3ftb.execute-api.us-east-1.amazonaws.com/dev/api"; // LOCAL

function uploadFile(
  file,
  fileType,
  successFunction,
  errorFunction) {

  var data = new FormData();
  data.append("file", file);
  data.append("type", fileType);

  $.ajax({
    url: `${backendBaseUrl}/api/files/upload-file`,
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    method: 'POST',
    headers: getHeaders(true),
    type: 'POST',
    success: successFunction,
    error: errorFunction
  });
}

function _delete(
  url,
  successFunction,
  errorFunction,
) {
  $.ajax({
    url: backendBaseUrl + url,
    type: 'delete',
    headers: getHeaders(true),
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: {},
    success: successFunction,
    error: errorFunction
  });
}

function _deleteWithData(url,
  data,
  successFunction,
  errorFunction,
) {
  $.ajax({
    url: backendBaseUrl + url,
    type: 'delete',
    headers: getHeaders(true),
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: JSON.stringify(data),
    success: successFunction,
    error: errorFunction
  });
}

function post(
  url,
  bodyObject,
  successFunction,
  errorFunction,
  requiredAuthentication = false,
  event = null,
) {
  if (event) event.preventDefault();
  $.ajax({
    url: backendBaseUrl + url,
    type: 'post',
    headers: getHeaders(requiredAuthentication),
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: JSON.stringify(bodyObject),
    success: successFunction,
    error: errorFunction
  });
}

function patch(
  url,
  bodyObject,
  successFunction,
  errorFunction,
  requiredAuthentication = false
) {
  $.ajax({
    url: backendBaseUrl + url,
    type: 'patch',
    headers: getHeaders(requiredAuthentication),
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    data: JSON.stringify(bodyObject),
    success: successFunction,
    error: errorFunction
  });
}

function get(
  url,
  data, //ex: { ajaxid: 4, UserID: UserID, EmailAddress: EmailAddress }
  successFunction,
  errorFunction,
  requiredAuthentication = false
) {
  $.ajax({
    url: backendBaseUrl + url,
    type: "get",
    data: data,
    dataType: 'json',
    headers: getHeaders(requiredAuthentication),
    success: successFunction,
    error: (error) => {
      if (error.status == 401 && window.location.pathname != '/fazer_login.html')  {
        window.location.href = 'fazer_login.html';
        console.log(error);
      }
      errorFunction(error);
    }
  });
};


function _get(
  url,
  data,
  successFunction,
  errorFunction,
  requiredAuthentication = false
) {
  $.ajax({
    url: url,
    type: "get",
    data: data,
    dataType: 'json',
    headers: {},
    success: successFunction,
    error: errorFunction
  });
};


function getHeaders(requiredAuthentication) {
  var headers = {};
  if (requiredAuthentication) {
    var token = localStorage.getItem('authToken');
    if (!token && window.location.pathname != '/fazer_login.html') {
      return;
      window.location.href = 'fazer_login.html';
    }
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

export { get, post, uploadFile, _delete, patch, _deleteWithData, _get };