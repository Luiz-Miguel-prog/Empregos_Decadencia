// Função para mostrar o pop-up com o conteúdo correspondente
function showPopup(emprego) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    // Definir o conteúdo de acordo com o balão clicado
    switch (emprego) {
        case 'Extinção':
            popupText.textContent = 'A extinção de empregos ocorre quando a demanda por determinada profissão diminui drasticamente devido a avanços tecnológicos ou mudanças no mercado.';
            break;
        case 'Emprego 1':
            popupText.textContent = 'Uma pesquisa realizada em 2022 pelo IBGE (Instituto Brasileiro de Geografia e Estatística), parte da Pesquisa Nacional por Amostra de Domicílios (PNAD) Contínua, revelou que 704 mil motoristas de aplicativos representavam 47,2% do total de trabalhadores no setor de transporte individual, enquanto 589 mil motoboys de delivery correspondiam a 39,5% e 207 mil taxistas somavam 13,9%.';
            break;
        case 'Emprego 2':
            popupText.textContent = 'Nos últimos 5 anos, cerca de 40% dos carteiros que permaneceram no mercado se adaptaram a novas funções, como logística e atendimento ao cliente. Muitos migraram para áreas ligadas ao comércio eletrônico, como entrega expressa, compensando a queda nas entregas tradicionais de cartas. Essas mudanças ajudaram os profissionais a manterem-se relevantes no setor, com base em uma pesquisa interna dos Correios';
            break;
        case 'Emprego 3':
            popupText.textContent = 'A adoção de caixas automáticos e totens de autoatendimento tem aumentado, com um crescimento de 42% nos sistemas de autoatendimento instalados em supermercados entre 2022 e 2023, segundo dados da TOTVS. Isso reduz a demanda por caixas tradicionais e modifica o perfil das contratações no setor.';
            break;
        default:
            popupText.textContent = 'Informação não disponível.';
    }

    // Exibir o pop-up
    popup.style.display = 'flex';
}

// Função para fechar o pop-up
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
