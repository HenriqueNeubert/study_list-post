_________________________________________
# BASIC COMMANDS

  ### IN ROOTS / START AND STOP PROJECT
  #### npm run start
  #### npm run stop
_________________________________________
# GIT COMMANDS
  - ## Inicialized
    #### - git init
  - ## add archive/add all
    #### - git add <your_archive> / git add .
  - ## comment / create new review
    #### - git commit ''
  - ## status
    #### - git status
  - ## show commits in oneline
    #### - git log --oneline

  - ## show commits personalized (doc: https://git-scm.com/docs/  git-log/pt_BR)
    #### ex: git log --pretty=format:'%C(blue)%h %C(red)%d %C(cyan)%s - %C(red)%cn, %C(red)%cr'
  
    #### - My default
    config: git config --global --edit (para editar)

    <code>
    [user]
          email = neubert.study@gmail.com
          name = henriqueneubert
    [alias]
          s = !git status -s
          c = !git add -A && git commit -m
          l = !git log --pretty=format:'%C(white)%h %C(red)%d %C(cyan)%s - %C(red)%cn, %C(red)%cr'
    </code>

  - ## show commits
    #### - git log 
  - ## list branches
    #### - git branch 
  - ## travel between branches
    #### - git checkout <name_branche>
  - ## mescle branch
    #### - git merge <name_branche>
  - ## submit archives
    #### - git push
  - ## update archives
    #### - git pull

  - ## modification in last commit 

    #### - git commit --amend
  _________________________________________
# CONVENTIONAL COMMITS

  ## type:
  - ## feat     
    ### Adição de funcionalidade.
  - ## fix      
    ### Correção de defeito.
  - ## docs     
    ### Mudança em documentação.
  - ## style    
    ### Mudança de formatação ou estilo, que não afeta a execução do código (espaço, tabulação, etc).
  - ## refactor 
    ### Mudança na organização do código, que não afeta o comportamento existente.
  - ## test     
    ### Adição ou mudança de um teste.
  - ## chore    
    ### Adição ou mudança em script de build, que não afeta o código de produção.
  - ## perf     
    ### Mudança de código para melhoria de desempenho.
  - ## ci       
    ### Mudança de configuração de integração contínua.
  - ## build    
    ### Mudança em arquivos de build ou em dependências externas.
  - ## temp     
    ### Commit temporário, que não deve ser incluído no CHANGELOG.
_________________________________________

  ## scope:
    Opcional, pode ser qualquer coisa que especifique o escopo da mudança.
    Exemplos: subpacote, workspace, módulo, componente, página.

  ## subject:
    Breve resumo da mudança, escrito no tempo verbal presente. Começa com letra minúscula e não há ponto final.



_________________________________________
### ctrl + shift + v to show readme
_________________________________________
