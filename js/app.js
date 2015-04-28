$(document).ready(function(){

	$("#home-change-site .member").each(function(index,value){
		var _top = parseInt($(this).parent().css("top"));
		$(this).css("top",_top + (index+1) * 40);
	});
	
	$("#away-change-site .member").each(function(index,value){
		var _top = parseInt($(this).parent().css("top"));
		$(this).css("top",_top + (index + 1) * 40);
	});
	
	$("#referer .member").each(function(index,value){
		var _top = parseInt($(this).parent().css("top"));
		$(this).css("top",_top + (index + 1) * 40);
	});
	
	$(".member").draggable();

	
	//繪製場地
	var _startX;				
	var _startY;
	
	var _endX;
	var _endY;
	
	_startX = 50;
	_startY = 50;
	
	_endX = 550;				
	_endY = 890;
	

	var _field = document.getElementById("field");
	var _canvas = _field.getContext("2d");
	
	_canvas.fillStyle = "rgb(255,77,77)";
	_canvas.fillRect(0,0,600,940);
	
	_canvas.fillStyle = "rgb(0,153,255)";
	_canvas.fillRect(_startX,_startY,500,840);
	
	_canvas.rect(_startX,_startY,500,840);
	_canvas.lineWidth = 2;
	_canvas.strokeStyle = "#fff";
	_canvas.stroke();
	
	
	var _centerX;
	var _centerY;
	
	_centerX = (_field.width)/2;
	_centerY = (_field.height)/2;
	
	
	//field center
	_canvas.beginPath();
	_canvas.arc(_centerX,_centerY,60,0,2*Math.PI);
	_canvas.strokeStyle = "#fff";
	_canvas.lineWidth = 2;
	
	_canvas.moveTo(_startX,_centerY);
	_canvas.lineTo(_field.width-50,_centerY);
	
	_canvas.stroke();
	
	
	
	//home area
	_canvas.beginPath();
	_canvas.arc(_centerX-30,_startY,120,0.5*Math.PI,1*Math.PI);
	_canvas.stroke();
	
	_canvas.moveTo(_centerX-30,120+_startY)
	_canvas.lineTo(_centerX+30,120+_startY)
	_canvas.stroke();
	
	_canvas.beginPath();
	_canvas.arc(_centerX+30,_startY,120,0*Math.PI,0.5*Math.PI);
	_canvas.stroke();
	
	_canvas.moveTo(_centerX-30,_startY-5)
	_canvas.lineTo(_centerX-30,_startY+5)
	
	_canvas.moveTo(_centerX+30,_startY-5)
	_canvas.lineTo(_centerX+30,_startY+5)
	_canvas.stroke();
	
	
	//away area
	_canvas.beginPath();
	_canvas.arc(_centerX-30,_field.height-_startY,120,1*Math.PI,1.5*Math.PI);
	_canvas.stroke();				
	
	_canvas.beginPath();
	_canvas.moveTo(_centerX-30,_field.height-_startY-120)
	_canvas.lineTo(_centerX+30,_field.height-_startY-120)
	_canvas.stroke();
	
	_canvas.beginPath();
	_canvas.arc(_centerX+30,_field.height-_startY,120,1.5*Math.PI,2*Math.PI);
	_canvas.stroke();
	
	_canvas.moveTo(_centerX-30,_field.height-_startY-5)
	_canvas.lineTo(_centerX-30,_field.height-_startY+5)
	
	_canvas.moveTo(_centerX+30,_field.height-_startY-5)
	_canvas.lineTo(_centerX+30,_field.height-_startY+5)
	_canvas.stroke();
	
	
	
	//繪製標記點
	_canvas.beginPath();
	_canvas.arc(_centerX,_centerY,4,0,2*Math.PI);
	_canvas.fillStyle = "#fff";
	
	_canvas.arc(_centerX,120+_startY,4,0,2*Math.PI);
	_canvas.arc(_centerX,_field.height-_startY-120,4,0,2*Math.PI);
	
	_canvas.arc(_centerX,200+_startY,4,0,2*Math.PI);
	_canvas.arc(_centerX,_field.height-_startY-200,4,0,2*Math.PI);
	_canvas.fill();
	
	//player change area
	_canvas.beginPath();
	_canvas.moveTo(_endX+5,_centerY-100);
	_canvas.lineTo(_endX-5,_centerY-100);
	
	_canvas.moveTo(_endX+5,_centerY-200);
	_canvas.lineTo(_endX-5,_centerY-200);
	
	_canvas.moveTo(_endX+5,_centerY+100);
	_canvas.lineTo(_endX-5,_centerY+100);
	
	_canvas.moveTo(_endX+5,_centerY+200);
	_canvas.lineTo(_endX-5,_centerY+200);
	_canvas.stroke();
	
	//corner area
	_canvas.beginPath();
	_canvas.arc(_startX,_startY,10,0*Math.PI,0.5*Math.PI);
	_canvas.stroke();
	
	_canvas.beginPath();
	_canvas.arc(_endX,_startY,10,0.5*Math.PI,1*Math.PI);
	_canvas.stroke();
	
	_canvas.beginPath();
	_canvas.arc(_field.width - _startX,_field.height-_startY,10,1*Math.PI,1.5*Math.PI);
	_canvas.stroke();
	
	_canvas.beginPath();
	_canvas.arc(_startX,_field.height-_startY,10,1.5*Math.PI,0*Math.PI);
	_canvas.stroke();
});		