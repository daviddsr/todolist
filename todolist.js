$(document).ready(function () {
	$('#boton').click(function () {
			var Agregar = $('input[name=itemDeLista]').val();
		$('ul').prepend('<li class="item">' + Agregar + '</li>');

		

		
		
	});

	$(document).on('dblclick','.item',function(){
				$(this).toggleClass('rojas');
		});
	$(document).on('click','.item',function(){
			$(this).toggleClass('verdes');
			
		});
	$('form').submit(function(event){
		event.preventDefault();
	});
});

	$(document).ready(function (){
		$(document).keypress(function (e) {

		if(e.keyCode==13) {
			$('#boton').click();
		
		}	
		});
	});



$(document).ready(function () {
	$('#borrartodo').click(function () {
		$('.item').remove();
	});
});

$(document).ready(function () {
	$('#borrarhechas').click(function () {
		$('.verdes').remove();
	});
});




// 
/*
$(document).ready(function () {
	$('input[name=itemDeLista]').on('keypress', function (key) {
		if(key.which==13)
		var Agregar = $('input[name=itemDeLista]').val();
	$('ul').prepend('<li>' + Agregar + '</li>');	
	});
	
});

$(document).ready(function () {
	$("")
}
*/