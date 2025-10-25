
    const perguntas = [
      { texto: "Qual é o maior planeta do Sistema Solar?", opcoes: ["Terra", "Marte", "Júpiter", "Saturno"], correta: 2 },
      { texto: "Quem escreveu 'Dom Casmurro'?", opcoes: ["José de Alencar", "Machado de Assis", "Carlos Drummond", "Monteiro Lobato"], correta: 1 },
      { texto: "Em que ano o Brasil foi descoberto?", opcoes: ["1492", "1500", "1822", "1889"], correta: 1 },
      { texto: "Qual o símbolo químico da água?", opcoes: ["O2", "H2O", "CO2", "HO2"], correta: 1 },
      { texto: "Quantos estados tem o Brasil?", opcoes: ["25", "26", "27", "28"], correta: 2 },
      { texto: "Quem foi o primeiro presidente do Brasil?", opcoes: ["Getúlio Vargas", "Deodoro da Fonseca", "Dom Pedro II", "Juscelino Kubitschek"], correta: 1 },
      { texto: "Qual é o idioma oficial da Suíça?", opcoes: ["Alemão", "Francês", "Italiano", "Todas as anteriores"], correta: 3 },
      { texto: "Qual é o continente mais populoso do mundo?", opcoes: ["África", "América", "Ásia", "Europa"], correta: 2 },
      { texto: "Qual o resultado de 9 x 8?", opcoes: ["72", "81", "64", "70"], correta: 0 },
      { texto: "Em que estado está o Cristo Redentor?", opcoes: ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Bahia"], correta: 2 },
      { texto: "Quem pintou a Mona Lisa?", opcoes: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Rafael"], correta: 1 },
      { texto: "Qual é a fórmula da glicose?", opcoes: ["C6H12O6", "CO2", "H2O", "CH4"], correta: 0 },
      { texto: "Qual é a capital do Canadá?", opcoes: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correta: 2 },
      { texto: "Qual país tem formato de bota?", opcoes: ["França", "Itália", "Portugal", "Espanha"], correta: 1 },
      { texto: "Em que continente está o Egito?", opcoes: ["África", "Ásia", "Europa", "Oceania"], correta: 0 },
      { texto: "Qual é o menor país do mundo?", opcoes: ["Mônaco", "Vaticano", "San Marino", "Andorra"], correta: 1 },
      { texto: "Quem descobriu a penicilina?", opcoes: ["Einstein", "Newton", "Fleming", "Darwin"], correta: 2 },
      { texto: "Qual é a capital da Argentina?", opcoes: ["Montevidéu", "Buenos Aires", "Santiago", "Assunção"], correta: 1 },
      { texto: "Quem foi o autor de 'Os Lusíadas'?", opcoes: ["Fernando Pessoa", "Camões", "Eça de Queirós", "Saramago"], correta: 1 },
      { texto: "Qual é o maior oceano da Terra?", opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"], correta: 2 },
      { texto: "Quanto é a metade de 3/4?", opcoes: ["3/8", "3/2", "1/4", "2/3"], correta: 0 },
      { texto: "Qual é o gás mais abundante na atmosfera?", opcoes: ["Oxigênio", "Nitrogênio", "Carbono", "Hidrogênio"], correta: 1 },
      { texto: "Quem proclamou a República no Brasil?", opcoes: ["Deodoro da Fonseca", "Tiradentes", "Dom Pedro II", "Getúlio Vargas"], correta: 0 },
      { texto: "Qual o plural de 'pão'?", opcoes: ["pãos", "pães", "pãeses", "pãoses"], correta: 1 },
      { texto: "Quantos lados tem um hexágono?", opcoes: ["5", "6", "7", "8"], correta: 1 },
      { texto: "O que é fotossíntese?", opcoes: ["Respiração das plantas", "Produção de energia pela luz", "Evaporação da água", "Crescimento das raízes"], correta: 1 },
      { texto: "Quem compôs o Hino Nacional Brasileiro?", opcoes: ["Villa-Lobos", "Carlos Gomes", "Francisco Manuel da Silva", "Tom Jobim"], correta: 2 },
      { texto: "Qual é o número atômico do oxigênio?", opcoes: ["6", "7", "8", "9"], correta: 2 },
      { texto: "Quantos segundos há em uma hora?", opcoes: ["360", "3600", "60", "600"], correta: 1 },
      { texto: "Qual é o planeta mais próximo do Sol?", opcoes: ["Vênus", "Terra", "Mercúrio", "Marte"], correta: 2 },
      { texto: "Em que ano foi proclamada a Independência do Brasil?", opcoes: ["1822", "1889", "1500", "1808"], correta: 0 },
      { texto: "Quem foi o criador da teoria da relatividade?", opcoes: ["Newton", "Einstein", "Galileu", "Planck"], correta: 1 },
      { texto: "O que significa 'ONU'?", opcoes: ["Organização das Nações Unidas", "Ordem Nacional Unida", "Ofício de Nações Unidas", "Organização Nova União"], correta: 0 },
      { texto: "Qual é o maior bioma do Brasil?", opcoes: ["Mata Atlântica", "Cerrado", "Amazônia", "Caatinga"], correta: 2 },
      { texto: "Qual é o instrumento que mede a temperatura?", opcoes: ["Barômetro", "Termômetro", "Higrômetro", "Altímetro"], correta: 1 },
      { texto: "Quem escreveu 'O Pequeno Príncipe'?", opcoes: ["Saint-Exupéry", "Victor Hugo", "Jules Verne", "Balzac"], correta: 0 },
      { texto: "O que é um triângulo equilátero?", opcoes: ["3 lados diferentes", "2 lados iguais", "3 lados iguais", "Sem lados iguais"], correta: 2 },
      { texto: "Qual é o principal gás do efeito estufa?", opcoes: ["CO2", "O2", "H2", "N2"], correta: 0 },
      { texto: "Quem descobriu o Brasil?", opcoes: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Pero Vaz de Caminha"], correta: 0 },
      { texto: "O que é um verbo?", opcoes: ["Palavra que indica ação", "Palavra que nomeia", "Palavra que descreve", "Palavra que liga"], correta: 0 },
      { texto: "Qual é o maior rio do mundo?", opcoes: ["Nilo", "Amazonas", "Yangtzé", "Mississipi"], correta: 1 },
      { texto: "Qual a capital da França?", opcoes: ["Londres", "Roma", "Paris", "Berlim"], correta: 2 },
      { texto: "Qual é a montanha mais alta do mundo?", opcoes: ["Everest", "Aconcágua", "Kilimanjaro", "Andes"], correta: 0 },
      { texto: "Quantas sílabas tem a palavra 'ENEM'?", opcoes: ["1", "2", "3", "4"], correta: 1 },
      { texto: "Quem foi Tiradentes?", opcoes: ["Líder da Inconfidência Mineira", "Imperador", "Presidente", "Rei"], correta: 0 },
      { texto: "Qual a moeda oficial do Japão?", opcoes: ["Yuan", "Iene", "Won", "Dólar"], correta: 1 }, { texto: "Qual é o elemento químico representado por Fe?", opcoes: ["Ferro", "Flúor", "Fósforo", "Frâncio"], correta: 0 }, { texto: "Quantos dias há em um ano bissexto?", opcoes: ["365", "366", "364", "367"], correta: 1 }, { texto: "Qual é o continente do Brasil?", opcoes: ["Europa", "África", "América do Sul", "Ásia"], correta: 2 }, { texto: "Quem inventou a lâmpada elétrica?", opcoes: ["Tesla", "Edison", "Bell", "Newton"], correta: 1 }, { texto: "Qual o plural de 'fácil'?", opcoes: ["fácils", "fáceis", "facis", "fácies"], correta: 1 }, { texto: "Quem escreveu 'Memórias Póstumas de Brás Cubas'?", opcoes: ["Machado de Assis", "Alencar", "Drummond", "Clarice Lispector"], correta: 0 }, { texto: "Qual é o maior deserto do mundo?", opcoes: ["Saara", "Kalahari", "Atacama", "Gobi"], correta: 0 }, { texto: "Quem foi Napoleão Bonaparte?", opcoes: ["Filósofo", "Imperador francês", "Rei inglês", "Papa"], correta: 1 }, { texto: "Qual é o resultado de 12 ÷ 3?", opcoes: ["3", "4", "5", "6"], correta: 1 }, { texto: "Qual é a capital de Minas Gerais?", opcoes: ["Ouro Preto", "Belo Horizonte", "Juiz de Fora", "Uberlândia"], correta: 1 }, { texto: "Em que ano terminou a Segunda Guerra Mundial?", opcoes: ["1939", "1945", "1950", "1942"], correta: 1 }, { texto: "Quem foi o primeiro homem a pisar na Lua?", opcoes: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], correta: 0 }, { texto: "Qual é o principal idioma falado no México?", opcoes: ["Português", "Espanhol", "Inglês", "Francês"], correta: 1 }, { texto: "O que é um substantivo?", opcoes: ["Nome de algo", "Ação", "Ligação", "Descrição"], correta: 0 }, { texto: "O que é um átomo?", opcoes: ["Partícula indivisível da matéria", "Molécula", "Íon", "Próton"], correta: 0 }, { texto: "Qual a capital do Chile?", opcoes: ["Lima", "Quito", "Santiago", "Assunção"], correta: 2 }, { texto: "Quem foi o autor de 'Vidas Secas'?", opcoes: ["Graciliano Ramos", "Jorge Amado", "José Lins", "Machado"], correta: 0 }, { texto: "Qual é a cor resultante da mistura de azul e amarelo?", opcoes: ["Verde", "Roxo", "Laranja", "Cinza"], correta: 0 }, { texto: "O que é ecossistema?", opcoes: ["Conjunto de seres vivos e ambiente", "Somente plantas", "Somente animais", "Somente rios"], correta: 0 }, { texto: "Quem foi o líder da Revolução Russa?", opcoes: ["Stálin", "Lênin", "Trotsky", "Hitler"], correta: 1 }, { texto: "O que é uma célula?", opcoes: ["Unidade básica da vida", "Órgão", "Tecidos", "Molécula"], correta: 0 }, { texto: "Qual é o maior mamífero do mundo?", opcoes: ["Elefante", "Baleia-azul", "Orca", "Rinoceronte"], correta: 1 }, { texto: "Quem compôs 'Garota de Ipanema'?", opcoes: ["Tom Jobim e Vinicius", "Caetano Veloso", "Chico Buarque", "Gilberto Gil"], correta: 0 }, { texto: "O que mede o barômetro?", opcoes: ["Temperatura", "Pressão atmosférica", "Umidade", "Velocidade"], correta: 1 }, { texto: "Qual é o sinônimo de 'feliz'?", opcoes: ["Triste", "Contente", "Abatido", "Cansado"], correta: 1 }, { texto: "O que é PIB?", opcoes: ["Produto Interno Bruto", "Plano Industrial Básico", "Preço Índice Base", "Plano Internacional de Bens"], correta: 0 }, { texto: "Quem descobriu a América?", opcoes: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Américo Vespúcio", "Vasco da Gama"], correta: 1 }, { texto: "Qual é o nome do hino do Brasil?", opcoes: ["Hino da Independência", "Hino Nacional Brasileiro", "Hino à Bandeira", "Hino da República"], correta: 1 }, { texto: "O que é um advérbio?", opcoes: ["Palavra que modifica o verbo", "Nome de coisa", "Ação", "Adjetivo"], correta: 0 }, { texto: "Qual é o metal líquido em temperatura ambiente?", opcoes: ["Mercúrio", "Ferro", "Ouro", "Prata"], correta: 0 }, { texto: "Qual é o continente da Austrália?", opcoes: ["América", "Europa", "Oceania", "África"], correta: 2 }, { texto: "Quem foi o fundador do cristianismo?", opcoes: ["Pedro", "Paulo", "Jesus Cristo", "João"], correta: 2 }, { texto: "Quantos ossos tem o corpo humano?", opcoes: ["206", "210", "208", "201"], correta: 0 }, { texto: "O que é energia cinética?", opcoes: ["Energia do movimento", "Energia guardada", "Energia térmica", "Energia elétrica"], correta: 0 }, { texto: "Qual é a principal função do coração?", opcoes: ["Bombear sangue", "Respirar", "Produzir hormônios", "Controlar músculos"], correta: 0 }, { texto: "Quem escreveu 'Capitães da Areia'?", opcoes: ["Graciliano Ramos", "Jorge Amado", "José Saramago", "Clarice Lispector"], correta: 1 }, { texto: "Qual é o maior órgão do corpo humano?", opcoes: ["Cérebro", "Pele", "Fígado", "Pulmão"], correta: 1 }, { texto: "Qual país sediou as Olimpíadas de 2016?", opcoes: ["China", "Brasil", "Japão", "Inglaterra"], correta: 1 }, { texto: "O que é uma metáfora?", opcoes: ["Comparação implícita", "Ironia", "Exagero", "Repetição"], correta: 0 }, { texto: "Qual é o resultado de 5²?", opcoes: ["10", "20", "25", "30"], correta: 2 }, { texto: "O que é democracia?", opcoes: ["Governo do povo", "Governo militar", "Monarquia", "Ditadura"], correta: 0 }, { texto: "Quem descobriu a eletricidade?", opcoes: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Newton"], correta: 0 }, { texto: "O que é biodiversidade?", opcoes: ["Variedade de vida", "Poluição", "Desmatamento", "Monocultura"], correta: 0 }, { texto: "Quem foi o primeiro homem no espaço?", opcoes: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"], correta: 0 }, { texto: "Qual é o continente onde fica o Brasil?", opcoes: ["América do Sul", "África", "Ásia", "Europa"], correta: 0 }, { texto: "Qual é o nome do processo de mudança de estado sólido para gasoso?", opcoes: ["Fusão", "Sublimação", "Evaporação", "Condensação"], correta: 1 }, { texto: "Qual o resultado de 7x7?", opcoes: ["42", "48", "49", "56"], correta: 2 }, { texto: "Quem foi o autor de 'A Hora da Estrela'?", opcoes: ["Clarice Lispector", "Cecília Meireles", "Lygia Fagundes Telles", "Rachel de Queiroz"], correta: 0 }
    ];

    let contador = 0;
    let acertos = 0;
    //let numeroDePerguntas = 100
    //numeroDePerguntas.document.getElementById("contadorPerguntas")

    function atualizarContador() {
      document.getElementById("contadorPerguntas").textContent = 
        `Pergunta ${contador + 1} de ${perguntas.length}`;
    }

    function mostrarPergunta() {
      const p = perguntas[contador];
      document.getElementById("pergunta").textContent = p.texto;

      const divOpcoes = document.getElementById("opcoes");
      divOpcoes.innerHTML = "";

      p.opcoes.forEach((opcao, i) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.onclick = () => verificarResposta(i);
        divOpcoes.appendChild(botao);
      });

      atualizarContador();
    }

    function verificarResposta(indice) {
      const p = perguntas[contador];
      const resultado = document.getElementById("resultado");

      if (indice === p.correta) {
        acertos++;
        resultado.textContent = "✅ Resposta certa!";
        resultado.style.color = "limegreen";
      } else {
        resultado.textContent = "❌ Resposta errada!";
        resultado.style.color = "red";

      }

      resultado.style.fontSize = "2em";

      setTimeout(() => {
        contador++;
        proximaPergunta();
      }, 1000);
    }

    function proximaPergunta() {
      const resultado = document.getElementById("resultado");
      resultado.textContent = "";

      if (contador < perguntas.length) {
        mostrarPergunta();
      } else {
        document.getElementById("pergunta").textContent = "🏁 Fim do quiz!";
        document.getElementById("opcoes").innerHTML = "";
        resultado.textContent = `Você acertou ${acertos} de ${perguntas.length}! 🎉`;
        resultado.style.color = "gold";
      }
    }

    //function tabelaDeAcertos {
      //  if(contador.length  100) {
//
  //      }
    //}

    mostrarPergunta();
