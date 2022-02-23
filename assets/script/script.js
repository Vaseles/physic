console.log("hello");
//Переменные
const body = document.getElementById("body");
const support = document.getElementById("support");
const supportWindow = document.getElementById("supportWindow");
const closeWindow = document.getElementById("closeWindow");
const closeMenu = document.getElementById("closeMenu");
const openMenu = document.getElementById("openMenu");
const menu = document.getElementById("menu");


//______menu______
//open
const open__menu = () => {
	closeMenu.style.display = "block";
	openMenu.style.display = "none";
	menu.style.top = "70px";
};
//close
const close__menu = () => {
	closeMenu.style.display = "none";
	openMenu.style.display = "block";
	menu.style.top = "-380px";
}

//____Support___
//open
const openSupport   = () => {
	supportWindow.style.opacity = "1";

	support.style.color = "blue";
	body.style.overflowY = "hidden";
	body.style.opacity = ".9";
};

//close with help button
const close__window = () => {
	supportWindow.style.opacity = "0";
	support.style.color = "gray";
	body.style.overflowY = "auto";
	body.style.opacity = "1";
};


