# Projeto de Testes de Carga com K6

Este repositório contém testes de carga configurados para serem executados com o K6, uma ferramenta moderna de testes de performance.
Neste teste de performance, estou utilizando a API pública de exemplo do K6 para simular requisições POST. 

## Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- [Git](https://git-scm.com/) para clonar o repositório
- [Node.js](https://nodejs.org/) (opcional, mas recomendado para gerenciar dependências de bibliotecas)
- [K6](https://k6.io/) versão mais recente

### Instalação do K6

Você pode instalar o K6 usando um dos métodos abaixo:

- **Via Homebrew (MacOS):**
  ```bash
  brew install k6
  ```


- **Via APT (Debian/Ubuntu):**
  ```bash
    sudo apt update
    sudo apt install k6
  ```

- **Via Chocolatey (Windows):**
  ```bash
    choco install k6
  ```
Para outras opções de instalação, consulte a documentação oficial do K6.

## Clonando o Repositório
Primeiro, clone este repositório em sua máquina local:
   
   ```
    git clone https://github.com/dionismoreirapro/testePerformance.git
   ```
Depois, acesse o diretório do projeto:
  ```
    cd testePerformance
  ```
## Como Executar os Testes

  ```
    k6 run exemplo.js
  ```
## Relatórios de Teste

Os resultados do K6 serão exibidos no terminal. Para salvar os resultados em um arquivo, execute:
  ```
    k6 run --out json=relatorio.json exemplo.js
```

![Relatorio de teste ](https://github.com/dionismoreirapro/testePerformance/blob/main/image_relatorio.png)

