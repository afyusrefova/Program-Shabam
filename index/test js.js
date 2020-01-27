function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    var question17 = document.quiz.question17.value;
    var question19 = document.quiz.question19.value;
    var question20 = document.quiz.question20.value;
    var question21 = document.quiz.question21.value;
    var question22 = document.quiz.question22.value;
    
    var correct = 0;
    //question 1
    if(question1 == "Always")
    {
      correct= correct+3;
    }
    else if(question1=="Sometimes"){
      correct = correct+2;
    
    }
    else if(question1 =="I do recycle some stuff when I remember"){
      correct = correct + 1;
    }
    //question 2
    if(question2=="Always I hate taking out the trash")
    {
      correct = correct + 3;
    }
    else if(question2=="Sometimes when I have the energy")
    {
      correct = correct + 1;
    }
    else if(question2 == "No, but I buy recycled stuff anyway")
    {
      correct = correct + 2;
    }
    //question 3
    if(question3=="Yes, my next car will be electric")
    {
      correct = correct+2;
    }
    else if(question3=="Maybe, if I had the money or if they were big enough to hold my family")
    {
      correct =correct+1;
    }
    else if(question3 =="I drive one now and I love it")
    {
      correct=correct+3;
    
    }
    //question 4
    if(question4 =="Always2")
    {
      correct = correct + 3;
    }
    else if(question4 == " Sometimes2")
    {
      correct = correct + 2;
    }
    else if(question4 =="No, my fish is scared of dark")
    {
      correct++;
    }
    //question 5
    if(question5=="Vehicles pollute too much so I don't use them")
    {
      correct = correct+ 3;
    }
    else if(question5=="-30")
    {
      correct = correct + 2;
    }
    else if(question5 == "Between 30-40")
    {
      correct++;
    }
    //question 6
    if(question6 == "Always3")
    {
      correct = correct + 3;
    }
    else if(question6 == "Sometimes3")
    {
      correct = correct+2;
    }
    else if(question6=="My mom buys all my food for me")
    {
      correct = correct + 1;
    }
    //question 7
    if(question7=="Yes")
    {
      correct = correct+3;
    }
    //question 8
    if(question8=="No")
    {
      correct = correct + 3;
    }
    //question 9
    if(question9=="Never")
    {
      correct = correct + 3;
    }
    else if(question9=="Sometimes4")
    {
      correct = correct + 2;
    }
    //question 10
    if(question11 =="Donate/give them away")
    {
      correct = correct + 3;
    }
    else if(question11=="Sell them")
    {
      correct = correct + 2;
    }
    else if(question11 =="I cut them up and make a quilt")
    {
      correct = correct + 1;
    }
    //question 11
    if(question12 =="Dishes from inside the house that I will wash later")
    {
      correct = correct + 3;
    }
    else if(question12 == "Bio-degradable plates, cups, eating utensils, and napkins")
    {
      correct = correct + 3;
    }
    else if(question12 =="Styrofoam plates and cups")
    {
      correct = correct + 2;
    }//question 12
    if(question13 =="I use rechargable batteries")
    {
      correct = correct + 3;
    }
    else if(question13 =="I save them for my used battery collection")
    {
      correct = correct + 2;
    }
    else if(question13=="I put them in the freezer")
    {
      correct = correct +1;
    }
    //question 13
    if(question14=="Re-usable canvas bags")
    {
      correct = correct +3;
    }
    else if(question14 =="Paper or plastic that I recycle after")
    {
      correct = correct + 2;
    }
    else if(question14 == "Paper bags")
    {
      correct++;
    }
    //question 14
    if(question15 == "Yes")
    {
      correct = correct + 3;
    
    }
    //question 15
    if(question16 == "Yes")
    {
      correct = correct +3;
    }
    else if(question16 == "Some are")
    {
      correct = correct + 2;
    }
    //question 16
    if(question17 =="Yes")
    {
      correct = correct + 3;
    }
    else if(question17 =="Sometimes")
    {
      correct = correct +2;
    }
    //question 17
    if(question19 == "Yes and they must be organic")
    {
      correct = correct + 3;
    }
    else if(question19 == "Yes")
    {
      correct = correct + 2;
    }
    else if(question19 == "Sometimes and I also buy canned and frozen")
    {
      correct = correct + 1;
    }
    //question 18
    if(question20 == "No I read my news online")
    {
      correct = correc +3;
    }
    else if(question20 == "No I don't care about the news")
    {
      correct = correct + 3;
    }
    else if(question20 =="Yes every week and I recycle them")
    {
      correct = correct + 3;
    }
    //question 19
    if(question21 == "And I use it every single day")
    {
      correct = correct +3;
    }
    else if (question21 == "And I try to use it all the time, but sometimes I forget")
    {
      correct = correct +2;
    }
    //question 20
    if(question22 == "I make my own all natural cleaning products")
    {
      correct = correct + 3;
    }
    else if(question22 = "All natural cleaning products from the store")
    {
      correct = correct + 2;
    }
    // < - po malko
    //> po golqmo
    var messages = ["Great Job!", "That's just okay", "You really need to do better"]
    var range;
    if(correct < 21)
    {
      range = 2;
    }
    if(correct > 20 && correct < 41 )
    {
      range = 1;
    }
    if(correct > 40)
    {
      range = 0;
    }
    if(range == 2)
    {
      window.open("You really need to do better.html");
    }
    if(range == 1)
    {
      window.open("That's just okay.html")
    }
    if(range == 0)
    {
      window.open("Great Job.html")
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "Your score is " + correct;
    
    }
    