
  //Funcion para Manejo de las imagenes
function mostrarBoletos(){
                
    //Definicion de Variables
    let qosta =  parseInt(document.getElementById('qosta').value);
    let thehives =  parseInt(document.getElementById('thehives').value);
    let thefoo =  parseInt(document.getElementById('thefoo').value);    

    let precioBoleto1 = 2500;
    let precioBoleto2 = 1500;
    let precioBoleto3 = 3000;
  
    if (validarCampos() == 1) {
      alert("[WARINING] Asegúrate que todos tus datos estén completos, de otra forma no se puede procesar la compra");
      return;
    };

    let totalBoletos = qosta + thehives + thefoo;
    let totalCompra =  (precioBoleto1 * qosta ) + ( precioBoleto2 * thehives) + ( precioBoleto3 * thefoo );
    
    document.getElementById('totalCompra').value = totalCompra;
    document.getElementById('totalBoletos').value = totalBoletos;

    //dando formato bonito a mis resultados
    document.getElementById('totalCompra').value = new Intl.NumberFormat('es-MX').format(totalCompra);
    document.getElementById('totalBoletos').value = new Intl.NumberFormat('es-MX').format(totalBoletos);
      
    //validaciones
    if (totalBoletos == 0) {
      alert("Debes seleccionar al menos 1 boleto, Favor revisar nuevamente");
      return;
    }
    
    alert("En hora buena!!! Has adquirido  [" + totalBoletos + "] boletos para ver a tu banda favorita !!!")

                var imgArray = new Array();

                imgArray[0] = new Image();
                imgArray[0].src = './img/rock-1.jpg';

                imgArray[1] = new Image();
                imgArray[1].src = './img/qotsa.jpg';
                
                imgArray[2] = new Image();
                imgArray[2].src = './img/thehives.jpg';
                
                imgArray[3] = new Image();
                imgArray[3].src = './img/foo.jpg';               

                var i = 0;
            
                for (i = 0; i < totalBoletos; i++) {

                    if ( qosta > 0 ) {                       
                        document.getElementById("boleto1").src = imgArray[1].src;
                      };
                      if ( thehives > 0) {
                         document.getElementById("boleto2").src = imgArray[2].src;
                      };
                      if (thefoo > 0) {                        
                        document.getElementById("boleto3").src = imgArray[3].src;
                      }

                }
};
//Limpiar la pantalla
function limpiarPantalla(){
       window.location.reload();
 };
function validarCampos(){
     //Validaciones
     let nombre = document.getElementById('nombre').value;
     let apellido = document.getElementById('apellido').value;
     let email = document.getElementById('email').value;     
     if ( nombre.length == 0 || apellido.length == 0 || email.length == 0  )    
     {     
     return 1;
    }
    else {
        return 0;
    }
};
//Funcion para enviar los boletos por correo - In progress
function enviarEmail() {
  let p_host =  "smtp.gmail.com"; // smtp.elasticemail.com
  let p_user =  "guisselle.hbo@gmail.com";
  let p_password = "xxxxxxxxx"; //"DCD3ECC25EE4AE85C9EE4EFCA5C3FA949C46";
  let p_from ="guisselle.hbo@gmail.com";
  let p_to_email = document.getElementById('email').value;
  let p_subject = "Tickets de RockMaster";
  let p_body    = "Aquí recibirás tus boletos";

  if (validarCampos() == 1) {
    alert("[WARINING] Asegúrate que todos tus datos estén completos, de otra forma no se puede procesar la compra");
    return;
  };

              Email.send({
                Host: p_host,
                Username: p_user,
                Password: p_password ,
                To: p_to_email,
                From: p_from,
                Subject: p_subject,
                Body: p_body,
              })
                .then(function (message) {
                  alert("Email Enviado a " + p_to_email);
                });
            };