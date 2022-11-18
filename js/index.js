function juanyfabio() {

        const random = Math.floor(Math.random() * 9);
        const random1 = Math.floor(Math.random() * 9);
        
        console.log(random)
        console.log(random1)
    
        document.querySelector(".balota").textContent = `${random}`;
        document.querySelector(".balota1").textContent = `${random1}`;
    
        let f = document.querySelector(".opcion1");
        let j = document.querySelector(".opcion2");
    
        console.log(f)
    
        let fabian = (f.value);
        let juandiego = (j.value);
    
    
        if ((fabian == random) && (juandiego == random1)) {
            alert("winner");
    
        } else {
            alert("a bienestar");
        }
    
    }
    
    const boton = document.querySelector(".play");
    
    boton.addEventListener("click", juanyfabio);
    
    