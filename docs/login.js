var users = [
	{
	emailVal: 'sa@gmail.com',
	passwordVal: '123321'
	},
	{
	emailVal: 'guest@gmail.com',
	passwordVal: 'guest'
	}
]
function loginCheck(emailVal, passwordVal) {
	for (var user of users) {
		if (emailVal === user.emailVal && passwordVal === user.passwordVal) {
			return true;
		}
	}
	return false;
}
function login(event, emailVal, passwordVal) {
	var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailVal === '' || passwordVal === '') {
        event.preventDefault();
        alert('Ошибка :( Введите и email и пароль, пожалуйста.');
    } 
	else if (!emailRegex.test(emailVal)) {
        event.preventDefault();
        alert('Ошибка :( Введите правильный email, пожалуйста.');
	} 
	else if (!loginCheck(emailVal, passwordVal)) {
		alert('Неверный email или пароль, войти не получится :(')
    } 
	else {
		event.preventDefault()
		var authBlock = document.querySelector('.auth_block');
		authBlock.innerHTML = '';
		var label = document.createElement('label');
		label.textContent = 'Вы вошли как ' + emailVal;
		label.style.backgroundColor = 'white'; 
		label.style.borderRadius = '25%';
		label.style.width = 250 + emailVal.length * 5 + "px"
		label.style.height = '25px'
		authBlock.appendChild(label);
		authBlock.appendChild(label);
		authBlock.style.backgroundColor = '#57ade6';
		authBlock.style.top = '0';
		authBlock.style.border = 'none';
	}
}

var authBlock = document.querySelector('.auth_block');
var loginButton = authBlock.querySelector('button');
loginButton.addEventListener('click',  function(event) {
	var emailVal = document.querySelector('input[type="email"]').value;
	var passwordVal = document.querySelector('input[type="password"]').value;
    login(event, emailVal, passwordVal);
})