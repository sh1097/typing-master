const main1=document.querySelectorAll("#main1");
 // const text1=document.querySelectorAll("text1");
 const timer=document.querySelectorAll("#timer");
 const btn1=document.querySelectorAll("#btn1");
const testArea = document.querySelector("#text1");
var str1="";
var str2=document.getElementById("main1").innerHTML;

var timeleft=30;
 var store;
 var stop=false;

function interval(){
	
	store=setInterval(starttimer,1000);
}

 








function starttimer(){
	if(timeleft==-1){
	   clearInterval(store);
	 
	}
	else 
	{
		document.getElementById("timer").innerHTML = "Time left"+ ":" + timeleft ;
        --timeleft;
	}
}

function spell(){
	
if(stop==false){
	stop=true;
	interval();
}
 str1=document.getElementById("text1").value;
 var comp=str1.localeCompare( str2);
 if(comp==0){
 	
    clearInterval(store);
    var accurate=parseInt((str1.split(" ").length/(30-timeleft))*60);
    document.getElementById("acct").innerHTML=accurate+"%";

 }


 /*else{
 starttimer();
 }*/
}






function reset(){

	document.getElementById("timer").innerHTML= ("time-left : "+ 30);
    clearInterval(store);
    testArea.value="";
    stop=false;
    timeleft=30;



}



testArea.addEventListener("keypress",spell);


// testArea.addEventListener("keypress",spellcheck);








