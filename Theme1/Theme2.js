$(document).ready(function() {
    var obj = localStorage.getItem("obj");
    obj = JSON.parse(obj);
    $('#FullName').append(obj.FullName);
    $('#FullNam').append(obj.FullName);
    $('#DOB').append(obj.DateOfBirth);
    $('#Gender').append(obj.Gender);
    $('#Country').append(obj.Country);
    $('#About').append(obj.About);
});