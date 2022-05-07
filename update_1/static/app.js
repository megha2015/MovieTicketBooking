var username = null;
var password = null;
var type = null;

function login(){
	if(username === null){
		username = $("[name='username']")[0].value;
		password = $("[name='password']")[0].value;
	}
	var form = {
		'username' : username,
		'password' : password
	};
	$.ajax({
		type: 'POST',
		url: '/login',
		data: form,
		success: function(response){
			$('.module').html(response);
			$('.module').addClass('module-after-login');
			$('.login-header').addClass('after-login');
			$('#datepicker-cashier').pickadate({
				min : new Date(),
				formatSubmit: 'yyyy/mm/dd',
 				hiddenName: true,
 				onSet: function( event ) {
 					if ( event.select ) {
 						$('#datepicker-cashier').prop('disabled', true);
 						getMoviesShowingOnDate(this.get('select', 'yyyy/mm/dd' ));
 					}
 				}
			});
		}
	});
}

