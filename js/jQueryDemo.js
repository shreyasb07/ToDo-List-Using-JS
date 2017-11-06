//Function to strikthrough a To-DO
$('ul').on("click","li", function()
{
	$(this).toggleClass('done');
});


//function to click on X
$('ul').on("click","span", function(event){
	$(this).parent().remove();
	event.stopPropagation();
});

$('input[type = text]').keypress(function(event){
	if (event.which=== 13) {
	console.log("Enter key pressed");
	var todoText = $(this).val();
	$(this).val("");
	$('ul').append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
	
});

$('.fa-plus').click(function(){
	$('input[type = text]').toggle();
});
