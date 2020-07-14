new Vue({
    el: '#desafio',
    data: {
        nome: 'Filipe',
        idade: 28,
        linkImagem: 'https://www.ibm.com/design/language/a41bb6fc86bf12f915d28f4c34f33d74/8bar.svg'
    },
    methods: {
        multiplicarIdade(){
            return this.idade * 3
        },
        sortearNumero(){
            return Math.random()
        }
    }
})