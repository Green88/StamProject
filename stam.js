$(document).ready(function(){
	//alert("hello");
});

$(".item").hover(function(){
	var col = $(this).css("background-color");
	$(this).css("background-color", "yellow");
	}, function(col) {
	$(this).css("background-color", col);
	}
);
	

