# Turbo Chat

Criando um chat em tempo real como parte de estudo do turbo em ruby rails.

# 🤖 Comentário Automático em Pull Requests

Este repositório contém uma **GitHub Action** que posta automaticamente um comentário sempre que um novo **Pull Request** (PR) é aberto na branch `main`.

---

## 💡 O que essa Action faz?

Sempre que um PR é aberto:

- Detecta o nome de usuário do autor do PR
- Posta automaticamente um comentário no próprio PR com instruções úteis, como:
  - Verificar se os testes estão passando
  - Garantir que o PR está vinculado a uma issue
  - Preencher a descrição corretamente

---

## 📂 Estrutura do arquivo

O workflow está definido em:  
`.github/workflows/workflow.yaml`

