
let enter = document.querySelector(".user-block"); // Переменная поиск по селектору
let popup = document.querySelector(".modal_content");// Переменная поиск по селектору
let close = popup.querySelector(".modal_content_close");

let mapEnter = document.querySelector(".modal_map"); // Переменная поиск по селектору
let mapPopup = document.querySelector(".modal_content_map");// Переменная поиск по селектору
let mapClose = mapPopup.querySelector(".modal_content_close");

let form  = popup.querySelector("form");
let login = popup.querySelector("[name=login]"); 
let password = popup.querySelector("[name=password]"); 
let storage = localStorage.getItem("login");

	enter.addEventListener("click", function(event){ //отлавливаем событие клин по блоку с классом
	event.preventDefault();							 //отменяем действие по умолчанияю
	popup.classList.add("display_block");		// К переменной добавляем класс
	login.focus();//Фокус на поле логин
	if (storage) {//проверяем записи в сторидже
		login.value = storage;//если сторидж имеет запись в памяти
		password.focus();//Фокус на поле пароль
	} else{
		login.focus();//Фокус на поле логин
	}
});

	close.addEventListener("click", function(event){ //отлавливаем событие клин по блоку с классом
	event.preventDefault();							 //отменяем действие по умолчанияю
	popup.classList.remove("display_block");		// К переменной добавляем класс
	popup.classList.remove("modal-error");

});

	form.addEventListener("submit", function (event) {
		if (!login.value || !password.value) {//проверка на заполнение полей
 			event.preventDefault();//отмена действия по умолчанию
			popup.classList.add("modal-error");
			/*alert("Нужно ввести логин и пароль");//всплывающее окно*/
		} else{
			localStorage.setItem("login", login.value);
		}
 });

window.addEventListener("keydown", function(event){//Обращаемя к окну по нажатию кнопки
	if (event.keyCode === 27){// Строгое соответствие клавише Ecs
		if (popup.classList.contains("modal_content")){//Проверяем есть ли у блока класс видимости
			popup.classList.remove("display_block");	//Если есть класс видимости, удаляем его
			popup.classList.remove("modal-error");
		}
	}
});

mapEnter.addEventListener("click", function(event){ //отлавливаем событие клин по блоку с классом
	event.preventDefault();							 //отменяем действие по умолчанияю
	mapPopup.classList.add("display_block");		// К переменной добавляем класс
	});

mapClose.addEventListener("click", function(event){ //отлавливаем событие клин по блоку с классом
	event.preventDefault();							 //отменяем действие по умолчанияю
	mapPopup.classList.remove("display_block");		// К переменной добавляем класс
});

window.addEventListener("keydown", function(event){//Обращаемя к окну по нажатию кнопки
	if (event.keyCode === 27){// Строгое соответствие клавише Ecs
		if (mapPopup.classList.contains("modal_content_map")){//Проверяем есть ли у блока класс видимости
			mapPopup.classList.remove("display_block");	//Если есть класс видимости, удаляем его
		}
	}
});