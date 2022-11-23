function jugar() 
{
        const random = Math.floor(Math.random() * 9);
        const random1 = Math.floor(Math.random() * 9);
        
        console.log(random)
        console.log(random1)
    
        document.querySelector(".balota1").textContent = `${random}`;
        document.querySelector(".balota2").textContent = `${random1}`;
    
        let uno = document.querySelector(".opcion1");
        let dos = document.querySelector(".opcion2");
    
        console.log(uno)
    
        let seleccion1 = (uno.value);
        let seleccion2 = (dos.value);
    
    
        if ((seleccion1 == random) && (seleccion2 == random1)) 
        {
            alert("Usted ha ganado, ha coincidido con la maquina");    
        } 
        else
        {
            alert("Usted ha perdido, el resultado de la maquina es diferente");
        }    
    }
    
    const boton = document.querySelector(".Jugarr");
    
    boton.addEventListener("click", jugar);
    
    