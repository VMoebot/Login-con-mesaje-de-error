function validar_campos(){
    var correo=document.getElementsByName('correo')[0];
    var contraseña=document.getElementsByName('contraseña')[0];
                
    var enviar = true;
   
    if (contraseña.value!=''){
        contraseña.style.border='1px solid #ccc';
        contraseña.style.backgroundColor='#fff';
    }
    else {
        enviar= false;
        contraseña.style.border ='1px solid red';
        contraseña.style.backgroundColor='#fdf7f9';
    }
    if( correo.value.indexOf('@')!= -1){
        correo.style.border='1px solid #ccc';
        correo.style.backgroundColor='#fff';
    }
    else {
        enviar=false;
        correo.style.border='1px solid red';
        correo.style.backgroundColor='#fff';

    }

    if(!enviar){
        document.getElementsByClassName('alert')[0].style.display='block';
    }
    return enviar;
}
