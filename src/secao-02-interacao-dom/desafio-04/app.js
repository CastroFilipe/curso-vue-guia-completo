new Vue({
	el: '#desafio',
	data: {
		classeEfeito: 'destaque',
		classeDigitada: 'c1',
		classeInformada: 'c1',
		boleano: true,

		cor5: '',
		estilo5: {
			width: '130px',
			height: '130px'
		},

		progresso : 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classeEfeito = this.classeEfeito == 'destaque' ? 'encolher' : 'destaque'
				console.log(this.classeEfeito)
			}, 1000)
		},
		iniciarProgresso() {
			setInterval(() => {
				this.progresso++
				if(this.progresso >= 100){
					this.progresso = 0
				}
			},100)
		},
		verificarTrueFalse(event){
			console.log(event.target.value)
			if(event.target.value == 'true'){
				this.boleano = true
			} else if(event.target.value == 'false'){
				this.boleano = false
			}
		}
	}
})
