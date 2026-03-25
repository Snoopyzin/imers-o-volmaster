# 🚀 Imersão Volmaster Tech - Landing Page

![Imersão Volmaster Tech](images/VOLMASTER%2001.png)

Landing page moderna e interativa para o evento **Imersão Volmaster Tech** - O maior evento de tecnologia automotiva e gestão de oficinas do Brasil.

## ✨ Características

### 🎯 Design Moderno
- Interface clean com partículas animadas em dourado
- Gradientes premium em azul escuro e dourado (#000814, #001529, #FFD700)
- Efeitos visuais impactantes com glow e animações suaves
- Layout totalmente responsivo para mobile, tablet e desktop

### 🎬 Animações Premium
- Títulos com efeito glitch de entrada
- Partículas interativas com linhas conectadas (particles.js)
- Tickets flutuantes com hover 3D
- Badges pulsantes e bounces nos CTAs
- Transições suaves em todos os elementos

### 📊 Funcionalidades
- ⏱️ Contador regressivo para o evento
- 🎟️ Imagens de tickets clicáveis com efeitos dramáticos
- 👥 Seção de palestrantes com cards interativos
- 📅 Programação completa do evento
- 🏆 Galeria de fotos de eventos anteriores
- ❓ FAQ interativo com accordion
- 🤝 Seção de patrocinadores
- 📧 Formulário de contato integrado

### 🚀 Otimizações
- SEO otimizado com meta tags completas
- Carregamento lazy de imagens
- CSS e JS minificados
- Performance otimizada para Core Web Vitals

## 📁 Estrutura do Projeto

```
landing-page-volmaster/
├── index.html              # Página principal do evento
├── ingressos-novo.html     # Página de compra de ingressos
├── css/
│   ├── style-new.css       # Estilos principais
│   └── ingressos-style.css # Estilos da página de ingressos
├── js/
│   └── script-new.js       # JavaScript principal + particles.js
├── images/                 # Imagens otimizadas do projeto
│   ├── VOLMASTER 01.png    # Logo principal
│   ├── trucks.jpg          # Background hero
│   ├── ticket evento.jpg   # Imagem do ticket
│   └── ...                 # Fotos de palestrantes e evento
└── .github/
    └── workflows/
        └── static.yml      # GitHub Pages deploy automation
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica otimizada
- **CSS3** - Animações, gradientes, flexbox e grid
- **JavaScript ES6+** - Funcionalidades interativas

### Bibliotecas
- [Particles.js](https://vincentgarreau.com/particles.js/) - Efeitos de partículas animadas
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
- [Google Fonts](https://fonts.google.com/) - Tipografia Inter

### Deploy
- **GitHub Pages** - Hospedagem automática
- **GitHub Actions** - CI/CD pipeline

## 🚀 Como Executar Localmente

### Opção 1: Abrir Diretamente
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/landing-page-volmaster.git

# Navegue até a pasta
cd landing-page-volmaster

# Abra o index.html no navegador
start index.html  # Windows
open index.html   # Mac
xdg-open index.html  # Linux
```

### Opção 2: Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (npx http-server)
npx http-server -p 8000

# Acesse: http://localhost:8000
```

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

### Como fazer deploy:
1. Faça push para a branch `main`
2. O GitHub Actions executará automaticamente
3. O site estará disponível em: `https://seu-usuario.github.io/landing-page-volmaster/`

### Configurar GitHub Pages:
1. Acesse: Repositório → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / folder: `root`
4. Save

## 📱 Responsividade

Totalmente otimizado para todos os dispositivos:
- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 1023px
- 💻 **Desktop**: 1024px+
- 🖥️ **Wide Screen**: 1920px+

## 🎨 Paleta de Cores

```css
--color-blue: #0047ab      /* Azul principal */
--color-yellow: #FFD700    /* Dourado/Amarelo */
--color-bg-dark: #000814   /* Fundo escuro */
--color-bg-darker: #001529 /* Fundo mais escuro */
--gradient-primary: linear-gradient(135deg, #FFD700 0%, #FFA500 100%)
```

## 📊 Informações do Evento

- **Data:** 12 de Setembro de 2026
- **Local:** Goiânia, GO
- **Duração:** 12 horas de imersão
- **Investimento:** R$ 497 ou 12x de R$ 49,70
- **Público:** Empresários, gestores e profissionais do setor automotivo

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Volmaster Tech**
- Website: [volmaster.com.br](https://volmaster.com.br)
- Instagram: [@volmaster.tech](https://instagram.com/volmaster.tech)

---

✨ **Desenvolvido com dedicação para transformar a gestão automotiva no Brasil** ✨
