async function CarregarFornecedores() {
    try{
        const resposta = await fetch("https://localhost:7135/api/Fornecedores")
        const fornecedores = await resposta.json()

        console.log(fornecedores)
    } catch (error){
        console.error("Erro ao carregar fornecedores", error)
    }
}

CarregarFornecedores()