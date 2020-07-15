new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('O botão foi acionado')
        },
        armazenar(event){
            this.valor = event.target.value
        }
    }
})