function checkEmail()
{
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if(email == "")
    {
        document.getElementById("email-error").innerHTML = "Please fill in field";
    }
    else
    {
        document.getElementById("email-error").innerHTML = "";
    }

    if(confirm == "")
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in field";
    }
    else    
    {
        document.getElementById("confirm-error").innerHTML = "";
    }

    if(email != confirm)
    {
        document.getElementById("email-error").innerHTML = "Email does not match";
        document.getElementById("confirm-error").innerHTML = "Email does not match";
    }
    else
    {
        document.getElementById("email-error").innerHTML = "";
        document.getElementById("confirm-error").innerHTML = "";
    }
}

function pizzaOrder()
{
    var output = "<h3 class='mb-3 mt-3'>Pizza Order: ";

    if(document.getElementById("small").checked == true)
    {
        output += " Small";
    }
    else if(document.getElementById("medium").checked == true)
    {
        output += " Medium";
    }
    else
    {
        output += " Large";
    }

    if(document.getElementById("pepperoni").checked == true)
    {
        output = output + " Pepperoni";
    }

    if(document.getElementById("sausage").checked == true)
    {
        output = output + " Sausage";
    }

    if(document.getElementById("mushrooms").checked == true)
    {
        output = output + " Mushrooms";
    }

    document.getElementById("output").innerHTML = output + "</h3";
}