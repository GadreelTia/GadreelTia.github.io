let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/oracle.jpg') {
      myImage.setAttribute('src','images/solus.jpg');
    } else {
      myImage.setAttribute('src','images/oracle.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Can you taste darkness, ' + myName;
    }
  }
  

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Can you taste darkness, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  
  
