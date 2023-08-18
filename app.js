'use strict'

const botaoSomar=document.getElementById('somar')
const botaoIdentificar=document.getElementById('identificar')
const botaoParOuImpar=document.getElementById('botao-j')
const botaoDiferenca=document.getElementById('botao-a')
const botaoSomaCem=document.getElementById('botao-n')
const botaoNotas=document.getElementById('botao-d')

function somar(){
      const numero1=Number(document.getElementById('numero1').value)
      const numero2=Number(document.getElementById('numero2').value)
      const resultado=document.getElementById('resultado')

      const total=numero1+numero2
      resultado.textContent=total
}

function identificar(){
    const numero=Number(document.getElementById('numero-item2').value)
    const resultado=document.getElementById('resultado-item2')
    if (numero>0){
        resultado.textContent='POSITIVO'
    }else if(numero<0){
        resultado.textContent='NEGATIVO'
    }else{
        resultado.textContent='ZERO'
    }
}

function parOuImpar(){
    const valor=Number(document.getElementById('numero-j').value)
    const resultado=document.getElementById('resultado-j')
    if(valor%2==0){
        resultado.textContent='PAR'
    }else{
        resultado.textContent='ÍMPAR'
    }
}

function diferenca(){
    const valor1=Number(document.getElementById('numero-a1').value)
    const valor2=Number(document.getElementById('numero-a2').value)
    const resultado=document.getElementById('resultado-a')
    if(valor1>valor2){
        const diferenca=valor1-valor2
        resultado.textContent=diferenca
    }else{
        const diferenca=valor2-valor1
        resultado.textContent=diferenca
    }
}

function somaCem(){
    const valor1=Number(document.getElementById('numero-n1').value)
    const valor2=Number(document.getElementById('numero-n2').value)
    const valor3=Number(document.getElementById('numero-n3').value)
    const resultado=document.getElementById('resultado-n')
    if(valor1+valor2+valor3>=100){
        const soma=valor1+valor2+valor3
        resultado.textContent=soma
    }else{
        alert("RESULTADO ABAIXO DE 100!")
    }
}

function notas(){
    const valor1=Number(document.getElementById('numero-d1').value)
    const valor2=Number(document.getElementById('numero-d2').value)
    const valor3=Number(document.getElementById('numero-d3').value)
    const valor4=Number(document.getElementById('numero-d4').value)
    const resultado=document.getElementById('resultado-d')
    const media=(Number(valor1)+Number(valor2)+Number(valor3)+Number(valor4))/4
    if(media>=7){
        alert("APROVADO! MÉDIA: "+media)
        resultado.textContent=media
    }else{
        const valor5=prompt("MÉDIA INSUFICIENTE: "+media+". INSIRA SUA NOTA DE EXAME.")
        const media2=(media+Number(valor5))/2
        if(media2>=5){
            alert("APROVADO EM EXAME! MÉDIA: "+media2)
            resultado.textContent=media2
        }else{
            alert("REPROVADO! MÉDIA: "+media2)
            resultado.textContent=media2
        }
    }
}

botaoSomar.addEventListener('click',somar)
botaoIdentificar.addEventListener('click',identificar)
botaoParOuImpar.addEventListener('click',parOuImpar)
botaoDiferenca.addEventListener('click',diferenca)
botaoSomaCem.addEventListener('click',somaCem)
botaoNotas.addEventListener('click',notas)