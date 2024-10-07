# Guia de Protocolos NFT

## 📚 Visão Geral

Este repositório contém informações abrangentes sobre diferentes protocolos NFT e implementações na blockchain Ethereum. O guia aborda os padrões ERC-721, ERC-1155 e ERC-4907, além de conceitos adicionais como Árvores de Merkle e integração com OpenSea.

## 🗂 Conteúdo

1. [Introdução aos NFTs](#introdução-aos-nfts)
2. [Protocolo ERC-721](#protocolo-erc-721)
3. [Protocolo ERC-1155](#protocolo-erc-1155)
4. [Protocolo ERC-4907](#protocolo-erc-4907)
5. [Implementação da Árvore de Merkle](#árvore-de-merkle)
6. [Integração com OpenSea](#integração-com-opensea)

## 🔍 Seções Detalhadas

### Introdução aos NFTs

- Definição de Tokens Não Fungíveis (NFTs)
- Casos de uso e adoção no mercado
- Exemplos de aplicações NFT

### Protocolo ERC-721

O padrão original de NFT para criação de tokens únicos.

**URIs Importantes:**
- Contract URI: `https://magenta-gradual-firefly-111.mypinata.cloud/ipfs/QmYh82xTQthV6uLdpuyUqAzPiZtPwWyuT2wugQj1WKXgUL`
- Token URI: `https://magenta-gradual-firefly-111.mypinata.cloud/ipfs/QmNUJ2L6YmHCKZpGv1dsMmPUAvy9jGu5cpnskSS5bcr2rj`

Características Principais:
- IDs de token únicos
- Funcionalidade de transferência
- Rastreamento de propriedade

### Protocolo ERC-1155

Padrão multi-token que suporta tokens fungíveis e não fungíveis.

Características Principais:
- Transferências em lote
- Otimização de gás
- Tipos mistos de tokens

### Protocolo ERC-4907

Padrão de NFT para aluguel com direitos de uso temporário.

Características Principais:
- Atribuição de usuário
- Expiração baseada em tempo
- Sistema de função dupla (proprietário/usuário)

### Árvore de Merkle

Detalhes de implementação para verificação eficiente de dados.

Características Principais:
- Verificação baseada em hash
- Geração eficiente de provas
- Estrutura de dados escalável

### Integração com OpenSea

Diretrizes para listagem de NFTs no marketplace OpenSea.

Características Principais:
- Padrões de metadados
- Processo de listagem
- Interação com o marketplace

## 🛠 Requisitos Técnicos

- Compilador Solidity
- Ambiente de desenvolvimento Ethereum
- Biblioteca Web3
- IPFS para armazenamento de metadados

## 📦 Instalação

```bash
# Clone o repositório
git clone [url-do-repositório]

# Instale as dependências
npm install

# Execute os testes
npm test
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.

## 📞 Contato

Para dúvidas e suporte, por favor abra uma issue no repositório.

---

*Observação: Este README faz parte de um recurso educacional sobre protocolos NFT e suas implementações.*
