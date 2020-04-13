# Stack para monitrar logs da anbetec

## Docker
Através do Dockerfile foi criado um script inicial das caracteristicas da máquina e de todo o script que ela deve ter para receber o código fonte e executar o mesmo

## Docker-compose
Toda a complexidade da orquestração de containers é gerenciado através do docker-compose. Através do cli é possível criar, editar, redimencionar e escalar o cluster e/ou aplicações individuais.

## JavaScript S2 / Typescript S2 / NodeJs S2
Conjunto de tecnologias na qual foi escrito o backend e regras de inclusão de dados nos índices e pesquisa de logs da prova de conceito / teste da arquitetura

## Bull
Client redis para controle do fluxo de filas/topicos e gerencia de estado da informação, oferecendo uma UI maravilhosa para consulta de itens em filas/topicos.

## Redis
Banco de dados em memória, que é utilizado para simular um sistema de mensageiria e uma prova de conceito mais real do cenário de integração de sistemas.