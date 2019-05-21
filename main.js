function check(){
        var question1 = document.getElementById()value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var correct = 0;
        
        if (question1 == "Brussel") {
        	correct++;
}
	if (question2 == "Amsterdam") {
        	correct++;
}
	if (question3 == "Berlijn") {
        	correct++;
}
        document.getElementById("after_submit").style.visibility = "visible";
	doumment.getElementById("number_correct").innerHTML = "You got" + correct + "correct.";
}
