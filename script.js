function gradeFunction()
{
    let totalMark = Number(document.getElementById("markinput").value);
    let examStatus = document.getElementById("examstatus").value;
    
    if(examStatus == "yes")
    {
       if(totalMark >= 90)
       {
         document.getElementById("result").innerHTML = "its final exam and Congrats you got A+ Grade"
       }
       else if(totalMark > 80 && totalMark < 90)
       {
         document.getElementById("result").innerHTML = "its final exam and Congrats you got B+ Grade"
       }
       else if(totalMark > 70 && totalMark <= 80)
       {
         document.getElementById("result").innerHTML = "its final exam and Congrats you got C+ Grade"
       }
       else if(totalMark > 60 && totalMark <= 70)
       {
         document.getElementById("result").innerHTML = "its final exam and Congrats you got D+ Grade"
       }
       else if(totalMark > 50 && totalMark <= 60)
       {
         document.getElementById("result").innerHTML = "its final exam and Congrats you got E+ Grade"
       }
       else
       {
         alert("Better Luck Next Time!")
       }
    }
    else if(examStatus == "no")
    {
      if(totalMark >= 89 && totalMark <= 100)
       {
         document.getElementById("result").innerHTML = "Congrats you got A+ Grade"
       }
       else if(totalMark > 80 && totalMark <= 88)
       {
         document.getElementById("result").innerHTML = "Congrats you got B+ Grade"
       }
       else if(totalMark > 70 && totalMark <= 80)
       {
         document.getElementById("result").innerHTML = "Congrats you got C+ Grade"
       }
       else if(totalMark > 60 && totalMark <= 70)
       {
         document.getElementById("result").innerHTML = "Congrats you got D+ Grade"
       }
       else if(totalMark > 50 && totalMark <= 60)
       {
         document.getElementById("result").innerHTML = "Congrats you got E+ Grade"
       }
       else
       {
         alert("Better Luck Next Time!")
       }
    }
   }
