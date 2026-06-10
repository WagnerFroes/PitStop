# Contexto do Projeto PitStop

Este arquivo serve como contexto principal para qualquer IA, assistente de código ou desenvolvedor que for trabalhar neste projeto.

Sempre que uma nova IA for usada neste projeto, ela deve ler este arquivo antes de sugerir, alterar ou gerar código.

---

# Alterado 10/06/2026 v1

# 1. Nome do Projeto

**PitStop**

---

# 2. Resumo do Projeto

O **PitStop** é um aplicativo mobile para **iOS e Android**, desenvolvido com **Expo**, **React Native**, **TypeScript** e **Expo Router**.

O objetivo do app é ajudar motoristas a encontrar postos de combustível, comparar preços, visualizar serviços disponíveis e contribuir com informações atualizadas.

O projeto começa com foco inicial na cidade de **São Paulo/SP**, usando dados mockados. Futuramente, poderá evoluir para uso com mapa, localização do usuário, backend real, autenticação e integração com APIs externas.

---

# 3. Objetivo Principal do App

O PitStop deve permitir que usuários:

- Visualizem postos de combustível.
- Consultem preços de combustíveis.
- Vejam serviços disponíveis em cada posto.
- Acessem detalhes de um posto.
- Simulem a atualização de preço de combustível.
- Ganhem XP por contribuições.
- Acompanhem progresso, níveis e conquistas.
- Futuramente contribuam de forma colaborativa com dados reais.

---

# 4. Stack Técnica

O projeto utiliza:

- Expo
- React Native
- TypeScript
- Expo Router
- Expo Go
- Git
- GitHub
- VS Code

O app deve permanecer compatível com **Expo Go** durante o MVP.

---

# 5. Estado Atual do Projeto

O projeto já possui:

- Estrutura inicial do Expo Router.
- Tela inicial com lista de postos.
- Dados mockados de postos de São Paulo.
- Cards de postos.
- Tela de detalhes do posto.
- Navegação da lista para detalhes.
- Tela visual de atualização de preço.
- Simulação de ganho de XP ao atualizar preço.
- Card de progresso do usuário.
- Tela completa de progresso/gamificação.
- Aba inferior ajustada para exibir “Home” e “Progresso”.

---

# 6. Escopo Atual do MVP

Neste momento, o projeto ainda é um MVP.

O app **não possui**:

- Backend.
- Banco de dados.
- Autenticação.
- API externa.
- Google Maps.
- Firebase.
- Supabase.
- Persistência real de preços.
- Localização real do usuário.
- Mapa real.
- Login/cadastro de usuários.

Os dados são mockados localmente.

---

# 7. Funcionalidades Atuais

## 7.1 Lista de Postos

A tela inicial exibe uma lista de postos de combustível usando dados mockados.

Cada posto pode mostrar:

- Nome.
- Bandeira/marca.
- Endereço.
- Bairro.
- Distância.
- Nota.
- Quantidade de avaliações.
- Status aberto/fechado.
- Serviços disponíveis.
- Preços principais.

## 7.2 Detalhes do Posto

Ao tocar em um posto, o usuário navega para a tela de detalhes.

A tela de detalhes mostra:

- Nome do posto.
- Marca/bandeira.
- Endereço completo.
- Bairro.
- Cidade.
- Distância.
- Nota.
- Quantidade de avaliações.
- Status aberto/fechado.
- Lista de combustíveis e preços.
- Serviços disponíveis.
- Última atualização.
- Botão para atualizar preço.

## 7.3 Atualização Visual de Preço

O app possui uma tela para simular a atualização de preço.

O fluxo atual é:

1. Usuário entra nos detalhes de um posto.
2. Toca em “Atualizar preço”.
3. Escolhe um combustível.
4. Digita um novo valor.
5. Confirma a atualização.
6. O app mostra mensagem de sucesso.
7. O app mostra ganho de XP mockado.

Importante: essa atualização ainda **não salva de verdade**.

## 7.4 Gamificação

O app já possui uma base visual de gamificação.

Ela inclui:

- XP atual.
- Nível atual.
- Próximo nível.
- Barra de progresso.
- Badges/conquistas mockadas.
- Tela completa de progresso do usuário.
- Estatísticas mockadas.
- Histórico mockado de contribuições.

---

# 8. Funcionalidades Futuras Planejadas

No futuro, o PitStop poderá evoluir para incluir:

