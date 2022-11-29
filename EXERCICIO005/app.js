function MostrarNumero() {
    let n1 = document.getElementById("numero").value 
    let centimetros = parseFloat(n1) * 100
    document.getElementById("mensagem").innerHTML = " O valor em centímetros é " + centimetros
    
    
}
