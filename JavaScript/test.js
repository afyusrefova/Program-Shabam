function check()
{
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    
    
    var correct = 0;
    //question 1
    if(question1 == "Oil")
    {
      correct = correct+1;
    }
    else
    {
      correct = correct+0;
    }
    
    //question 2
    if(question2=="Biomass")
    {
      correct = correct + 1;
    }
   
    //question 3
    if(question3=="The mechanical energy of the falling water helps generate electricity")
    {
      correct = correct+1;
    }
    
    //question 4
    if(question4 =="It disrupts the ecosystem of rivers by damming the water flow")
    {
      correct = correct + 1;
    }
    
    //question 5
    if(question5=="It can be recycled into plastic")
    {
      correct = correct+ 1;
    }
    
    //question 6
    if(question6 == "To create electricity")
    {
      correct = correct + 1;
    }
 
    //question 7
    if(question7=="To create a cooling system")
    {
      correct = correct+1;
    }

    //question 8
    if(question8=="It creates mud when mixed with water")
    {
      correct = correct + 1;
    }

    //question 9
    if(question9=="1 percent")
    {
      correct = correct + 1;
    }
    
    //question 10
    if(question10 =="Animal feces and algae")
    {
      correct = correct + 1;
    }
    
    //question 11
    if(question11 =="Lack of oxygen due to chemical pollution kills the ocean life")
    {
      correct = correct + 1;
    }
    
    }//question 12
    if(question12 =="Landowners, scientists, local government officials, and staff from responsible agencies consider sound science to design, implement, and monitor water quality management strategies to protect and restore water quality.")
    {
      correct = correct + 1;
    }
    
    //question 13
    if(question13=="Surface water is publicly owned and governed by the State of Texas")
    {
      correct = correct +1;
    }
    
    //question 14
    if(question14 == "Applying the rule of capture, landowners in Texas have vested property rights in the groundwater extracted from their land.")
    {
      correct = correct + 1;
    }

    //question 15
    if(question15 == "a landowner has a right to pump all the water that he can from beneath his land regardless of the effect on wells of adjacent owners")
    {
      correct = correct + 1;
    }
    
    //question 16
    if(question16 =="Texas groundwater belongs to the landowner.")
    {
      correct = correct + 1;
    }
    
    // < - po malko
    //> po golqmo
    var messages = ["Great Job!", "That's just okay", "You really need to do better"]
    var range;
    if(correct < 6)
    {
      range = 2;
    }
    if(correct > 6 && correct < 12 )
    {
      range = 1;
    }
    if(correct > 12)
    {
      range = 0;
    }
    if(range == 2)
    {
      window.open("../HTML/You really need to do better.html")
    }
    if(range == 1)
    {
      window.open("../HTML/That's just okay.html")
    }
    if(range == 0)
    {
      window.open("../HTML/Great Job.html")
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "Your score is " + correct;
 
 