- Mapa com postos próximos.
- Localização real do usuário.
- Integração com Google Places API, OpenStreetMap, Mapbox ou outra API.
- Backend com Supabase, Firebase ou backend próprio.
- Autenticação de usuários.
- Persistência real de preços.
- Atualização colaborativa dos preços.
- Confirmação de preços por outros usuários.
- Sistema de confiança dos preços.
- Avaliação dos postos.
- Comentários.
- Histórico real de contribuições.
- Ranking semanal ou mensal.
- Perfil completo do usuário.
- Badges reais baseadas em ações.
- Notificações.
- Filtros avançados.
- Ordenação por menor preço, distância ou avaliação.

---

# 9. Estrutura Geral do Projeto

Estrutura esperada:

```text
app/
  (tabs)/
    _layout.tsx
    index.tsx
    explore.tsx

  station/
    [id].tsx
    [id]/
      update-price.tsx

  _layout.tsx
  modal.tsx

src/
  components/
    FuelPriceBadge.tsx
    ServiceTag.tsx
    StationCard.tsx
    ProgressCard.tsx

  constants/
    colors.ts

  data/
    stations.ts
    userProgress.ts

  features/
    stations/
      StationListScreen.tsx

    profile/
      ProfileScreen.tsx

  types/
    station.ts
    userProgress.ts

  utils/
    formatCurrency.ts
```

---

# 10. Arquivos Importantes

## Telas e Rotas

```text
app/(tabs)/index.tsx
```

Renderiza a tela principal com a lista de postos.

```text
app/(tabs)/explore.tsx
```

Renderiza a tela de progresso do usuário.

```text
app/station/[id].tsx
```

Tela de detalhes de um posto.

```text
app/station/[id]/update-price.tsx
```

Tela visual para simular atualização de preço.

## Componentes

```text
src/components/StationCard.tsx
```

Card de posto usado na lista.

```text
src/components/FuelPriceBadge.tsx
```

Componente para exibir preço de combustível.

```text
src/components/ServiceTag.tsx
```

Componente para exibir serviços disponíveis.

```text
src/components/ProgressCard.tsx
```

Card de progresso do usuário.

## Dados

```text
src/data/stations.ts
```

Dados mockados dos postos.

```text
src/data/userProgress.ts
```

Dados mockados de progresso/gamificação.

## Tipos

```text
src/types/station.ts
```

Tipos relacionados a postos, combustíveis e serviços.

```text
src/types/userProgress.ts
```

Tipos relacionados a progresso, XP, níveis e badges.

## Utilitários

```text
src/utils/formatCurrency.ts
```

Função para formatar valores em moeda brasileira.

## Tema

```text
src/constants/colors.ts
```

Paleta de cores principal do app.

---

# 11. Modelo de Dados Atual — Station

O tipo `Station` representa um posto de combustível.

Campos atuais:

```text
id: string
name: string
brand: string
address: string
neighborhood: string
city: string
distanceInKm: number
rating: number
reviewsCount: number
isOpen: boolean
lastUpdatedAt: Date
services: StationService[]
fuelPrices: FuelPrice[]
```

Não usar campos inexistentes sem antes alterar o modelo de dados com autorização.

---

# 12. Modelo de Dados Atual — FuelPrice

O tipo `FuelPrice` representa um preço de combustível.

Campos atuais:

```text
type: FuelType
price: number
lastUpdated: Date
```

Tipos de combustível atuais:

```text
gasolina_comum
gasolina_aditivada
etanol
diesel_s10
```

---

# 13. Modelo de Dados Atual — StationService

`StationService` é uma union de strings.

Serviços atuais:

```text
conveniencia
gelo
banheiro
calibrador
lava_rapido
pix
cartao
24h
```

Importante:

`StationService` **não é objeto**.

Correto:

```tsx
<ServiceTag service={service} />
```

Incorreto:

```tsx
<ServiceTag service={service.type} />
```

---

# 14. Componentes Existentes

## FuelPriceBadge

O componente `FuelPriceBadge` é exportado como default.

Ele recebe:

```text
fuelPrice
```

Uso correto:

```tsx
<FuelPriceBadge fuelPrice={price} />
```

Não usar:

```tsx
<FuelPriceBadge type={price.type} price={price.price} />
```

## ServiceTag

O componente `ServiceTag` é exportado como default.

Ele recebe:

