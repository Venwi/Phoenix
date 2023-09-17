//IIEF to fix the collapse behaviour of navigation bar below 768px
// $(function () {
// 	$("#navContainer").mouseleave(function (event){
// 		var scrwidth=window.innerWidth;
// 		console.log(scrwidth)
// 		if(scrwidth < 768 && $("#collapsednavbar").is(':focus')===false)
// 		{
// 			console.log($("#collapsednavbar"));
// 				console.log($(document.activeElement));
// 				console.log($("#collapsednavbar").is(':focus'));
// 			$("#collapse-nav").collapse('hide');
// 		}
// 	});

// 	// $("#collapsednavbar").click(function (event) {
//  //    $(event.target).focus();
//  //  });
// });
$(function () {
	$("#navContainer").mouseleave(function (event){
		if($("#collapsednavbar").is(':focus')===true)
		{	
			$("#collapsednavbar").blur(function (event){
				var scrwidth=window.innerWidth;
				console.log(scrwidth)
				if(scrwidth < 768 && $("#navContainer").is(':hover')===false)
				{
					console.log($("#collapsednavbar"));
					console.log($(document.activeElement));
					console.log($("#navContainer").is(':hover'));

					$("#collapse-nav").collapse('hide');
				}
			});
		}
		else{
			$("#collapse-nav").collapse('hide');
		}
	});

});


//Function to Resize News Pane height according to other elements height
function resizeNews (event){
	var h= document.querySelector("#yt").clientHeight + document.querySelector("#series").clientHeight + document.querySelector(".commentArea").clientHeight;
	document.querySelector("#news-container").style.height=  h + 20 + "px";
}



//That handles when window size changes 
window.onresize = function(){ 
	resizeNews(); 
	
 }
document.addEventListener("DOMContentLoaded",
	function(event){
		
		resizeNews();
		
	});


(function(global){

var toggle= false;
	
	var x=document.getElementById("nw");
	var item = document.querySelector("#art");
	var style= getComputedStyle(item);
	var itemRigthMargin = style.marginRight;
	function toggleNav() {
		if(toggle===false){
			x.style.padding= "20px";
			x.style.width=item.clientWidth + parseFloat(itemRigthMargin) + "px";
			toggle=true;
		}
		else{
			x.style.padding= "0px";
			x.style.width= "0px";
			toggle=false;
		}
	}



	function openNav() {

		x.style.padding= "20px";
		x.style.width=item.clientWidth + parseFloat(itemRigthMargin) + "px";
	}
	function closeNav () {
		x.style.padding= "0px";
		x.style.width= "0px"; 
	}
	global.$toggleNews=toggleNav;
	global.$openNews=openNav;
	global.$closeNews=closeNav;
	
})(window);
