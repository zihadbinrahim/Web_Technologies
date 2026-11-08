function ShowMemberCard(name, age, email, phone, membership) {
    let sections = [
        "Fiction",
        "Non-Fiction",
        "Science",
        "History"
    ];

    console.log("Library Sections:");
    for (let i = 0; i < sections.length; i++) {
        console.log(sections[i]);
    }


document.getElementById("output").innerHTML =
    "<h2>Membership Card</h2>" +
    "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "Email: " + email + "<br>" +
    "Phone: " + phone + "<br>" +
    "Category: " + (age < 13 ? "Junior" : "Regular") + "<br>" +
    "Membership Plan: " + membership + "<br>" +
    "Applicable Fee: " + (membership === "Gold" ? 1500 : (membership === "Silver" ? 1000 : 500)) + "<br><br>" +
    "<b>Library Sections:</b><br>" +
    sections.join("<br>");
}

document.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let membership = document.querySelector('input[name="membership"]:checked').value;

    ShowMemberCard(name, age, email, phone, membership);
});