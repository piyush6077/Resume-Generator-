
const socialbtn = document.getElementById("sociallink");
const socialbtn2 = document.getElementById("socialbtn2");



socialbtn.addEventListener('click', changeclass);

function changeclass(){
    var changeclass = document.getElementById('show');

    changeclass.classList.toggle('content3')
}

socialbtn2.addEventListener('click',notshown);

function notshown(){
    var changeclass = document.getElementById('show');

    changeclass.classList.remove('content3');
}

function saveImage() {
    var fileInput = document.getElementById("imageFile");
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var imageData = e.target.result;
        localStorage.setItem("uploadedImage", imageData);
        displayImage(imageData, "imageContainer");


    };

    reader.readAsDataURL(file);
}

function displayImage(imageData, containerId) {
    var imageContainer = document.getElementById(containerId);
    imageContainer.innerHTML = "<img src='" + imageData + "' style='max-width: 100%; height: auto;'>";
}

window.addEventListener("DOMContentLoaded", function() {
    var imageData = localStorage.getItem("uploadedImage");
    if (imageData) {
        displayImage(imageData, "imageContainer");
    }
});

/*======================================-------------------------------------------------*/



    const text1 = document.getElementById('firstname');
    const text2 = document.getElementById('rsurname');
    const storebtn = document.getElementById('storebtn');
    const phone = document.getElementById('phonenumber');

    const city01 = document.getElementById('city1');
    const country01 = document.getElementById('country1');

    const profession = document.getElementById('profession');
    const email = document.getElementById('email');
    const pincode = document.getElementById('pincode');
    const twitter1 = document.getElementById('twitter1');
    const github1 = document.getElementById('github1');
    const website1 = document.getElementById('website1');

    const imageface = document.getElementById('imageface');
    

    storebtn.addEventListener('click', () => {
      
        const value = text1.value.trim();
        const value2 = text2.value.trim();
        const value3 = phone.value.trim();
        const value4 = city01.value.trim();
        const value5 = country01.value.trim();

        const professionvalue = profession.value.trim();
        const emailValue = email.value.trim();
        const pinvalue = pincode.value.trim();
        const twittervalue = twitter1.value.trim();
        const githubvalue = github1.value.trim();
        const websitevalue = website1.value.trim();
        
        //const value6 = profession.value.trim();
        //const value7 = email.value.trim();

     //   const value6 = profession.value.trim();
     //   const value7 = pincode.value.trim();
      //  const value8 = email.value.trim();



        localStorage.setItem('storetext1', value);
        localStorage.setItem('storetext2', value2);
        localStorage.setItem('storephone', value3);
        

        localStorage.setItem('storecity1', value4);
        localStorage.setItem('storecountry1', value5);
        localStorage.setItem('storeProfession' , professionvalue);
        localStorage.setItem('storeEmail' , emailValue);
        localStorage.setItem('storePincode', pinvalue);
        localStorage.setItem('storetwitter' , twittervalue);
        localStorage.setItem('storegithub', githubvalue);
        localStorage.setItem('storewebsite', websitevalue);
        
   })