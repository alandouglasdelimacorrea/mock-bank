# 🏦 Mock Bank

O **Mock Bank** é um sistema bancário simplificado desenvolvido para a disciplina de **Programação Orientada a Objetos (POO)**. O projeto utiliza **Node.js** com **TypeScript** para demonstrar a aplicação prática de conceitos de arquitetura e modelagem de objetos.

## 🚀 Tecnologias

- **TypeScript**: Linguagem principal para tipagem estática e POO.
- **Node.js**: Runtime para execução do código.
- **TS-Node**: Para execução direta dos arquivos TypeScript.

## 🏛️ Pilares de POO Implementados

O projeto foi estruturado para exercitar:
- **Encapsulamento**: Proteção de atributos sensíveis em `models`.
- **Herança e Polimorfismo**: Diferentes comportamentos para tipos de contas bancárias.
- **Abstração**: Uso de `interfaces` para definir contratos de serviços e entidades.
- **Injeção de dependências**: Reduzir o acoplamento entre os objetos e seus colaboradores.
- **Estrutura MVC**: Arquitetura baseada em MVC.

## 📂 Estrutura de Pastas

Com base na arquitetura do projeto:

```text
src/
 ├── controllers/    # Gerenciamento de fluxo e entradas do sistema
 ├── enums/          # Definições de tipos constantes (Ex: Tipo de Conta, Status)
 ├── interfaces/     # Contratos e definições de tipos
 ├── models/         # Classes de entidades (Classes base e especializações)
 ├── services/       # Lógica de negócio e regras bancárias
 ├── database.ts     # Simulação de persistência de dados/banco em memória
 └── main.ts         # Ponto de entrada da aplicação
