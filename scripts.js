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



(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);



  jQuery.validator.addMethod("isValidEmail", function(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email); 
  }, "Email no valido");


  $('#formRegister').validate({
    rules: {
      phone : { number: true, minlength: 9 },
      name : {},
      email : {isValidEmail: true },
      message : {}
    },
    messages: {
      name : { 
        required: 'Un nombre es requerido'},
      phone : { 
        required: 'Un número es requerido',
        number: 'Debe ser un número',
        minlength: 'Debe contener al menos 9 digitos' },
      email : {
        required: 'Un email es requerido'},
      message : {
        required : "Un mensaje es requerido"
      }
    },
    errorClass: "error",
    validClass: "valid-feedback",
    errorElement: "div",
    submitHandler: function(form){
      var options = {
        target: '',
        beforeSubmit: function(){ console.log('submitted'); },
        success: function() { 
          console.log('success');
          //@todo: crear una alerta que muestre que el formulario se ha enviado correctamente
        }
      };

      $(form).ajaxSubmit(options); 
    }
  });

  })();