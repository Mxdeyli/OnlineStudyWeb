window.onload=function()
{
    function hotChange(){
		var current_index=0;
		var timer=window.setInterval(autoChange,3000);
		var pic_li=document.getElementById("pic").getElementsByTagName("li");
		function autoChange()
		{
			++current_index;
			if(current_index==pic_li.length)
			{
				current_index=0;
			}
			for(var i=0;i<pic_li.length;i++)
			{
				pic_li[i].className="ic";
			}
			pic_li[current_index].className="sp";
		}
		function buttonChange(index)
		{
			current_index+=index;
			if(current_index<0)
			{
				current_index=pic_li.length-1;
			}
			if(current_index>=pic_li.length)
			{
				current_index=0;
			}
			for(var i=0;i<pic_li.length;i++)
			{
				pic_li[i].className="ic";
			}
			pic_li[current_index].className="sp";
		}
		var next_button=document.getElementById("button").getElementsByClassName("next");
		var back_button=document.getElementById("button").getElementsByClassName("back");
		next_button[0].onclick=function(){
			window.clearInterval(timer);
			buttonChange(1);
			timer=window.setInterval(autoChange,3000);
		}
		back_button[0].onclick=function(){
			window.clearInterval(timer);
			buttonChange(-1);
			timer=window.setInterval(autoChange,3000);
		}
	}
	hotChange();
}