```text
service
```

Uso correto:

```tsx
<ServiceTag service={service} />
```

---

# 15. Campos Que Não Devem Ser Usados

Não usar estes campos, pois eles **não existem no modelo atual**:

```text
station.flag
station.reviews
station.distance
station.brandLogo
station.address.short
station.reviewCount
station.distanceKm
station.fuels
service.id
service.type
colors.lightGray
colors.darkText
colors.secondaryText
colors.lightBorder
```

Se algum desses campos parecer necessário, deve ser proposta uma etapa separada chamada:

```text
Evolução do modelo de dados
```

---

# 16. Regra Para Criar Campos Novos

A IA pode sugerir novos campos, mas não pode usá-los diretamente em componentes sem autorização.

Para criar campos novos, a IA deve primeiro propor:

1. Nome do campo.
2. Tipo TypeScript.
3. Por que o campo é útil.
4. Quais arquivos precisariam ser alterados.
5. Exemplo de dado mockado.
6. Impacto nos componentes existentes.
7. Riscos de compatibilidade.

Somente após aprovação, a IA pode alterar:

```text
src/types/station.ts
src/data/stations.ts
componentes que dependem desses campos
```

---

# 17. Regras de Imports

Preferir imports relativos.

## Exemplo em src/components/StationCard.tsx

```tsx
import { colors } from "../constants/colors";
import type { FuelType, Station } from "../types/station";
import { formatCurrency } from "../utils/formatCurrency";
import FuelPriceBadge from "./FuelPriceBadge";
import ServiceTag from "./ServiceTag";
```

## Exemplo em app/station/[id].tsx

```tsx
import { mockStations } from "../../src/data/stations";
import { colors } from "../../src/constants/colors";
import FuelPriceBadge from "../../src/components/FuelPriceBadge";
import ServiceTag from "../../src/components/ServiceTag";
```

## Exemplo em app/station/[id]/update-price.tsx

Como este arquivo está mais profundo, os imports para `src` devem usar:

```tsx
import { mockStations } from "../../../src/data/stations";
import { colors } from "../../../src/constants/colors";
import type { FuelPrice } from "../../../src/types/station";
```

---

# 18. Expo Router

O projeto usa Expo Router.

Para navegar programaticamente, usar:

```tsx
const router = useRouter();
```

Para voltar:

```tsx
router.back();
```

Para ler parâmetros de rota:

```tsx
const { id } = useLocalSearchParams<{ id: string }>();
```

Quando a tipagem do Expo Router ainda não reconhecer uma rota nova, pode ser usado temporariamente:

```tsx
router.push(`/station/${station.id}` as any);
```

ou:

```tsx
router.push(`/station/${station.id}/update-price` as any);
```

---

# 19. Regras Gerais Para IAs

Toda IA que trabalhar neste projeto deve seguir estas regras:

- Não instalar bibliotecas sem autorização.
- Não alterar `package.json` sem autorização.
- Não alterar `package-lock.json` sem autorização.
- Não alterar `app.json` sem autorização.
- Não alterar `tsconfig.json` sem autorização.
- Não alterar estrutura de rotas sem explicar.
- Não alterar modelos de dados sem explicar.
- Não criar backend sem autorização.
- Não criar mapa sem autorização.
- Não criar autenticação sem autorização.
- Não criar API externa sem autorização.
- Não usar `@expo/vector-icons` sem autorização.
- Não usar bibliotecas visuais novas sem autorização.
- Não usar imagens externas sem autorização.
- Não rodar comandos destrutivos.
- Não usar `git reset`.
- Não usar `git clean`.
- Não fazer `force push`.
- Não inventar campos.
- Não usar campos que não existem.
- Não aplicar alterações grandes sem plano.
- Não alterar muitos arquivos numa única etapa.
- Não apagar código existente sem explicar.
- Não substituir arquivos inteiros sem necessidade.
- Não criar “gambiarras” para esconder erro de TypeScript.
- Não ignorar erros de compilação.

---

# 20. Modo de Trabalho Recomendado

Para qualquer nova tarefa, seguir este fluxo:

1. Ler este arquivo `context.md`.
2. Ler os arquivos relevantes da tarefa.
3. Resumir o entendimento.
4. Propor plano curto.
5. Listar arquivos que serão alterados.
6. Aguardar confirmação.
7. Aplicar mudanças pequenas.
8. Explicar como testar.
9. Sugerir commit em português.

