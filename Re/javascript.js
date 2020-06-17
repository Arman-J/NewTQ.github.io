
$("document").ready(function(){
	$("#p-main").hide();
	$("#hiw-main").hide();
	$("#p-head").click(function(){
		$(".sub").hide();
		$("#p-main").slideToggle("slow");
	});
	$("#hiw-head").click(function(){
		$(".sub").hide();
		$("#hiw-main").slideToggle("slow");
	});
});