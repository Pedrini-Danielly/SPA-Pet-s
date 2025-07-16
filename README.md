# 🐾 SPA Pet's - Sistema de Agendamento Online

Um site moderno e responsivo para pet shop com sistema de agendamento integrado, desenvolvido com HTML5, CSS3 e JavaScript vanilla.

## 🎯 Visão Geral

O SPA Pet's é uma aplicação web completa que oferece uma experiência interativa para tutores de pets agendarem serviços de banho e tosa. O projeto combina design moderno com funcionalidades práticas, incluindo integração com WhatsApp e sistema de notificações por email.

## ✨ Funcionalidades

### 🎨 Interface e Design
- **Design Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Gradiente Animado**: Background com animação suave de gradiente CSS
- **Glassmorphism**: Efeito de vidro fosco nas seções principais
- **Animações CSS**: Transições suaves e efeitos hover interativos

### 📱 Funcionalidades Principais
- **Sistema de Agendamento**: Formulário completo com validação
- **Integração WhatsApp**: Redirecionamento automático para WhatsApp
- **Email Automático**: Notificações via EmailJS
- **Curiosidades Dinâmicas**: Fatos sobre gatos e cachorros atualizados automaticamente
- **Imagens Aleatórias**: API de gatos e cachorros para conteúdo dinâmico
- **Vídeo Promocional**: Apresentação em loop do estabelecimento

### 🛠️ Recursos Técnicos
- **Horários Dinâmicos**: Geração automática baseada no tipo de serviço
- **Opções Condicionais**: Campos que aparecem conforme seleção
- **Validação de Formulários**: Verificação client-side completa
- **APIs Externas**: Integração com serviços de imagens de pets

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Flexbox, Grid, Animações, Gradientes
- **JavaScript ES6+**: Manipulação DOM, Fetch API, Event Listeners

### APIs e Serviços
- **EmailJS**: Envio de emails sem backend
- **Cat as a Service**: Imagens aleatórias de gatos
- **Dog API**: Imagens aleatórias de cachorros
- **WhatsApp API**: Integração para mensagens diretas

### Recursos CSS Avançados
- **Keyframes**: Animações personalizadas
- **Backdrop-filter**: Efeitos de blur
- **CSS Grid & Flexbox**: Layout responsivo
- **CSS Variables**: Fácil manutenção de cores
- **Media Queries**: Responsividade completa

## 📁 Estrutura do Projeto

```
spa-pets/
├── index.html          # Estrutura principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica da aplicação
└── assets/
    ├── Groomer Danny.jpeg
    └── SPA Pet's.mp4
```

## 🎨 Destaques Visuais

### Design System
- **Paleta de Cores**: Gradientes vibrantes (#ff6b6b, #4ecdc4, #45b7d1, #96ceb4)
- **Typography**: Arial com hierarquia clara
- **Espaçamento**: Sistema consistente de padding e margin
- **Shadows**: Sombras suaves para profundidade

### Animações
- **Gradient Shift**: Animação de background infinita
- **Hover Effects**: Transformações suaves em elementos interativos
- **Focus States**: Feedback visual para acessibilidade

## 🔧 Funcionalidades Técnicas

### Sistema de Agendamento
```javascript
// Geração dinâmica de horários baseada no serviço
function gerarHorarios(tipo) {
    let intervalo = 30; // minutos
    if (tipo === 'tosa_completa') intervalo = 60;
    if (tipo === 'tosa_tesoura') intervalo = 120;
    // ... lógica de geração
}
```

### Integração com APIs
```javascript
// Carregamento dinâmico de conteúdo
async function carregarImagemCachorro() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
}
```

### Validação e UX
```javascript
// Validação em tempo real
formAgendamento.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validação completa antes do envio
    if (!dados.tutor || !dados.pet || !dados.telefone) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    // ... processamento
});
```

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 768px (Layout em duas colunas)
- **Tablet/Mobile**: ≤ 768px (Layout empilhado)

### Adaptações Mobile
- Reorganização de elementos em coluna única
- Ajuste de tamanhos de fonte e imagens
- Otimização de formulários para touch

## 🎯 Experiência do Usuário

### Fluxo Principal
1. **Visualização**: Usuário conhece o serviço e profissional
2. **Entretenimento**: Curiosidades e conteúdo dinâmico sobre pets
3. **Agendamento**: Formulário intuitivo e completo
4. **Confirmação**: Redirecionamento para WhatsApp + email automático

### Microinterações
- Loading states em botões
- Feedback visual para ações do usuário
- Animações sutis para melhor engajamento

## 🚀 Como Executar

1. **Clone ou baixe** os arquivos do projeto
2. **Abra** o arquivo `index.html` em um navegador
3. **Configure** as chaves do EmailJS (se necessário)
4. **Personalize** as informações do estabelecimento

## 📊 Métricas de Performance

- **Carregamento**: < 2 segundos
- **Responsividade**: 100% dos dispositivos
- **Acessibilidade**: Navegação por teclado e screen readers
- **Compatibilidade**: Todos os navegadores modernos

## 🎨 Showcase de Habilidades

Este projeto demonstra competências em:

- **Frontend Moderno**: HTML5, CSS3, JavaScript ES6+
- **Design Responsivo**: Mobile-first approach
- **UX/UI**: Interface intuitiva e atrativa
- **Integrações**: APIs REST e serviços externos
- **Performance**: Otimização e carregamento eficiente
- **Boas Práticas**: Código limpo e bem estruturado

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através dos canais disponíveis.

<div align="start">
  <a href="https://wa.me/5515991563363" target="_blank">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>
  <a href="https://www.linkedin.com/in/daniellypedrini/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="mailto:Daiellypedrini@outlook.com" target="_blank">
    <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="Outlook">
  </a>
</div>

*Desenvolvido com 💙 para demonstrar habilidades em desenvolvimento frontend e criação de experiências digitais envolventes.*
