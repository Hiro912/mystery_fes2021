// button1
$(function(){
    $('#button1').click(function(){
        var answer1 = $('#answer1').val();
        if (answer1 == "PARALLEL" || answer1 == "パラレル" || answer1 == "parallel") {
            $('#mystery1_answer').fadeIn();
            $('#mistake1').hide();
            $("#answer1").prop('disabled', true);
            $("#button1").prop("disabled", true);
        } else {
            $('#mistake1').hide();
            $('#mistake1').fadeIn();
            var fights = ["もう一度よく考えてみよう！", "あきらめずにトライ！", "書き方を変えると正解するかも？"]
            var fight1 = fights[Math.floor(Math.random() * fights.length)]
            $("#fight1").text(fight1);
        }
    });
    $("#answer1").keypress(function(e){
        if(e.which == 13){
            $("#button1").click();
        }
    });
});
// key1
$(function(){
    $("#key_button1").click(function(){
        var key1 = $('#key1').val();
        if (key1 == 'へ') {
            $("#mystery2").fadeIn();
            $("#key1").prop('disabled', true);
            $("#key_button1").prop("disabled", true);
        }
        else {
            alert("キーワードが違います");
        }
    })
    $("#key1").keypress(function(e){
        if(e.which == 13){
            $("#key_button1").click();
        }
    });
})
// button2
$(function(){
    $('#button2').click(function(){
        var answer2 = $('#answer2').val();
        if (answer2 == "しみ" || answer2 == "シミ") {
            $('#mystery2_answer').fadeIn();
            $('#mistake2').hide();
            $("#answer2").prop('disabled', true);
            $("#button2").prop("disabled", true);
        } else {
            $('#mistake2').hide();
            $('#mistake2').fadeIn();
            var fights = ["もう一度よく考えてみよう！", "あきらめずにトライ！", "書き方を変えると正解するかも？"]
            var fight2 = fights[Math.floor(Math.random() * fights.length)]
            $("#fight2").text(fight2);
        }
    });
    $("#answer2").keypress(function(e){
        if(e.which == 13){
            $("#button2").click();
        }
    });
});
// key2
$(function(){
    $("#key_button2").click(function(){
        var key2 = $('#key2').val();
        if (key2 == 'い') {
            $("#mystery3").fadeIn();
            $("#key2").prop('disabled', true);
            $("#key_button2").prop("disabled", true);
        }
        else {
            alert("キーワードが違います");
        }
    })
    $("#key2").keypress(function(e){
        if(e.which == 13){
            $("#key_button2").click();
        }
    });
})
// button3
$(function(){
    $('#button3').click(function(){
        var answer3 = $('#answer3').val();
        if (answer3 == "CHECK" || answer3 == "check") {
            $('#mystery3_answer').fadeIn();
            $('#mistake3').hide();
            $("#answer3").prop('disabled', true);
            $("#button3").prop("disabled", true);
        } else {
            $('#mistake3').hide();
            $('#mistake3').fadeIn();
            var fights = ["もう一度よく考えてみよう！", "あきらめずにトライ！", "書き方を変えると正解するかも？"]
            var fight3 = fights[Math.floor(Math.random() * fights.length)]
            $("#fight3").text(fight3);
        }
    });
    $("#answer3").keypress(function(e){
        if(e.which == 13){
            $("#button3").click();
        }
    });
});
// key3
$(function(){
    $("#key_button3").click(function(){
        var key3 = $('#key3').val();
        if (key3 == 'こう') {
            $("#mystery4").fadeIn();
            $("#key3").prop('disabled', true);
            $("#key_button3").prop("disabled", true);
        }
        else {
            alert("キーワードが違います");
        }
    })
    $("#key3").keypress(function(e){
        if(e.which == 13){
            $("#key_button3").click();
        }
    });
})
// button4
$(function(){
    $('#button4').click(function(){
        var answer4 = $('#answer4').val();
        if (answer4 == "ミサンガ" || answer4 == "みさんが") {
            $('#mystery4_answer').fadeIn();
            $('#mistake4').hide();
            $("#answer4").prop('disabled', true);
            $("#button4").prop("disabled", true);
        } else {
            $('#mistake4').hide();
            $('#mistake4').fadeIn();
            var fights = ["もう一度よく考えてみよう！", "あきらめずにトライ！", "書き方を変えると正解するかも？"]
            var fight4 = fights[Math.floor(Math.random() * fights.length)]
            $("#fight4").text(fight4);
        }
    });
    $("#answer4").keypress(function(e){
        if(e.which == 13){
            $("#button4").click();
        }
    });
});
// key4
$(function(){
    $("#key_button4").click(function(){
        var key4 = $('#key4').val();
        if (key4 == 'せ') {
            $("#mystery5").fadeIn();
            $("#key4").prop('disabled', true);
            $("#key_button4").prop("disabled", true);
        }
        else {
            alert("キーワードが違います");
        }
    })
    $("#key4").keypress(function(e){
        if(e.which == 13){
            $("#key_button4").click();
        }
    });
})
// button5
$(function(){
    $('#button5').click(function(){
        var answer5 = $('#answer5').val();
        if (answer5 == "ドア" || answer5 == "扉" || answer5 == "door") {
            $('#mystery5_answer').fadeIn();
            $('#mistake5').hide();
            $("#answer5").prop('disabled', true);
            $("#button5").prop("disabled", true);
        } else {
            $('#mistake5').hide();
            $('#mistake5').fadeIn();
            var fights = ["もう一度よく考えてみよう！", "あきらめずにトライ！", "書き方を変えると正解するかも？"]
            var fight5 = fights[Math.floor(Math.random() * fights.length)]
            $("#fight5").text(fight5);
        }
    });
    $("#answer5").keypress(function(e){
        if(e.which == 13){
            $("#button5").click();
        }
    });
});
// key5
$(function(){
    $("#key_button5").click(function(){
        var key5 = $('#key5').val();
        if (key5 == 'かい') {
            $("#mystery6").fadeIn();
            $("#key5").prop('disabled', true);
            $("#key_button5").prop("disabled", true);
        }
        else {
            alert("キーワードが違います");
        }
    })
    $("#key5").keypress(function(e){
        if(e.which == 13){
            $("#key_button5").click();
        }
    });
})
// button6
$(function(){
    $('#button6').click(function(){
        var answer6 = $('#answer6').val();
        if (answer6 == "ツララ" || answer6 == "氷柱" || answer6 == "つらら") {
            $('#mystery6_answer').fadeIn();
            $('#mistake6').hide();
            $("#answer6").prop('disabled', true);
            $("#button6").prop("disabled", true);
        } else {
            $('#mistake6').hide();
            $('#mistake6').fadeIn();
            var fights = ["もう一度よく考えてみよう！", "あきらめずにトライ！", "書き方を変えると正解するかも？"]
            var fight6 = fights[Math.floor(Math.random() * fights.length)]
            $("#fight6").text(fight6);
        }
    });
    $("#answer6").keypress(function(e){
        if(e.which == 13){
            $("#button6").click();
        }
    });
});
