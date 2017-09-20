# Desafio Elevential
# elevential


## 1.O que você achou do desafio? 
  Bastante simples para um tempo relativamente extenso (3 dias).
  Mas que buscou alguns conceitos interessantes para se avaliar.
  porém com o tempo que foi fornecido acho que poderia colocar mais coisas,
  como por exemplo consumir alguma api para testar conhecimentos de integração.
  mudança de rota na spa para testar conhecimentos de rotas no navegador.

  obs: como estou trabalhando esse tempo foi bem reduzido mas pra galera que não está dava pra fazer muito mais.
## 2.Quais foram as maiores dificuldades encontradas?
  tive alguns contratempos pra relembrar algumas coisas da Brownser Api que não usava diretamente a um tempo, por conta das abstrações dos frameworks
## 3.O que poderia ser melhorado no resultado?
  gostaria de ter os 3 dias bem aproveitados para poder melhorar principalemente organização de código e otimizar interações com o DOM bem como aplicar apropriadamente o event delegate para evitar listener desnecessários.
  outro ponto que poderia ter melhorado era o layout que apesar de ter alterado para um modo responsivo, não está com uma transição fluida.
## 4.Quais funcionalidades você julgou mais importantes e porquê?
  as funcionalidades mais importantes do desafio foram as mensagens ao usuário final para que a experiencia do usuário seja mais clara e objetiva, como por exemplo informar que as senhas não conferem e campos não preenchidos serem indicados corretamente, bem como a sugestã oda forma correta de preencher usando um placeholder.
## 5.Que decisões você tomou e porquê?
  como o desafio não citava tecnologia a ser usada (mesmo se tratando de uma vaga para react). e se tratava de um protótipo com deadline curta. optei pelo bom e velho js puro. Entretando não levei em consideração suporte a navegadores antigos pois usei ES6 e não tratei diversos problemas de cross-browser que eventualmente poderiam surgir.

  vale lembrar que considerando a urgência, Tomei a decisão do trade-off entre desenvolver usando react por exemplo que seria um overkill pelo tamanho da biblioteca mas que além de abstrair problemas de cross-browser e performance a longo prazo em uma aplicação robusta evitando tocar o dom muitas vezes devido ao brilhante mecanismo do virtual render e o VDOM. Para uma tela tão simples não fez sentido pra mim usar algum fw ou libray que fosse.