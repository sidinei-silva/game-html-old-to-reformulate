

//Iniciação de reconhecimento de toque
var snapper = new Snap({
element: document.getElementById('crianca'),
hyperextensible: true,
tapToClose: false,
touchToDrag: true,
maxPosition: 0,
minPosition: 0,
resistance:0,
});

//Area de Script do Game

$("#mensagem").fadeOut(4000);
var pontuacao = 0;
var life = 5;
document.getElementById("pontuacao").innerHTML= pontuacao;
document.getElementById("vidas").innerHTML= life;
var countNumber = setInterval(numeros, 2500);

//@Funções

//Função para descer numeros 
function numeros(){

    if(life == 0){clearInterval(intervalo);}
    var id = Math.floor((Math.random() * 9) + 0);
    var elem = document.getElementById(id);
    var posHorizontal = Math.floor((Math.random() * 10) + 0)*10; 
    var pos = 0;
    elem.style.left = posHorizontal+"%";
    var countFrame = setInterval(frame, 4);
    function frame() {
        if (lineCollide() == false) {
            clearInterval(countFrame);
            elem.style.top = "-90px";
            
            if (isCollide() == false) {
                if(id % 2 == 0){
                    pontuacao++;
                }
                else{
                    life--
                }
            }
            else{
                if(id % 2 == 0) life--;
            }
        } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        }
        document.getElementById("pontuacao").innerHTML= pontuacao;
        document.getElementById("vidas").innerHTML= life;

        if(life == 0){
            clearInterval(countNumber);
            $("#gameover").css("display", "block");
            document.getElementById("gameOverPonts").innerHTML= "Sua pontuação foi: "+pontuacao;
        }
    }
    //Função de verificação de colisão 
    function isCollide() {
        var aOfssets = $('#cesta').offset();
        var bOfssets = $('#'+id).offset();
        
        return (
            ((aOfssets.left + $('#cesta').width()) < bOfssets.left) ||
            (aOfssets.left > (bOfssets.left + $('#'+id).width()))
        );
    }
    
    //Função de verificação de colisão 
    function lineCollide() {
        var aOfssets = $('#linhaColisão').offset();
        var bOfssets = $('#'+id).offset();
        
        return (
            ((aOfssets.top + $('#linhaColisão').height()) < bOfssets.top) ||
            (aOfssets.top > (bOfssets.top + $('#'+id).height()))
        );
    }   

}
    
