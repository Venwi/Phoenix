window.onresize = function(){ location.reload(); }
// document.addEventListener("DOMContentLoaded",
			// function(event){
				function (event){
					 var h= document.querySelector("#yt").clientHeight + document.querySelector("#series").clientHeight;
					document.querySelector("#news").style.height=  h + 10 + "px";
				}
		// document.querySelector("#news").addEventListener("click", test);	
		test();	
		// });
		
