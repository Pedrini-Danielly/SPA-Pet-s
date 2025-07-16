 // Inicializar EmailJS
      emailjs.init('A8X0s44lk1IikjrlX');

      // Função para gerar imagem aleatória de gato
      function gerarImagemGato() {
        const timestamp = Date.now();
        return `https://cataas.com/cat?width=400&height=400&${timestamp}`;
      }

      // Função para gerar imagem aleatória de cachorro
      function gerarImagemCachorro() {
        return 'https://dog.ceo/api/breeds/image/random';
      }

      // Carregar imagem de gato
      const gatoPhoto = document.getElementById('gato-photo');
      if (gatoPhoto) {
        gatoPhoto.src = gerarImagemGato();
      }

      // Carregar imagem de cachorro
      const cachorroPhoto = document.getElementById('cachorro-photo');
      if (cachorroPhoto) {
        fetch(gerarImagemCachorro())
          .then(res => res.json())
          .then(data => {
            cachorroPhoto.src = data.message;
          })
          .catch(() => {
            cachorroPhoto.src = 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop';
          });
      }

      // Curiosidades sobre gatos em português
      function carregarCuriosidadeGato() {
        const curiosidadesGatos = [
          "Gatos passam 70% do dia dormindo, cerca de 13 a 16 horas por dia!",
          "Os gatos têm 32 músculos controlando cada orelha, permitindo movimentos precisos.",
          "Um gato pode fazer mais de 100 sons vocais diferentes, enquanto cães fazem apenas 10.",
          "Os gatos podem ver até 6 vezes melhor que os humanos no escuro.",
          "O ronronar dos gatos tem frequências entre 20-50 Hz que podem ajudar a curar ossos.",
          "Gatos têm um terceiro olho chamado de membrana nictitante para proteção.",
          "Os bigodes dos gatos são exatamente do mesmo tamanho que a largura do seu corpo.",
          "Gatos podem correr até 48 km/h em rajadas curtas de velocidade.",
          "O coração de um gato bate quase duas vezes mais rápido que o de um humano.",
          "Gatos têm uma memória 200 vezes melhor que a dos cães.",
          "O olfato dos gatos é 14 vezes mais forte que o dos humanos.",
          "Gatos podem saltar até 6 vezes a sua altura corporal.",
          "Os gatos suam apenas pelas patas, não têm glândulas sudoríparas no corpo.",
          "Gatos podem detectar terremotos 10-15 minutos antes dos humanos.",
          "O cérebro de um gato é 90% similar ao cérebro humano.",
          "Gatos podem girar suas orelhas 180 graus para localizar sons.",
          "A língua dos gatos tem pequenos ganchos que ajudam na limpeza e alimentação.",
          "Gatos podem ver algumas cores, mas não tantas quanto os humanos.",
          "O tempo de gestação de uma gata é de aproximadamente 64-67 dias.",
          "Gatos podem viver em média 15-20 anos se bem cuidados."
        ];
        
        const curiosidadeAleatoria = curiosidadesGatos[Math.floor(Math.random() * curiosidadesGatos.length)];
        const elemento = document.getElementById('curiosidade-gato');
        if (elemento) {
          elemento.textContent = curiosidadeAleatoria;
        }
      }

      // Curiosidades sobre cachorros em português
      function carregarCuriosidadeCachorro() {
        const curiosidadesCachorro = [
          "Os cães têm um olfato até 100.000 vezes mais apurado que o dos humanos.",
          "Cães suam principalmente pelas patas e regulam temperatura pela língua.",
          "Eles podem entender até 250 palavras e gestos humanos diferentes.",
          "O focinho de cada cachorro é único, como nossa impressão digital.",
          "Cães podem detectar doenças como câncer e diabetes pelo cheiro.",
          "A audição dos cães é 4 vezes mais sensível que a dos humanos.",
          "Cães sonham de forma similar aos humanos durante o sono REM.",
          "Cachorros podem aprender a rotina diária de seus donos e antecipar eventos.",
          "O coração de um cão grande bate 60-100 vezes por minuto.",
          "Cães podem ver cores, mas principalmente azul e amarelo.",
          "Cachorros têm cerca de 300 milhões de receptores olfativos.",
          "Um cão pode correr até 45 km/h dependendo da raça.",
          "Cães podem detectar mudanças na pressão barométrica.",
          "O tempo de gestação de uma cadela é de aproximadamente 63 dias.",
          "Cachorros podem viver entre 8-15 anos dependendo da raça e cuidados.",
          "Cães têm 42 dentes permanentes quando adultos.",
          "O olfato é o sentido mais desenvolvido nos cachorros.",
          "Cães podem sentir o medo e ansiedade dos humanos pelo cheiro.",
          "Cachorros conseguem aprender até 1000 palavras se treinados.",
          "A temperatura corporal normal dos cães é entre 38-39°C."
        ];
        
        const curiosidadeAleatoria = curiosidadesCachorro[Math.floor(Math.random() * curiosidadesCachorro.length)];
        const elemento = document.getElementById('curiosidade-cachorro');
        if (elemento) {
          elemento.textContent = curiosidadeAleatoria;
        }
      }

      // Carregar todas as curiosidades
      carregarCuriosidadeGato();
      carregarCuriosidadeCachorro();

      // Atualizar curiosidades a cada 30 segundos
      setInterval(() => {
        carregarCuriosidadeGato();
        carregarCuriosidadeCachorro();
      }, 30000);

      // Mostrar opções de tosa
      const servico = document.getElementById('servico');
      const opcoesTosa = document.getElementById('opcoes-tosa');
      const horarioSelect = document.getElementById('horario');

      function gerarHorarios(tipo) {
        if (!horarioSelect) return;
        
        horarioSelect.innerHTML = '';
        let inicio = 8, fim = 17, intervalo = 30;

        if (tipo === 'tosa_completa') intervalo = 60;
        if (tipo === 'tosa_tesoura') intervalo = 120;

        for (let h = inicio; h < fim; h++) {
          for (let m = 0; m < 60; m += intervalo) {
            const hora = h.toString().padStart(2, '0') + ':' + m.toString().padStart(2, '0');
            const opt = document.createElement('option');
            opt.value = hora;
            opt.textContent = hora;
            horarioSelect.appendChild(opt);
          }
        }

        if (opcoesTosa) {
          opcoesTosa.style.display = (tipo === 'tosa_completa') ? 'block' : 'none';
        }
      }

      if (servico) {
        servico.addEventListener('change', () => gerarHorarios(servico.value));
        gerarHorarios(servico.value);
      }

      // Mostrar endereço se marcar táxi
      const taxiDog = document.getElementById('taxiDog');
      const endereco = document.getElementById('endereco');

      if (taxiDog && endereco) {
        taxiDog.addEventListener('change', () => {
          endereco.style.display = taxiDog.checked ? 'block' : 'none';
        });
      }

      // Função para enviar email
      function enviarEmail(dados) {
        if (typeof emailjs === 'undefined') {
          console.error('EmailJS não está carregado!');
          alert('Erro: EmailJS não foi carregado. Verifique sua conexão com a internet.');
          return;
        }

        console.log('Dados para envio:', dados);
        
        const templateParams = {
          to_email: 'pedrinidanielly94@gmail.com',
          tutor: dados.tutor,
          pet: dados.pet,
          telefone: dados.telefone,
          servico: dados.servico,
          data: dados.dataFormatada,
          horario: dados.horario,
          rostinho: dados.rostinho,
          rabo: dados.rabo,
          taxi: dados.taxi,
          endereco: dados.endereco,
          sent_date: new Date().toLocaleString('pt-BR')
        };

        if (!templateParams.tutor || !templateParams.pet || !templateParams.telefone) {
          console.error('Dados obrigatórios faltando!');
          alert('Erro: Dados obrigatórios não foram preenchidos.');
          return;
        }

        const submitButton = document.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        emailjs.send('service_6sq9tqr', 'template_rrbz47r', templateParams)
          .then(function(response) {
            console.log('✅ Email enviado com sucesso!', response);
            alert('✅ Agendamento enviado por WhatsApp e email com sucesso!');
            
            submitButton.textContent = originalText;
            submitButton.disabled = false;
          })
          .catch(function(error) {
            console.error('❌ Erro ao enviar email:', error);
            alert('❌ Erro ao enviar email, mas WhatsApp foi enviado normalmente.');
            
            submitButton.textContent = originalText;
            submitButton.disabled = false;
          });
      }

      // Enviar WhatsApp e Email
      const formAgendamento = document.getElementById('form-agendamento');
      if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const form = new FormData(this);
          const dados = {
            tutor: form.get('tutor'),
            pet: form.get('pet'),
            telefone: form.get('telefone'),
            servico: form.get('servico').replace(/_/g, ' '),
            data: form.get('data'),
            horario: form.get('horario'),
            rostinho: form.get('rostinho') ? 'Sim' : 'Não',
            rabo: form.get('rabo') ? 'Sim' : 'Não',
            taxi: taxiDog && taxiDog.checked ? 'Sim' : 'Não',
            endereco: form.get('endereco') || 'Não informado'
          };

          if (!dados.tutor || !dados.pet || !dados.telefone || !dados.data || !dados.horario) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
          }

          const dataFormatada = new Date(dados.data).toLocaleDateString('pt-BR');
          const dadosFormatados = {
            ...dados,
            dataFormatada: dataFormatada
          };

          const msg = `🐾 Novo Agendamento - SPA Pet's 🐶

👤 Tutor: ${dados.tutor}
🐕 Pet: ${dados.pet}
📞 Telefone: ${dados.telefone}
🛁 Serviço: ${dados.servico}
📅 Data: ${dataFormatada}
⏰ Horário: ${dados.horario}
✂️ Rostinho: ${dados.rostinho}
✂️ Rabo: ${dados.rabo}
🚗 Táxi Dog: ${dados.taxi}
🏡 Endereço: ${dados.endereco}

Agendamento realizado através do site SPA Pet's`;

          const url = `https://wa.me/5515991563363?text=${encodeURIComponent(msg)}`;
          window.open(url, '_blank');

          enviarEmail(dadosFormatados);
          
          this.reset();
          if (opcoesTosa) opcoesTosa.style.display = 'none';
          if (endereco) endereco.style.display = 'none';
        });
      }