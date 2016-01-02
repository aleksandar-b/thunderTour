/*Tour JS library*/

var Tour =  (function(){

/**
 * Closure creating function
 * @return {Function} tour
 */
    

          //private

       var hasJquery = (typeof jQuery !== 'undefined');

  
         //Selector query
       var first     = function(val){
		  
         return val[0];
         
         };
      
       var tail       = function(val){
		  
         return val.slice(1);
         
            };
   

  //Main returning function 
 //public 
 /* =========================================================================== */
  
  
  
      var tour = function (arg,counter){



if(document.getElementsByClassName('popup')[0] &&  document.getElementsByClassName('div')[0]){
       document.getElementsByClassName('popup')[0].remove();
       document.getElementsByClassName('div')[0].remove();
}


		// default counter 
		   counter = counter || 0;
		 var length = arguments[0].steps.length;
		//reset counter
		 if(counter ===  arguments[0].steps.length){
		   
		   counter = 0;
		 }
		 
		 var defaults = {side:'left',
						background: 'blue',
						marginOffset:30,

						  
        };
     
     
		 var marginOffset;
		 
		 //margin offset
		 
		 marginOffset = arguments[0].steps[counter].marginOffset ? marginOffset = arguments[0].steps[counter].marginOffset : marginOffset = 30;
		 
		 
		 //current target
		 var klass = arguments[0].steps[counter].selector;
		 
		 //current content
		 var content = arguments[0].steps[counter].content;
		 
		 
		 var side = arguments[0].steps[counter].side;
		 
		 
		 //class of the popup window
		 var mainClass = 'popup';
		 
		 
		 //target Element
		 var firstOne = function (klass){
		   
		 if(first(klass)=== '#'){
		   firstOne =   document.getElementById(tail(klass));
		   
		 }else if(first(klass)=== '.'){
		   
		   firstOne =   document.getElementsByClassName(tail(klass))[0];
		 }else{
			firstOne =   document.querySelectorAll(tail(klass))[0];
		   
		 }
		   return firstOne;
		 };
		 
		 firstOne(klass);
		 
     
      var Rect = firstOne.getBoundingClientRect();

		  var absolutePosBottom = Rect.bottom + window.scrollY;
		 
		 // top position minus custom offset
		  var absolutePos = Rect.top + window.scrollY;
		 
		 // left position
		  var absolutePosX = Rect.left + window.scrollX;
	   
		 // right position
		  var absolutePosR = Rect.right + window.scrollX;
		 
		  var height =absolutePosBottom-absolutePos;
     
     //Create a new div wrapper
       var f = document.createElement("div");
     
			 // give it a position
			 f.style.position = "absolute";
			 
			 //class
			 f.className = "div";
			 // give it a position top
			  f.style.top = absolutePos+ "px";
			 
			 //triangle div dynamic
			 var triangle = '<div class="triangle'+side+'"></div>';
			 
			 //footer of popup window
			 
			 var circles = '';
			 
			 for(var i = 0; i<arguments[0].steps.length; i++){
			   circles += '<div data-index="'+i+'" class="krug"></div>';
			 }
			 
     

		   var ht = '<div class="clear"></div><button class="next">Next</button><div>'+circles+'</div>';
			 
		   //main content plus triangle and footer
			f.innerHTML ='<div class="popup">'+ content+triangle+ht+'</div>'; 

			 
			 //append new div to body
			var h3 = document.getElementsByTagName('body')[0];
				  h3.appendChild(f);
			 

			 if(counter === length-1){   
				 document.getElementsByClassName('next')[0].innerHTML = 'Got it!';    
					 
			  }

			 document.getElementsByClassName('krug')[length-1-counter].style.background = '#00334D';
			 
		 
            
        /*  ============ Append SVG icon ============ */
			   
			 var polygon = '<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FCCF0F" points="17.191,0 1.438,15.457 6.365,15.466 0,29.535 17.166,12.907 11.773,12.661 "></polygon>'

		// Create a dummy receptacle
		var wrapper = document.createElement('div');
		wrapper.className = 'svgt';
		// Wrap the svg string to a svg object (string)
		var svgfragment = '<svg version="1.1" class="" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17.191px" height="29.535px" viewBox="0 0 17.191 29.535" enable-background="new 0 0 17.191 29.535" xml:space="preserve" >' + polygon + '</svg>';
		// Add all svg to the receptacle
		wrapper.innerHTML = '' + svgfragment;

		[].forEach.call(wrapper.childNodes[0].childNodes, function(el){

		document.querySelector('.popup').appendChild(wrapper);

		}); 
       
               /*  ============ Create Audio Effect ============ */
       
       var audio = document.createElement('audio');
       audio.className = 'thunderAudio';
       document.getElementsByTagName('body')[0].appendChild(audio);
       audio.src ='https://dl.dropboxusercontent.com/content_link/g9PwefeIeE8VRDj8NVEuXvCV3YHd2jmRkxaG9NisCUjPbLCdH7TkbHvAPXx3s10J/file';
       audio.volume = 0.2;
     
       
       audio.currentTime = 0;
       audio.play(); 
       
       
       
       
         // Chaining two animation 
         
       document.querySelector('.svgt svg').style.animationName = 'lightning';
       document.querySelector('.svgt svg').addEventListener('animationend', function(){
       document.querySelector('.svgt svg').style.animationName = 'thunder';
        
      });
     
     
     
     
     
        // width of target element
        var width = absolutePosR - absolutePosX;
   
     
	    // right position of popup
	    var RectPopup = document.getElementsByClassName('popup')[0].getBoundingClientRect();


        var right = RectPopup.right + window.scrollX;
        //left position of popup
        var left =RectPopup.left + window.scrollX;
   
     
        var top = RectPopup.top + window.scrollY;
        //left position of popup
        var bottom = RectPopup.bottom + window.scrollY;
   
        
        var targHeight = bottom-top;
     
        var popupWidth = right-left;
     
     
        if(side === 'right'){
       
		 f.style.left = (absolutePosR)+ marginOffset+"px";
		 f.style.top =absolutePos-(bottom-top)/2 +height/2+"px";
		 document.getElementsByClassName('popup')[0].style.animationName = 'fadeInRight';
		 document.getElementsByClassName('triangleright')[0].style.top = (bottom-top)/2-12+"px";
		   
        }
     
      //give a position to new wrapper
    
        if(side === 'left'){
		   
		 f.style.left = (absolutePosX - popupWidth)-marginOffset  + "px";
		 f.style.top =absolutePos-(bottom-top)/2 +height/2+"px";
	     document.getElementsByClassName('triangleleft')[0].style.top = (bottom-top)/2-8+"px";
			//   f.style.top = absolutePos-(bottom-top)/2+11+"px";
          }
     
     
        if(side === 'bottom'){
			  
         f.style.top = absolutePosBottom + marginOffset+"px";
         f.style.left = (absolutePosR-width/2-(right-left)/2) + "px";
         document.getElementsByClassName('popup')[0].style.animationName = 'fadeInBottom';
         document.getElementsByClassName('trianglebottom')[0].style.left = (right-left)/2-12+"px";
        
           }
     
     
        if(side === 'top'){
			   
         document.getElementsByClassName('triangletop')[0].style.left = (right-left)/2-12+"px";
         f.style.top = absolutePos-targHeight-marginOffset + "px";
         f.style.left = (absolutePosR-width/2-(right-left)/2) + "px";
         document.getElementsByClassName('popup')[0].style.animationName = 'fadeInTop';
        
            }
     
		var krug = document.getElementsByClassName('krug');
		 
	    var lengthKrug = krug.length;
     
     




        //click event
        document.getElementsByClassName('next')[0].addEventListener('click', function(){
        
       
       
        if(arg.steps[counter+1]){
         var klasForward = arg.steps[counter+1].selector;
         
         firstOne =   document.querySelector(klasForward); 
       }
      



         var rectLast = firstOne.getBoundingClientRect();
         absolutePos = rectLast.top+ window.scrollY;
         var  relPos = rectLast.top;
       
         counter++;
       



         if(counter < length){
         //firstOne = firstOne.nextSibling.nextSibling;
                  
            if(absolutePos > window.innerHeight){
				
				 if (hasJquery) {
					 document.getElementsByClassName('popup')[0].style.animationDelay = 700;
              jQuery('body, html').animate({ scrollTop: absolutePos-window.innerHeight/2 }, 400);
      
                    }else{

                     window.scrollTo(0,absolutePos-window.innerHeight/2);
                      }
             }else{
         
               window.scrollTo(0,0);
         
         }
       
         }else{
			 
          //end popup and scroll to top
           window.scrollTo(0,0);
           return;
          
          }

          //remove popup 

          document.getElementsByClassName('popup')[0].remove();
          document.getElementsByClassName('div')[0].remove();


          // start popup for next element 
          
           tour(arg, counter);
           return;
       
       
     }, false); 
  
        };
  //End of main function - tour
  /* ================================================================  */
    
   
    
   
   return tour;
  
  
 })();


if (typeof module != "undefined" && module.exports)
  module.exports = Tour;

/*
TO DO
add Options

-background
-back and close button
-blink opacity
-easing
*/
