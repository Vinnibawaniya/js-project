/*alert("Airthmentic Operators");
	var a=5;
	var b=6;
	var c=a+b;
	document.getElementById("demo").innerHTML =
     "Sum = " + c;	 

     var a=4;
     var b=88;
     var c= a*b;
     document.getElementById("demo2") .innerHTML =
       "Multiply = " + c;
	
	var a=2000;
     var b=88;
     var c= a/b;
     document.getElementById("demo3") .innerHTML =
       "Devide  = " + c;
	
	var a=100;
     var b=88;
     var c= a-b;
     document.getElementById("demo4") .innerHTML =
       "Subtraction = " + c;
       */
	  
	/*var a = 10; 
			var b = 3;
			a **=b;
		document.write(a);

	var x = 50;
	console.time("Test");
	 console.table([1,2,3]);	

	 console.error("something went wrong");

	 console.warn("just warning");
	 console.timeEnd("Test");

	 //ternary operator

	 var a = 10;
	 var b;
	 (a < b)? b = "true" : b = "false";

	 document.write(b);
  
     //switch operator

   /*  var day = 6;
      switch (day)
      {
      		case 0:
      		document.write("Today is Monday");
      		break;

      		
      	    case 1:
      		document.write("Today is Tuesday");
      		break;

      		 case 2:
      		document.write("Today is wednesday");
      		break;

      		 case 3:
      		document.write("Today is thrusday");
      		break;

      		 case 4:
      		document.write("Today is friday");
      		break;

      		 case 5:
      		document.write("Today is saturday");
      		break;

      		 case 6:
      		document.write("Today is sunday");
      		break;

      		default:
      		  document.write("enter the valid week day");

      }

      //alert box

      /*  var x = 50;
       var  y = 20;

      if(x > y)
      {
      	
      	 alert("x is greater");
      }
      else
      {
      	alert("y is greater");
      } */

      // comfirm box :

      /* var z = confirm("Do you like our website");
        
        if(z)
        {
        	alert("thanks");
        }
        else
        {
        	alert("sorry");
        } */

        // prompt box :

        /*var per = prompt("Enter your percentage?");

          if(per >= 88 && per <= 100)
          {
          	document.write("you are merit");
          }
          else if (per >= 60 && per < 80)
          {
          	document.write("you are in 1st devision");
          }
           else if (per >= 45 && per < 60)
          {
          	document.write("you are in IInd devision");
          }
           else if (per >= 33 && per < 45)
          {
          	document.write("you are in IIIrd devision");
          }
           else if (per < 33)
          {
          	document.write("you are fail");
          }
          else
          {
          	document.write("please enter the valid percentage")
          } */

          //function :

        /*  function hello()
          {
          	document.write("hiiii everybody")
          }
           document.write("<br>");
          hello();
          hello();
          document.write("<br>");
          hello();
          hello();
          document.write("<br>");
          document.write("<br>");
          // function with parameter :
           function hello(fname, lname)
           {
           	document.write("hiiii" + " " + fname + " " + lname);
           	document.write("<br>");
           }
           function sum(a, b)
           {
           	document.write(a+b);

           }

           hello("vinni", "bawaniya");
           sum(20,30) */

        // function with return value :
        
        /* function fullname(fname = "vinni", lname = "bawaniya")
        {
        	var a = fname + "_" + lname;

        	return a;
        }  

         var fn = fullname("vinita", "bawaniya");
         document.write("<br>");
          document.write(fn);


         // glabal & local variable :

         var a = "vinni";

          function hello()
          	{
          		document.write(a);
          	}

          	hello();
            	document.write(a);

          // events :
          
          function hello()
          {

          	document.write("<br>");
          	document.write("<br>");
          	alert("event function");
          }  	*/

          // while loop

       /*  var a =1;

          while(a <= 10)
          {
          	document.write("javascript <br>");
            a = a+1;
        } */

       /* for (var a=1; a<=10; a++)
        {
        	if(a == 4)
        	{
        		document.write("hey : " + a + "<br>");
        		break;
        	}
        	document.write("Number :" + a + "<br>"); 	
        }
        */
        // even or odd 

       /* for(var a=1; a <= 100; a = a+10)
        {
        	for(var b = a; b <= a+10; b++)
        	{
        		document.write(b + "  ");
        	}

        	 document.write("<br>");	
        }  */

        // Array :

       /* var ary = [10,20,30,40,50];

          document.write(ary[4]);

          // Date

          var now = new Date();
           document.write(now.toDateString());

           document.write("<br>");

           var now = new Date();
           document.write(now.getDate());
        */

        // DOM

      /* var element;

       element = document.header[0];

       document.write(element); */

      /* var element;

       element = document.getElementById("header").innerHTML = "<h1>jQUERY</h1>";

       document.write(element); */
    /*nfunction myFunction() {
         alert("javascript alert box");
        }
    function massage()
    {
      document.write("this is a massage box");
    }day I have to go at 6 pm.
Thank you
    function changecolor()
    {
      var element;

      document.querySelector("#header").style.color = "green";
      element=document.querySelector("#header h3").style.color="green";
     
        console.log(element);
    }
 


    
      var elementcolor;

      document.querySelector("#header").className = "abc";
      elementcolor=document.querySelector("#header").className;
     
        console.log(elementcolor); */

       /* var element;

         document.getElementById("header").onclick = abc;

         function abc()
         {
          document.getElementById("header").style.background = "blue";

         }  */

      /*   var element;

          document.getElementById("header").addEventListener("mouseleave",abc);

          document.getElementById("header").addEventListener('click', xyz);

          function abc()
          {
            document.getElementById("header").style.background = "green";


          }

          function xyz()
          {
            document.getElementById("header").removeEventListener('mouseleave',abc);
          }

          */

          var element;

           document.getElementById("header").addEventListener("onmouseenter", abc);

           function abc()
           {
            //document.getElementById("header").classList.add("xyz");

           // document.getElementById("header").classList.remove("xyz");

            document.getElementById("header").classList.toggle("xyz");
           

           }