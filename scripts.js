function productBannerHover(div){

	console.log(div.querySelector('.product-banner-img'));
	img=div.querySelector('.product-banner-img');
	rct=div.querySelector('.rectriangle-left')
	img.style.opacity=1;
	rct.style.background="#F90101";
}

function productBannerOut(div){

	console.log(div.querySelector('.product-banner-img'));
	img=div.querySelector('.product-banner-img');
	rct=div.querySelector('.rectriangle-left')
	img.style.opacity=0.5;
	rct.style.background="rgba(128,128,128,0.5)";
}

function validateForm(){
	var textName= document.getElementById('name').value;
	var phoneNumber=  document.getElementById('phone').value;
	var textEmail=  document.getElementById('email').value;
	var textMessage= document.getElementById('message').value;
	var correctForm = true;


    //Test campo obligatorio
    if(textName == null || textName.length == 0 || /^\s+$/.test(textName)){
      alert('ERROR: El campo nombre no debe ir vacío');
      return false;
    }

    //Test email
    if(!(/\S+@\S+\.\S+/.test(textEmail))){
      alert('ERROR: Debe ingresar un correo válido');
      return false;
    }


	return correctForm;
}

function numberOnly(id) {
    var element = document.getElementById(id);
    var regex = /[^0-9]/gi;
    element.value = element.value.replace(regex, "");
}