const display = document.getElementById('display');

document.querySelectorAll('.botao').forEach(botao => {
    botao.addEventListener("click", escreveNaTela);
});

window.addEventListener('keydown', escreve);

function escreve(e) {
    
    e.preventDefault(); // previne que algumas coisas indesejadas aconteçam, como dar zoom-in quando se aperta a tecla +
    
    const tecla = e.key;
    const elemento = document.querySelector(`div[data-btn="${tecla}"]`);

    
    if (!elemento && tecla != 'Backspace') return;
    
    if (tecla == 'Backspace')
        display.innerHTML = apagaCaracter();

    else if (elemento.id == 'clear')
        limpaTela();

    else if(elemento.id == 'opeq')
        retornaResultado();

    else if (elemento.id == 'PM')
        inverteSinal();

    else if (elemento.id == 'perc')
        retornaPercentual();

    else
        display.innerHTML += elemento.innerHTML;
}

function apagaCaracter() {
    const displayAtual = display.innerHTML;
    return displayAtual.slice(0, -1);
}

function escreveNaTela(e) {

    if(e.target.id == 'opeq')
        retornaResultado();

    else if (e.target.id == 'clear')
        limpaTela();

    else if (e.target.id == 'PM')
        inverteSinal();

    else if (e.target.id == 'perc')
        retornaPercentual();

    else if (e.type != 'keydown')
        display.innerHTML += e.target.innerHTML;

}

function inverteSinal() {

    let novaExp = '-';
    const expressao = display.innerHTML.split('');
    expressao.unshift('(');
    expressao.push(')');
    expressao.forEach(e => novaExp+= e);
    display.innerHTML = eval(novaExp);
}

function limpaTela() {
    display.innerHTML = '';
}

function retornaResultado() {
    display.innerHTML = eval(display.innerHTML);
}

function retornaPercentual() {
    const resultado = eval(display.innerHTML)/100;
    if (isNaN(resultado))
        display.innerHTML = ''
    else
        display.innerHTML = resultado;
}