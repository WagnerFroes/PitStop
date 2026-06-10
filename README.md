# PitStop

**PitStop** é um aplicativo mobile em desenvolvimento para iOS e Android, criado com **React Native**, **Expo** e **TypeScript**.

A proposta do app é ajudar motoristas a encontrar postos de combustível, comparar preços, visualizar serviços disponíveis e contribuir com informações atualizadas de forma colaborativa.

---

## Visão geral

O PitStop será uma plataforma colaborativa para consulta e atualização de informações sobre postos de gasolina, começando inicialmente pela cidade de **São Paulo/SP**.

A ideia principal é permitir que usuários visualizem postos próximos, consultem preços de combustíveis, avaliem estabelecimentos e ganhem pontos por manterem as informações atualizadas.

---

## Funcionalidades planejadas

* Listagem de postos de combustível
* Visualização de detalhes de cada posto
* Exibição de preços de combustíveis
* Atualização colaborativa dos valores
* Avaliação dos postos pelos usuários
* Informações sobre serviços disponíveis
* Sistema de pontuação e níveis
* Mapa com localização dos postos
* Integração futura com API de mapas
* Login e persistência de dados em backend futuramente

---

## Serviços que poderão ser informados

Cada posto poderá conter informações como:

* Conveniência
* Gelo
* Banheiro
* Calibrador
* Lava-rápido
* Troca de óleo
* Pagamento por Pix
* Aceita cartão
* Funcionamento 24h

---

## Combustíveis monitorados

O aplicativo poderá exibir e atualizar preços de:

* Gasolina comum
* Gasolina aditivada
* Etanol
* Diesel S10
* Diesel comum
* GNV

---

## Gamificação

Para incentivar a colaboração, o PitStop terá um sistema de progressão de nível.

Exemplo de níveis:

1. Motorista Iniciante
2. Caçador de Preços
3. Fiscal da Bomba
4. Mestre do Litro
5. Lenda do Abastecimento

Usuários poderão ganhar pontos ao:

* Atualizar preços de combustível
* Confirmar preços corretos
* Avaliar postos
* Adicionar serviços disponíveis
* Reportar informações incorretas
* Contribuir com dados recentes

---

## Tecnologias utilizadas

* React Native
* Expo
* TypeScript
* Expo Go
* Git
* GitHub

---

## Tecnologias futuras

Possíveis integrações futuras:

* Google Maps Platform
* Google Places API
* Supabase
* Firebase
* Backend próprio
* Banco de dados em nuvem

---

## Estrutura inicial do projeto

```text
PitStop/
  app/
  assets/
  components/
  constants/
  hooks/
  scripts/
  package.json
  README.md
```

A estrutura poderá evoluir para uma organização mais escalável conforme o projeto crescer.

---

## Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/WagnerFroes/PitStop.git
```

Entre na pasta do projeto:

```bash
cd PitStop
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npx expo start
```

Para limpar o cache:

```bash
npx expo start -c
```

Depois, abra o aplicativo **Expo Go** no celular e escaneie o QR Code exibido no terminal.

---

## Status do projeto

O projeto está em fase inicial de desenvolvimento.

Primeira etapa:

* Configuração do ambiente
* Criação do projeto Expo
* Organização inicial
* Versionamento com Git e GitHub

Próximas etapas:

* Criar tela inicial personalizada
* Criar lista de postos mockados
* Criar tela de detalhes do posto
* Criar visualização de preços
* Adicionar sistema de atualização de valores
* Adicionar mapa e localização
* Adicionar gamificação

---

## Objetivo do MVP

O primeiro MVP terá foco em:

* Rodar corretamente no Expo Go
* Exibir uma lista inicial de postos mockados em São Paulo
* Mostrar detalhes dos postos
* Mostrar preços de combustíveis
* Permitir atualização local dos preços
* Criar a base visual do aplicativo

---

## Autor

Desenvolvido por **Wagner Froes**.

GitHub: [WagnerFroes](https://github.com/WagnerFroes)

---

## Licença

Este projeto está em desenvolvimento para fins de estudo, prática e evolução profissional.