---

# 21. Padrão de Commits

Todas as mensagens de commit devem ser em português.

Padrão:

```text
Verbo no presente + descrição objetiva
```

Exemplos:

```text
Cria estrutura inicial do MVP do PitStop
Adiciona navegação para detalhes do posto
Adiciona tela de detalhes do posto
Adiciona fluxo de atualização de preço
Melhora feedback da atualização de preço
Adiciona card de progresso do usuário
Adiciona tela de progresso do usuário
Ajusta aba de progresso do usuário
Corrige navegação da atualização de preço
Melhora layout dos cards de postos
```

Evitar commits em inglês neste projeto.

---

# 22. Design e UI

O PitStop deve ter visual:

- Moderno.
- Limpo.
- Intuitivo.
- Mobile-first.
- Com cards arredondados.
- Com boa hierarquia visual.
- Com bom espaçamento.
- Com cores consistentes.
- Com visual de app real.
- Sem excesso de elementos.
- Sem dependências visuais desnecessárias.

A IA pode ser criativa no design, mas deve manter simplicidade e estabilidade.

---

# 23. Paleta de Cores

Usar sempre o arquivo:

```text
src/constants/colors.ts
```

Não inventar cores como:

```text
colors.lightGray
colors.darkText
colors.secondaryText
colors.lightBorder
```

A menos que elas existam no arquivo `colors.ts`.

---

# 24. Boas Práticas

Manter:

- Componentes pequenos.
- Tipos claros.
- Imports organizados.
- Nomes descritivos.
- Código legível.
- Estilos com `StyleSheet.create`.
- Compatibilidade com Expo Go.
- Responsabilidade separada por arquivo.
- Alterações pequenas por etapa.

Evitar:

- Arquivos gigantes.
- Repetição excessiva.
- Lógica complexa no JSX.
- Alterar dados mockados sem necessidade.
- Criar dependências desnecessárias.
- Misturar várias funcionalidades em uma tarefa.

---

# 25. Como Rodar o Projeto

Comando padrão:

```powershell
npx expo start -c
```

Abrir no celular usando Expo Go.

---

# 26. Como Validar Alterações

Após cada etapa, testar:

1. App abre sem erro.
2. Tela inicial carrega.
3. Lista de postos aparece.
4. Card de posto abre detalhes.
5. Tela de detalhes funciona.
6. Botão de atualizar preço funciona.
7. Tela de atualização funciona.
8. Aba Progresso funciona.
9. Não aparece tela vermelha de erro.
10. Não há erro no terminal Metro.

---

# 27. Git

Antes de commitar:

```powershell
git status
```

Depois:

```powershell
git add .
git commit -m "Mensagem em português"
git push
```

Nunca fazer:

```powershell
git reset --hard
git clean -fd
git push --force
```

sem autorização explícita.

---

# 28. Próximas Etapas Prováveis

Possíveis próximas tarefas do projeto:

1. Melhorar feedback da atualização de preço.
2. Voltar para detalhes após atualização.
3. Atualizar XP mockado visualmente.
4. Criar tela de avaliação do posto.
5. Criar formulário visual de avaliação.
6. Criar filtros de postos.
7. Ordenar postos por distância/preço/avaliação.
8. Melhorar tela de detalhes.
9. Preparar estrutura para persistência local.
10. Estudar integração futura com mapa.
11. Estudar backend com Supabase/Firebase.
12. Evoluir modelo de dados.

---

# 29. Prioridade Atual

A prioridade atual do projeto é:

1. Manter o app compilando.
2. Manter o app rodando no Expo Go.
3. Evoluir o MVP em pequenas etapas.
4. Evitar quebrar a estrutura existente.
5. Manter commits organizados em português.
6. Criar funcionalidades visuais antes de integrar backend.
7. Só adicionar APIs externas quando a base estiver estável.

---

# 30. Instrução Final Para IAs

Antes de executar qualquer tarefa neste projeto, responda internamente:

- Essa alteração respeita o modelo atual?
- Essa alteração precisa de campo novo?
- Essa alteração mexe em arquivo proibido?
- Essa alteração instala dependência?
- Essa alteração quebra o Expo Go?
- Essa alteração é pequena o suficiente?
- Essa alteração pode ser testada facilmente?
- A mensagem de commit será em português?

Se qualquer resposta indicar risco, pare e peça confirmação.
