
function subjectCodeData(id){
    // console.log("Click Marce")
    document.getElementById(id).style.display = 'block';
}

function RegistrationData(id){
    document.getElementById(id).style.display='none';
    document.getElementById("registrationData").style.display='block';
}

var loadingPage = document.getElementById("loading");

function myfunction(){
    loadingPage.style.display = 'none';
}