$('document').ready(function() {
    var stepIndex = 0;
    $("#introduction").removeClass("fade-in-out");
    
    if ($('.continue').click()) {
        nextStep(stepIndex);
        stepIndex++;
    }

    if ($("#submit-response").click()) {
        let userName = submitName();
        stepIndex++;
    }

    if (stepIndex == 2) {
        guardResponse();
    }

});

function nextStep(stepIndex) {
    $('.continue').click(function() {
        if (stepIndex == 0) {
            $("#button-one").hide();
            $("#guard").removeClass("fade-in-out");
            $("#dialogue").removeClass("fade-in-out");
            $("#response").removeClass("fade-in-out");
        }
    });
}

function submitName() {
    $("#submit-response").click(function() {
        // Gets the username from the user.
        let userName = $("#name").val();

        // fades out the button and input elements.
        $("#name").addClass("fade-in-out");
        $("#submit-response").addClass("fade-in-out");

        // fades in given name in text form.
        $("#response-name").text(userName);
        $("#response-name").removeClass("fade-in-out");

        // fades in the finale and gets its text from guardResponse.
        document.getElementById("dialogue").setAttribute("style","height:600px");
        $("#finale").text(guardResponse(userName));
        $("#finale").removeClass("fade-in-out");
    });

    
    return userName;
}

function guardResponse(userName) {
    let chance = Math.floor(Math.random() * 5) + 1;
    let guardRespond = "";

    // Gets the first name (and last name, if given) in two separate strings.
    let fnameSpelledOut = "";
    let lnameSpelledOut = "";
    let lnameIndex = 0;

    // splits the name into two IF and ONLY IF a space is found.
    let spaceIndex = userName.search(" ");
    if (spaceIndex > 0) {
        // lnameIndex should start after the space, aka first letter of last name.
        lnameIndex = spaceIndex + 1;
        // gets the first name and separates it with dashes
        for (let i = 0; i < spaceIndex; i++) {
            fnameSpelledOut += userName[i] + "-";
        }
        // gets the last name from userName
        for (lnameIndex; lnameIndex < userName.length; lnameIndex++) {
            lnameSpelledOut += userName[lnameIndex];
        }
    }

    /* // Old method for getting first and last name
    for (let i = 0; i < userName.length; i++) {
        if (userName[i] == " ") {
            lnameIndex = i + 1;
            i = userName.length;
        } else if (i == userName.length - 1) {
            fnameSpelledOut += userName[i];
        } else {
            fnameSpelledOut += userName[i] + "-";
        }
    }

    if (lnameIndex != 0) {
        for (lnameIndex; lnameIndex < userName.length; lnameIndex++) {
            lnameSpelledOut += userName[lnameIndex];
        }
    }
    */

    // Debug
    //chance = 1;
    let isBetweenAandH = (fnameSpelledOut[0].toLowerCase() >= "a" && fnameSpelledOut[0].toLowerCase() <= "h");
    let isBetweenIandP = (fnameSpelledOut[0].toLowerCase() >= "i" && fnameSpelledOut[0].toLowerCase() <= "p");
    let isBetweenQandZ = (fnameSpelledOut[0].toLowerCase() >= "q" && fnameSpelledOut[0].toLowerCase() <= "z");
    if (chance == 1) {
        guardRespond += "Upon hearing the name, while he continued to slowly read through whatever was on the page, "
                         + "it didn't take long for his eyes to widen and jaw, even beneath the helmet, to visibly "
                         + "begin to drop to the floor. After a moment, he dropped the book, straightened up, and "
                         + "saluted. \"W-W-Welcome, " + userName + ", Dovahkiin, t-to our w-wonderful city, "
                         + "W-Whiterun! I a-apologize for the confusioN! P-Please enjoy your stay!\" And, just like "
                         + "that, the guard skirted off at the speed of light, leaving you to scratch your head in "
                         + "confusion. And, so, you left on your way to continue your journey. THE END.";
    } else if (lnameIndex != 0) {
        if (isBetweenAandH) {
            guardRespond += "\"" + fnameSpelledOut + " " + lnameSpelledOut + "\" the guard muttered, spelling out the "
                             + "name you gave him. \"It says here...\" He pauses for a moment. "
                             + "From underneath his helmet you can "
                             + "see his eyes go wide momentarily. You realized in that moment what exactly that "
                             + "page of the book held: a list of wanted criminals. In your thoughts a moment ago "
                             + "you forgot to recall that, in Riverwood, you stole everything from the blacksmith "
                             + "as well as, well, let's just say there *is no more Riverwood locals*. \"Halt! "
                             + "You are underarrest " + userName + " for crimes against Skyrim and Her people!\" "
                             + "And, with that, you were hauled off to your time in jail. THE END.";
        } else if (isBetweenIandP) {
            guardRespond += "\"" + fnameSpelledOut + " " + lnameSpelledOut + "...well, it appears your name isn't on the "
                            + "list, so I suppose you're off the hook.\" The guard nodded at his assessment before "
                            + "buggering off, disappearing into the distance. Of course your name wasn't on the list, "
                            + "you just began your adventure. You weren't sure if you intended on doing anything "
                            + "illegal, but, regardless, you continued on your journey. The rabit pelt tucked softly "
                            + "away in your bag, or what was left of it, anyways, which had been slain by the "
                            + "two-handed greatsword on your back. With that out of the way, the city of Whiterun "
                            + "was laid before you for adventure. THE END."
        } else if (isBetweenQandZ) {
            guardRespond += "Q and Z";
        }
    } else {
        if (isBetweenAandH) {
            guardRespond += "A and H, no last name.";
        } else if (isBetweenIandP) {
            guardRespond += "I and P, no last name.";
        } else if (isBetweenQandZ) {
            guardRespond += "Q and Z, no last name.";
        }
    }

    return guardRespond;
}