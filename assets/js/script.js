
function init(){
	var es = document.querySelector("#es");
	var en = document.querySelector("#en");

	es.addEventListener("click",capture);
	en.addEventListener("click",capture);

	getInfo();
}

function capture(e){
	var objectsEvent = {
		id : e.target.id,
		url : e.target.href
	};

	var objectJSON = JSON.stringify(objectsEvent);

	localStorage.setItem("language",objectJSON);

	getInfo();
}

function getInfo(){
	var getLocal = localStorage.getItem("language");

	if(getLocal != null || getLocal != undefined){
		var getObject = JSON.parse(getLocal);

		window.location.href = getObject.url;
		
	}

}

window.onload = init;