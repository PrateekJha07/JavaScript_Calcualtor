console.log("Javascript Calculator Made by Prateek Jha")

document.getElementById('answer').readOnly = true; //set the attribute in Html file
let screen = document.getElementById('answer');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText, "has been pressed");
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText == "DEL"){
            screenValue = screenValue.slice(0, -1)
            screen.value = screenValue
        } 
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

//code to get values from keyboard
document.addEventListener("keydown", function(event) {
    console.log(event.which);
    screenValue += event.key;
      if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%'){
        screen.value = screenValue;
    }
    if(event.keyCode == 13 || event.keyCode == 187)
    {
        screen.value = eval(screenValue);
    }
    else if(event.keyCode == 46){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    else if(event.keyCode == 8){
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    }
    else if(event.keyCode == 82){
        location.reload();
    }
  })

  //error message pop up in case of any error
  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screenValue = "";
      screen.value = screenValue;
      console.clear();
  }
