function adicionarCarro(event) {


    /* ======= Capturou os valores do formulario  ======= */

    event.preventDefault() // evita da tela recarregar :)

    const nome = document.getElementById('nome').value
    const placa = document.getElementById('placa').value
    const tipo = document.getElementById('tipo').value
    const fabricante = document.getElementById('fabricante').value
    const modelo = document.getElementById('modelo').value
    const foto = document.getElementById('foto').value

    /* ======= VALIDACAO DO FORMULARIO  ======= */

    if (nome === "") {
        // alert("Nome é obrigatório") Mostra um aviso no navegaor
        document.getElementById('nome').style.borderColor = "red"
        document.getElementById('nome').style.borderWidth = "2px"
        document.getElementById('error-nome').innerText = "Nome é obrigatório"
    } else {
        document.getElementById('nome').style.borderColor = ""
        document.getElementById('nome').style.borderWidth = ""
        document.getElementById('error-nome').innerText = ""
    }

    if (placa === "") {
        document.getElementById('placa').style.borderColor = "red"
        document.getElementById('placa').style.borderWidth = "2px"
        document.getElementById('error-placa').innerText = "Placa é obrigatório"
    } else {
        document.getElementById('placa').style.borderColor = ""
        document.getElementById('placa').style.borderWidth = ""
        document.getElementById('error-placa').innerText = ""
    }

    if (tipo === "") {
        document.getElementById('tipo').style.borderColor = "red"
        document.getElementById('tipo').style.borderWidth = "2px"
        document.getElementById('error-tipo').innerText = "Tipo é obrigatório"
    } else {
        document.getElementById('tipo').style.borderColor = ""
        document.getElementById('tipo').style.borderWidth = ""
        document.getElementById('error-tipo').innerText = ""
    }

    if (fabricante === "") {
        document.getElementById('fabricante').style.borderColor = "red"
        document.getElementById('fabricante').style.borderWidth = "2px"
        document.getElementById('error-fabricante').innerText = "Fabricante é obrigatório"
    } else {
        document.getElementById('fabricante').style.borderColor = ""
        document.getElementById('fabricante').style.borderWidth = ""
        document.getElementById('error-fabricante').innerText = ""
    }

    if (modelo === "") {
        document.getElementById('modelo').style.borderColor = "red"
        document.getElementById('modelo').style.borderWidth = "2px"
        document.getElementById('error-modelo').innerText = "Modelo é obrigatório"
    } else {
        document.getElementById('modelo').style.borderColor = ""
        document.getElementById('modelo').style.borderWidth = ""
        document.getElementById('error-modelo').innerText = ""
    }

    if (foto === "") {
        document.getElementById('foto').style.borderColor = "red"
        document.getElementById('foto').style.borderWidth = "2px"
        document.getElementById('error-foto').innerText = "Imagem do veículo é obrigatório"
    } else {
        document.getElementById('foto').style.borderColor = ""
        document.getElementById('foto').style.borderWidth = ""
        document.getElementById('error-foto').innerText = ""
    }


    if (nome && placa && tipo && fabricante && modelo && foto) {
        const carro = {
            // id: Math.random() Opcão 1 para gerar um número aleatório,
            // id: crypto.randomUUID() Opção 2 para gerar um número aleatório,
            id: Date.now(),
            nome: nome,
            placa:placa,
            tipo: tipo, 
            fabricante: fabricante,
            modelo: modelo,
            tipo: tipo,
            foto: foto,
            // criado: new Date().toLocaleDateString()
        }

        let listaNoLocalStorage = JSON.parse(localStorage.getItem("carros"))    // vai no local storage e pega a lista

        if (listaNoLocalStorage === null) listaNoLocalStorage = []

        listaNoLocalStorage.push(carro)

        localStorage.setItem("carros", JSON.stringify(listaNoLocalStorage)) // salvar no local storage

        document.getElementById('form-carro').reset()

    }
    
}

document // seu documento HTML
    .getElementById('form-carro') // ir no documento e localizar o elemento com id form-carro
    .addEventListener('submit', adicionarCarro) // adicionar um evento de submissão vinculado a funcao adicionar pet


document.getElementById("foto").addEventListener("input", function (event) {
    // event.target.value
    document.getElementById('visualizacao-url').setAttribute('src', this.value)
})
