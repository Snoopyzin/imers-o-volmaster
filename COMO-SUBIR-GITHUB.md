# 🚀 Como Subir o Projeto para o GitHub

## 📝 Pré-requisitos

1. Ter o Git instalado: https://git-scm.com/
2. Ter uma conta no GitHub: https://github.com/
3. Criar um novo repositório no GitHub (pode ser público ou privado)

## 🔧 Passo a Passo

### 1. Inicializar Git (se ainda não foi inicializado)
```bash
git init
```

### 2. Adicionar todos os arquivos
```bash
git add .
```

### 3. Fazer o primeiro commit
```bash
git commit -m "🚀 Initial commit: Landing Page Imersão Volmaster Tech"
```

### 4. Adicionar o repositório remoto
```bash
# Substitua SEU-USUARIO e NOME-DO-REPOSITORIO pelos seus dados
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
```

### 5. Verificar se o remote foi adicionado
```bash
git remote -v
```

### 6. Fazer o push para o GitHub
```bash
git push -u origin main
```

**OU**, se o branch padrão for `master`:
```bash
git push -u origin master
```

## 🌐 Ativar GitHub Pages

### Após fazer o push:

1. Acesse seu repositório no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main` (ou `master`)
   - Folder: `/ (root)`
5. Clique em **Save**
6. Aguarde alguns minutos
7. Seu site estará disponível em: `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

## 📦 Estrutura Final do Projeto

```
landing-page-volmaster/
├── index.html              ✅ Página principal
├── ingressos-novo.html     ✅ Página de ingressos
├── README.md               ✅ Documentação
├── .gitignore              ✅ Arquivos ignorados
│
├── css/
│   ├── style-new.css       ✅ Estilos principais
│   └── ingressos-style.css ✅ Estilos ingressos
│
├── js/
│   └── script-new.js       ✅ JavaScript principal
│
├── images/                 ✅ 8 imagens otimizadas
│   ├── VOLMASTER 01.png
│   ├── trucks.jpg
│   ├── ticket evento.jpg
│   ├── evento 1.jpeg
│   ├── evento 3 Kezia.jpg
│   ├── palestrante lais.jpeg
│   ├── palestrante bruno.jpeg
│   └── DIMSPORT EVENTO.png
│
└── .github/
    └── workflows/
        └── static.yml      ✅ Deploy automático
```

## 🔄 Fazendo Updates Posteriores

```bash
# 1. Adicionar arquivos modificados
git add .

# 2. Fazer commit com mensagem descritiva
git commit -m "✨ Adiciona nova funcionalidade X"

# 3. Enviar para o GitHub
git push
```

## 💡 Dicas Importantes

### Mensagens de Commit Recomendadas:
- `✨ feat:` Nova funcionalidade
- `🐛 fix:` Correção de bug
- `💄 style:` Mudanças visuais
- `♻️ refactor:` Refatoração de código
- `📝 docs:` Atualização de documentação
- `⚡️ perf:` Melhoria de performance

### Se der erro de autenticação:
Use um **Personal Access Token** ao invés de senha:
1. GitHub → Settings → Developer settings
2. Personal access tokens → Generate new token
3. Use o token como senha ao fazer push

## ✅ Projeto Pronto para Deploy!

Todos os arquivos desnecessários foram removidos:
- ❌ HTML duplicados (index-novo.html, ingressos.html)
- ❌ CSS antigos (style.css, style-adicional.css)
- ❌ JS antigos (script.js)
- ❌ Imagens não utilizadas (5 imagens removidas)
- ❌ Documentação de desenvolvimento

✅ **O projeto está clean e otimizado para produção!**

---

**🎉 Boa sorte com o deploy!**
