function Validacao(campo){
    if(campo.name == "Correta"){
campo.style.background = "green"
campo.style.color = "white"
alert('Resposta certa!')
    }else{
window.document.form1.Correta.style.background = "green"
window.document.form1.Correta.style.color = "white"
campo.style.background = "red"
campo.style.color = "white"
alert('Resposta Errada!') 
    }
}