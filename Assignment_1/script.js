document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var course = document.getElementById("course").value;

    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;
    var js = document.getElementById("js").value;

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only letters");
        return;
    }

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z.]+$/.test(email)) {
        alert("Enter a valid email");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must be 10 digits");
        return;
    }

    if (course == "") {
        alert("Please choose your course");
        return;
    }

    if (html == "" || css == "" || js == "") {
        alert("Enter all marks");
        return;
    }

    html = Number(html);
    css = Number(css);
    js = Number(js);

    if (html < 0 || html > 100 || css < 0 || css > 100 || js < 0 || js > 100) {
        alert("Marks must be between 0 and 100");
        return;
    }

    var total = html + css + js;
    var percentage = (total / 300) * 100;

    var result = "Pass";

    if (html < 40 || css < 40 || js < 40) {
        result = "Fail";
    }

    document.getElementById("output").innerHTML =
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Email:</b> " + email + "</p>" +
        "<p><b>Phone:</b> " + phone + "</p>" +
        "<p><b>Course:</b> " + course + "</p>" +
        "<p><b>HTML:</b> " + html + "</p>" +
        "<p><b>CSS:</b> " + css + "</p>" +
        "<p><b>JavaScript:</b> " + js + "</p>" +
        "<p><b>Total:</b> " + total + " / 300</p>" +
        "<p><b>Percentage:</b> " + percentage.toFixed(2) + "%</p>" +
        "<p class='" + result.toLowerCase() + "'><b>Result:</b> " + result + "</p>";

    var student = {
        name: name,
        email: email,
        phone: phone,
        course: course,
        marks: {
            html: html,
            css: css,
            js: js
        },
        total: total,
        percentage: percentage.toFixed(2),
        result: result
    };

    localStorage.setItem("student", JSON.stringify(student));
});


document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("studentForm").reset();

    document.getElementById("output").innerHTML =
        "<p>No result generated yet.</p>";
});