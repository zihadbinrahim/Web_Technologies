function toggleBtn() {
    let check = document.getElementById("fitCheck").checked;

    if (check == true) {
        document.getElementById("joinBtn").disabled = false;
    } else {
        document.getElementById("joinBtn").disabled = true;
    }
}

function validateForm() {
    let valid = true;

    document.getElementById("errName").innerHTML = "";
    document.getElementById("errAge").innerHTML = "";
    document.getElementById("errMobile").innerHTML = "";
    document.getElementById("errEmail").innerHTML = "";
    document.getElementById("errPass").innerHTML = "";
    document.getElementById("errConfirm").innerHTML = "";
    document.getElementById("errPlan").innerHTML = "";
    document.getElementById("errDate").innerHTML = "";
    document.getElementById("errTime").innerHTML = "";
    document.getElementById("errMain").innerHTML = "";
    document.getElementById("errBackup").innerHTML = "";
    document.getElementById("errAddons").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    let name = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let plan = document.getElementById("plan").value;
    let startDate = document.getElementById("startDate").value;
    let mainT = document.getElementById("mainTrainer").value;
    let backupT = document.getElementById("backupTrainer").value;
    let addons = document.getElementById("addons").value;

    let morning = document.getElementById("morning").checked;
    let afternoon = document.getElementById("afternoon").checked;
    let evening = document.getElementById("evening").checked;

    if (name == "") {
        document.getElementById("errName").innerHTML = "Your full name is missing.";
        valid = false;
    } else if (name.length < 3) {
        document.getElementById("errName").innerHTML = "Full name is too short (minimum 3 letters).";
        valid = false;
    } else {
        for (let i = 0; i < name.length; i++) {
            let c = name.charAt(i);
            if (!((c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || c == " ")) {
                document.getElementById("errName").innerHTML = "Digits and symbols are not allowed in the full name.";
                valid = false;
                break;
            }
        }
    }

    if (age == "" || isNaN(age) || age < 16 || age > 65) {
        document.getElementById("errAge").innerHTML = "Age must be a number from 16 to 65.";
        valid = false;
    }

    let badDigit = false;
    for (let i = 0; i < mobile.length; i++) {
        let c = mobile.charAt(i);
        if (c < "0" || c > "9") {
            badDigit = true;
        }
    }
    if (mobile.length != 11 || badDigit == true || mobile.indexOf("01") != 0 || mobile.charAt(2) < "3") {
        document.getElementById("errMobile").innerHTML = "Enter a valid mobile number (11 digits, starting with 013 to 019).";
        valid = false;
    }

    let at = email.indexOf("@");
    if (email == "") {
        document.getElementById("errEmail").innerHTML = "Email cannot be left empty.";
        valid = false;
    } else if (email.indexOf(" ") != -1 || at <= 0 || email.indexOf(".", at) == -1) {
        document.getElementById("errEmail").innerHTML = "This email does not look right.";
        valid = false;
    }

    if (pass.length < 8) {
        document.getElementById("errPass").innerHTML = "Use a password of 8 or more characters.";
        valid = false;
    } else {
        let hasCap = false;
        let hasDigit = false;
        for (let i = 0; i < pass.length; i++) {
            let c = pass.charAt(i);
            if (c >= "A" && c <= "Z") {
                hasCap = true;
            }
            if (c >= "0" && c <= "9") {
                hasDigit = true;
            }
        }
        if (hasCap == false || hasDigit == false) {
            document.getElementById("errPass").innerHTML = "Password needs at least one capital letter and one digit.";
            valid = false;
        }
    }

    if (confirm != pass) {
        document.getElementById("errConfirm").innerHTML = "The two passwords are not the same.";
        valid = false;
    }

    if (plan == "") {
        document.getElementById("errPlan").innerHTML = "Please choose a plan.";
        valid = false;
    }

    if (startDate == "") {
        document.getElementById("errDate").innerHTML = "Please pick a start date.";
        valid = false;
    }

    if (morning == false && afternoon == false && evening == false) {
        document.getElementById("errTime").innerHTML = "Please choose a workout time.";
        valid = false;
    }

    if (mainT == "") {
        document.getElementById("errMain").innerHTML = "Please choose a main trainer.";
        valid = false;
    }

    if (backupT == "") {
        document.getElementById("errBackup").innerHTML = "Please choose a backup trainer.";
        valid = false;
    } else if (backupT == mainT) {
        document.getElementById("errBackup").innerHTML = "Backup trainer must be different from the main trainer.";
        valid = false;
    }

    if (addons == "" || isNaN(addons) || addons.indexOf(".") != -1 || addons < 0 || addons > 3) {
        document.getElementById("errAddons").innerHTML = "Add-ons must be a whole number from 0 to 3.";
        valid = false;
    }

    if (valid == false) {
        return false;
    }

    let fee = 0;
    if (plan == "Monthly") {
        fee = 1500;
    } else if (plan == "Quarterly") {
        fee = 4000;
    } else {
        fee = 14000;
    }
    let total = fee + (Number(addons) * 500);

    document.getElementById("output").innerHTML =
        "Welcome, " + name + "! Your " + plan + " membership starts on " + startDate + ". Total payable: " + total + " Taka.";

    document.getElementById("memberForm").reset();
    document.getElementById("joinBtn").disabled = true;

    return false;
}
