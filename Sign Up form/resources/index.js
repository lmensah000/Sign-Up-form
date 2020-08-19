setInterval(function(){
  document.getElementById("time").innerHTML = (new Date()).toLocaleTimeString();
}, 100)
function validation()
      {
        var a = document.form.name.value;
        if(a == "")
        {
          alert("Please enter Your Name");
          document.form.name.focus();
          return false;
        }
        if(!isNaN(a))
        {
        alert("Please Enter your Characters");
        document.form.name.select();
        return false;
        }
        if ((a.length < 5) || (a.length > 15)) {
          alert("your charecter must be 5 to 15 characters");
          document.form.name.select();
          return false;
        }
}
function ValidateContactForm(){
        {
          var email = document.ContactForm.Email;
          if(email.value == "")
          {
            window.alert("Please enter a valid Email Address, pleaseee.");
            email.focus();
            return false;
          }
          if(email.value.indexOf("@", 0) < 0)
          {
            window.alert("Please enter a valid Email address.");
            email.focus();
            return false;
          }
          if(email.value.indexOf(".", 0) < 0)
          {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            return false;
          }
        }
}
function doClear()
{

 document.webform.customer1.value = "";
 document.webform.customer2.value = "";
 document.webform.address.value = "";
 document.webform.city.value = "";
 document.webform.state.value = "";
 document.webform.zip.value = "";
 document.webform.phone.value = "";
 document.webform.type[0].checked = false;
 document.webform.type[1].checked = false;
 document.webform.type[2].checked = false;
 document.webform.type[3].checked = false;
 document.webform.brand[0].checked = false;
 document.webform.brand[1].checked = false;
 document.webform.brand[2].checked = false;
 document.webform.brand[3].checked = false;
 document.webform.brand[4].checked = false;
 document.webform.brand[5].checked = false;
 document.webform.problem[0].checked = false;
 document.webform.problem[1].checked = false;
 document.webform.problem[2].checked = false;
 document.webform.problem[3].checked = false;
 document.webform.problem[4].checked = false;
 document.webform.problem[5].checked = false;
 return;
}

function doSubmit()
{if (validateText() == false)
 {
 alert("Please enter all of your personal information.");
 return;
 }
 if (validateRadionfunction() == false)
 {
 alert("Please Pick a type of plan.");
 return;
 }
 if (validateRadionfunction2() == false)
 {
 alert("Please select a trainer.");
 return;
 }
 if (validateIssue() == false)
 {
 alert("Please select the days you are available.");
 return;
 }
 alert("Your Application order has been submitted.");
 return;
}

function validateText()
{
 var customer1 = document.webform.customer1.value;
 if (customer1.length == 0) return false;
 var customer2 = document.webform.customer2.value;
 if (customer2.length == 0) return false;
 var address = document.webform.address.value;
 if (address.length == 0) return false;
 var city = document.webform.city.value;
 if (city.length == 0) return false;
 var phone = document.webform.phone.value;
 if (phone.length == 0) return false;
 return true;
}

function validateRadionfunction()
{
 if (document.webform.type[0].checked) return true;
 if (document.webform.type[1].checked) return true;
 if (document.webform.type[2].checked) return true;
 if (document.webform.type[3].checked) return true;
 return false;
}

function validateRadio2()
{
 if (document.webform.brand[0].checked) return true;
 if (document.webform.brand[1].checked) return true;
 if (document.webform.brand[2].checked) return true;
 if (document.webform.brand[3].checked) return true;
 if (document.webform.brand[4].checked) return true;
 if (document.webform.brand[5].checked) return true;
 return false;
}

function validateIssue()
{
 if (document.webform.problem[0].checked) return true;
 if (document.webform.problem[1].checked) return true;
 if (document.webform.problem[2].checked) return true;
 if (document.webform.problem[3].checked) return true;
 return false;
}
