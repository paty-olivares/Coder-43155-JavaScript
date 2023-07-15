  //Definicion de Variables
  let qosta = document.getElementById('qosta');
  let thehives = document.getElementById('thehives');
  let thefoo = document.getElementById('thefoo');
  
  let boleto1 = 0;
  let boleto2 = 0;
  let boleto3 = 0;
  let cuentaBoleto1 = 0;
  let cuentaBoleto2 = 0;
  let cuentaBoleto3 = 0;
  let cuentBoletos = 0;
  let totalCompra =0;

  //Controlando los Checked Buttons
  //Y mostrando los resultados de la compra
 qosta.addEventListener('click', function() {
    if(qosta.checked) {
      alert("El boleto para ver a los Queen Of Stone Age tiene un valor de MXN $2,500.00")
      boleto1 = 2500; 
      cuentaBoleto1 = 1;
      totalCompra = boleto1 + boleto2 + boleto3;
      cuentBoletos = cuentaBoleto1 + cuentaBoleto2 + cuentaBoleto3;

      document.getElementById('totalCompra').value = new Intl.NumberFormat('es-MX').format(totalCompra);
      document.getElementById('totalBoletos').value = new Intl.NumberFormat('es-MX').format(cuentBoletos);

    }
    else {
        boleto1 = 0; 
        cuentaBoleto1 = 0;
        totalCompra = boleto1 + boleto2 + boleto3;
        cuentBoletos = cuentaBoleto1 + cuentaBoleto2 + cuentaBoleto3;
  
        document.getElementById('totalCompra').value = new Intl.NumberFormat('es-MX').format(totalCompra);
        document.getElementById('totalBoletos').value = new Intl.NumberFormat('es-MX').format(cuentBoletos);
  
    }
    
    ; });

    thehives.addEventListener('click', function() {
        if(thehives.checked) {
          alert("El boleto para ver a The Hives tiene un valor de MXN $1000.00")
          boleto2 = 1000;
          cuentaBoleto2 = 1;

          totalCompra = boleto1 + boleto2 + boleto3;
          cuentBoletos = cuentaBoleto1 + cuentaBoleto2 + cuentaBoleto3;
    
          document.getElementById('totalCompra').value = new Intl.NumberFormat('es-MX').format(totalCompra);
          document.getElementById('totalBoletos').value = new Intl.NumberFormat('es-MX').format(cuentBoletos);

        } else{
          
                boleto2 = 0; 
                cuentaBoleto2 = 0;
                totalCompra = boleto1 + boleto2 + boleto3;
                cuentBoletos = cuentaBoleto1 + cuentaBoleto2 + cuentaBoleto3;
          
                document.getElementById('totalCompra').value = new Intl.NumberFormat('es-MX').format(totalCompra);
                document.getElementById('totalBoletos').value = new Intl.NumberFormat('es-MX').format(cuentBoletos);

        }; });

        thefoo.addEventListener('click', function() {
            if(thefoo.checked) {
              alert("El boleto para ver a The Foo Fighters tiene un valor de MXN $3,000.00")
              boleto3 = 3000;
              cuentaBoleto3 = 1;

              totalCompra = boleto1 + boleto2 + boleto3;
              cuentBoletos = cuentaBoleto1 + cuentaBoleto2 + cuentaBoleto3;
        
              document.getElementById('totalCompra').value = new Intl.NumberFormat('es-MX').format(totalCompra);
              document.getElementById('totalBoletos').value = new Intl.NumberFormat('es-MX').format(cuentBoletos);

              
            }else{

                boleto3 = 0; 
                cuentaBoleto3 = 0;
                totalCompra = boleto1 + boleto2 + boleto3;
                cuentBoletos = cuentaBoleto1 + cuentaBoleto2 + cuentaBoleto3;
          
                document.getElementById('totalCompra').value = new Intl.NumberFormat('es-MX').format(totalCompra);
                document.getElementById('totalBoletos').value = new Intl.NumberFormat('es-MX').format(cuentBoletos);

            }; });
   
   
  //Funcion para Manejo de las imagenes
            function mostrarBoletos(){
                
                let boletos = parseInt(document.getElementById("totalBoletos").value);
               
               
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
                alert("En hora buena!!! Has adquirido  " + boletos + " boletos para ver a tu banda favorita !!!")
                for (i = 0; i < boletos; i++) {

                    if (document.getElementById('qosta').checked) {                       
                        document.getElementById("boleto1").src = imgArray[1].src;
                      };
                      if (document.getElementById('thehives').checked) {
                         document.getElementById("boleto2").src = imgArray[2].src;
                      };
                      if (document.getElementById('thefoo').checked) {                        
                        document.getElementById("boleto3").src = imgArray[3].src;
                      }

                }
            }
//Limpiar la pantalla
            function limpiarPantalla(){
                window.location.reload();
            }
   
