// JavaScript for submit feedback link and for printing it to console
document.getElementById("submit-feedback").addEventListener("click", submitFunction);

//Defining a function
function submitFunction()
{
    var feedback=prompt("What feedback/suggestions do you have for our website?")
    console.log(feedback);
}
