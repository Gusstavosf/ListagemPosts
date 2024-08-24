function deletar(idRecebido){
    const carrosAtuaisNaMemoria = JSON.parse(localStorage.getItem('carros'))
    const carrosFiltrados = carrosAtuaisNaMemoria.filter((item) => item.id !== idRecebido)
    
    localStorage.setItem('carros', JSON.stringify(carrosFiltrados))
    console.log(carrosFiltrados)

    document.getElementById('lista-carros').innerText = ''
    carregarDados()
}

function carregarDados() {

    const carros = JSON.parse(localStorage.getItem("carros"))

    carros.forEach((carro) => {

        const tr = document.createElement('tr')

        const nomeCarroId = document.createElement('td')
        nomeCarroId.innerText = carro.nome
        tr.append(nomeCarroId)

        const placaCarroId= document.createElement('td')
        placaCarroId.innerText = carro.placa
        tr.append(placaCarroId)

        const tipoCarroTd = document.createElement('td')
        tipoCarroTd.innerText = carro.tipo
        tr.append(tipoCarroTd)

        const fabricanteCarroTd = document.createElement('td')
        fabricanteCarroTd.innerText = carro.fabricante
        tr.append(fabricanteCarroTd)

        const modeloCarroTd = document.createElement('td')
        modeloCarroTd.innerText = carro.modelo
        tr.append(modeloCarroTd)

        const fotoCarroTd = document.createElement('td')
        const img = document.createElement('img');
        img.src = carro.foto; // URL da foto
        img.alt = 'Foto do carro'; // texto alternativo para acessibilidade
        img.style.width = '150px'; // dfine a largura da imagem (opcional)
        img.style.height = 'auto'; // mantém a proporção da altura da imagem 
        fotoCarroTd.append(img);
        tr.append(fotoCarroTd);

        const acaoCarroTd = document.createElement('td');
        const botaoDeletar = document.createElement('button');
        botaoDeletar.innerText = 'Deletar';
        botaoDeletar.className = 'button-submit'
        botaoDeletar.onclick = () => deletar(carro.id); // Passa o ID do carro para a função deletar
        acaoCarroTd.append(botaoDeletar);
        tr.append(acaoCarroTd);
        
        document.getElementById('dados-tabela').append(tr)

    })
}

document.addEventListener('DOMContentLoaded', carregarDados)

function mudaTela(){
    window.location.replace("/index.html")
}
   
