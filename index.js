var FullName;
var DateOfBirth;
var Gender;
var Country;
var About;
var Theme;
var ProfileImg;
$(document).ready(function() {
    $('#Registration').click(function(event) {
        event.preventDefault();
        if ($('#country option:selected').val() == "none" && $('#theme option:selected').val() == "none") {
            alert("Check The Data And try again");
        } else {
            debugger;
            FullName = $("#firstName").val();
            DateOfBirth = $("#birthDate").val();
            Gender = $('#Gender').val();
            Country = $("#country option:selected").val();
            About = $("#comment").val();
            Theme = $("#theme option:selected").val();
            ProfileImg = localStorage.getItem("File");
            $('#profileimg').change(function(event) {
                var tmppath = URL.createObjectURL(event.target.files[0]);
                console.log(tmppath);
                $("img").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));

                $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>[" + tmppath + "]</strong>");
            });
            var obj = {};
            obj.FullName = FullName; // string
            obj.DateOfBirth = DateOfBirth; // number
            obj.Gender = Gender; // string
            obj.Country = Country;
            obj.About = About;
            obj.ProfileImg = ProfileImg;
            localStorage.setItem("obj", JSON.stringify(obj));
            if (Theme == "Traditional") {
                location.href = "Theme1/Theme1.html";
            } else if (Theme == "Modern") {
                location.href = "Theme2/Theme2/Theme2.html";
            } else {
                location.href = "index.html"
            }
        }
    });
});