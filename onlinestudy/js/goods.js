window.onload=function()
{
    function hotChange(){
		var current_index=0;
		window.setInterval(autoChange,3000);
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
	}
	hotChange();
}