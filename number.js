function numberCheck() {
    let no = prompt("enter either even or odd number")
    if(no ===''){
        document.getElementById('text').innerHTML = "non input";
    } else{
        if(isNaN(no)){
            document.getElementById('text').innerHTML = "This seems to be invalid";
        }
        else if(no % 2 === 0){
            document.getElementById('text').innerHTML = "This is an Even Number";
        } else{
            return document.getElementById('text').innerHTML = "This is an Odd Number"
        }
    }
}


function getNumbers(){
    let no = prompt("enter either negative or positive to get our category of number")
    text1 = ''
    const positiveNumbers = [1,5,9,13,17,21,25,29,33,37,41,2,6,10,14,18,22,26,30,34,38,42]
    if(no == "positive"){
        for(index = 0; index <=10; index++){
            text1 = text1 + positiveNumbers[index] + '<br>'
            document.getElementById('numberInput').innerHTML = text1
        }
    } else if (no == "negative"){
        for (index = 11; index <=21; index++){
            text1 = text1 + positiveNumbers[index] + '<br>'
            document.getElementById('numberInput').innerHTML = text1
        }
    }
    else{
        return document.getElementById("numberInput").innerHTML = "Not Found!"
    }
}