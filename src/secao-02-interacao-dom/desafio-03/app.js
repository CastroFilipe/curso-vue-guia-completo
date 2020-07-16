new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor == 37 ? 'valor igual a 37' : 'valor diferente de 37'
        }
    },
    watch: {
        resultado(){
            setTimeout(()=>{
                this.valor = 0;
                console.log("valor reiniciado 5 segundos depois da mudança.")
            },5000)
        }
    }
});