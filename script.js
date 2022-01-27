function encrypt() {
    let criptografar = document.querySelector(".btnEncrypt").value 


    for(let i = 0; i < criptografar.length; i++) {
        
        let criptografia = criptografar.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")
        criptoTexto.value = criptografia

    }
}


function descrypt(){
    let descriptografar = document.querySelector(".btnEncrypt").value
    

    for(i = 0; i < descriptografar.length; i++) {
        
        
        let descriptografia = descriptografar.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replace("ufat", "u")
        criptoTexto.value = descriptografia
    }

}



