$(function(){
	$(".selected_content").fadeIn(200);

	$(".item").click(function(){
		$(".selected_group").removeClass("selected_group");
		//var curr_class = $(this).attr("class");
		//console.log(curr_class);
		//$(this).attr("class", curr_class + " selected_group");
		$(this).parent().addClass("selected_group");
		var target = $(this).attr("data-target");
		var target_obj =$("#"+target);
		var curr = $(".selected_content");
		curr.removeClass("selected_content");
		target_obj.addClass("selected_content");
		//if(curr.attr("id")!=target) {
			/*curr.fadeOut(200, function(){
				target_obj.fadeIn(200);
			});*/
		//}
	});
	
	/*$(".collapsible").click(function(){
		$(this).toggleClass("collapsed").toggleClass("shown");
	});*/
});