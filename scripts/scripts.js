$('document').ready(function() {
    var i = 0;
    $("#introduction").removeClass("fade-out");
    
    $('#continue').click(function() {
        if (i == 0) {
            $("#guard").removeClass("fade-out");
            i++;
        }
    });
});