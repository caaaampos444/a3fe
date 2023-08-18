'use strict'

const botaoSomar=document.getElementById('somar')
const botaoIdentificar=document.getElementById('identificar')
const botaoParOuImpar=document.getElementById('botao-j')
const botaoDiferenca=document.getElementById('botao-a')

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

botaoSomar.addEventListener('click',somar)
botaoIdentificar.addEventListener('click',identificar)
botaoParOuImpar.addEventListener('click',parOuImpar)