var btnTema = $('#btnTema')
var body = $ ('body')

btnTema.on('click' , function(){
    if(btnTema.hasClass("temaClaro")){
        btnTema.removeClass("temaClaro")
        btnTema.addClass("temaEscuro") 
        
        body.removeClass("temaClaro")
        body.addClass("temaEscuro")  
    }else{
        btnTema.removeClass("temaEscuro")
        btnTema.addClass("temaClaro")

        body.removeClass("temaEscuro")
        body.addClass("temaClaro")  
    }
})