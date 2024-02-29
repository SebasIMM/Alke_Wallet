$(document).ready(function () {
	// live alert
	const alertPlaceholder = document.getElementById('liveAlert');
	let wrapper = null;

	const appendAlert = (message, symbol, type) => {
		wrapper = document.createElement('div');
		wrapper.innerHTML = [
			`<div class="alert alert-${type} alert-dismissible d-flex align-items-center" role="alert">`,
			`<i class="fa-solid ${symbol} me-2"></i>`,
			`   <div>${message}</div>`,
			'</div>',
		].join('');

		alertPlaceholder.append(wrapper);
	};

	// sign in button
	const correctUser = 'sebita@sebas.com';
	const correctPass = '12345';

	$('#signIn').click(function (event) {
		event.preventDefault();

		const username = $('#formName').val();
		const password = $('#formPass').val();

		if (username === correctUser && password === correctPass) {
			appendAlert('Inicio de sesión exitoso', 'fa-circle-check', 'success');
			setTimeout(function () {
				window.location.href = './pages/menu.html';
			}, 1500);
		} else {
			$('#signInForm').trigger('reset');
			appendAlert(
				'usuario o contraseña incorrecto',
				'fa-triangle-exclamation',
				'warning'
			);

			setTimeout(function () {
				wrapper.remove();
			}, 1500);
		}
	});

	// acount value
	let saldo = 6000;

	let account = document.getElementById('accountValue');
	if (account !== null) {
		account.textContent = saldo;
	}

	
	function updateBalance(a) {
		$('#finalAmount').text(a);
	}
	
	// deposit
	$('#depositBtn').click(function () {
		let amount = parseFloat($('#inputNumber').val());

		if (amount !== '' && !isNaN(amount) &&  amount > 0) {
			saldo += amount;
			updateBalance(saldo);
			
		}
	});

	// withdrawal
	$('#withdrawalBtn').click(function () {
		let amount = parseFloat($('#inputNumber').val());

		if (amount <= saldo && amount >= 1 && amount !== '' && !isNaN(amount)) {
			saldo -= amount;
			updateBalance(saldo);
		}
	});	
});
