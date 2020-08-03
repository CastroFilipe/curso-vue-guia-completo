const cores = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    seciton: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#CCCF5C',
    nav: '#5CCF88',
    main: '#0B0F63',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    
    getCorTag(nomeTag) {
        return this[nomeTag] ? this[nomeTag] : this.padrao
    }

}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLocaleLowerCase()
    console.log(tagName)

    elemento.style.borderColor = cores.getCorTag(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')

        label.style.backgroundColor = cores.getCorTag(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})