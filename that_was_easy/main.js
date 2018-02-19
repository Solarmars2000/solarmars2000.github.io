function sayThatWasEasy() { 
    var thatWasEasy = new Audio("that_was_easy.mp3") ;
    thatWasEasy.play() ; 
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) { 
    if (event.char<textarea rows="4" cols="50">

        $("#easy").trigger("click");
    }
}
        
        

    