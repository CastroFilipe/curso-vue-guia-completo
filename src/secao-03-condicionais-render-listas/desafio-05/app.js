new Vue({
	el: '#desafio',
	data: {
		alternador: false,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		games: [
			{nome: 'Super Mario Bros', ano: '1985', produtora: 'Nintendo'},
			{nome: 'Top Gear', ano: '1992', produtora: 'Gremlin Graphics'},
			{nome: 'Grand Theft Auto: San Andreas', ano: '1985', produtora: 'Rockstar Games'},
			{nome: 'counter strike', ano: '1999', produtora: 'Valve'},
		]
	}
});
