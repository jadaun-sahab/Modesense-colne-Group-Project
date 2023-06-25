
// -------------------------navbar--------------------------

const toggleButton = document.getElementsByClassName('fa-bars')[0]
    const navbarLinks = document.getElementsByClassName('nav')[0]
   
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })


// -------------------------login--------------------------



let y= document.getElementById("login")
y.style.display="none"

function loginPage(){
    if(y.style.display=="none"){
        y.style.display="flex"
    }
    else{
        y.style.display="none"
    }
}

document.getElementById("btn1").addEventListener("click", loginfun)
function loginfun(){
  let storedem = document.getElementById("email2").value
  let storedpas = document.getElementById("password2").value
alert("Account Created Successfully")
  localStorage.setItem("storedemail",storedem)
  localStorage.setItem("storedpassword",storedpas)
}



// ---------------------first slider-----------------------



let prev = document.getElementById('previous');
    let next = document.getElementById('next');

    let arr = ["images/img1.jpg", "images/img4.jpg", "images/img5.jpg",
    "images/img6.jpg", "images/img7.jpg"];
   
    let i = 0;

    next.addEventListener('click', function () {
        i++;
        if (i > arr.length - 1) {
            i = 0;
        }
        document.getElementById('image').src = arr[i];
    })
   
    prev.addEventListener('click', function () {
        i--;
        if (i < 0) {
            i = arr.length - 1;
        }
        document.getElementById('image').src = arr[i];
    })

  function slides() {
    document.getElementById("image").src = arr[i];

    if (i < arr.length - 1) i++;
    else i = 0;
  }
  setInterval(slides, 3500);



// ---------------------second slider-----------------------



let prev2 = document.getElementById('previous2');
    let next2 = document.getElementById('next2');

    let arr2 = ["images/img2-1.jpg", "images/img2-2.jpg", "images/img2-3.jpg"];

    let j=0;
    
    next2.addEventListener('click', function () {
        
        j++;
        if (j > arr2.length - 1) {
            j = 0;
        }
        document.getElementById('image2').src = arr2[j];
    })

    prev2.addEventListener('click', function () {
        j--;
        if (j < 0) {
            j = arr2.length - 1;
        }
        document.getElementById('image2').src = arr2[j];
    })
  
  function slides2() {
    document.getElementById("image2").src = arr2[j];

    if (j < arr2.length - 1) j++;
    else j = 0;
  }
  setInterval(slides2, 2000);



// ---------------------feedback-----------------------



let v= document.getElementById("feedback")
v.style.display="none"

function menuitem2(){
    if(v.style.display=="none"){
        v.style.display="block"
    }
    else{
        v.style.display="none"
    }
}





let x2= document.getElementById("feedback")
x2.style.display="none"

function feedbackPage(){

    confirm("Do You Want To Close This Feedback Form")
    if(x2.style.display=="none"){
        x2.style.display="flex"
    }
    else{
        x2.style.display="none"
    }
}

function massage(){
  let mass=  document.getElementById("textarea").value
   alert("Your Feedback has been Submitted")
   localStorage.setItem("massage",mass)


  
}



// --------------------------feedback---------------------------






//   ---------------------*---------------------*---------------------*---------------------