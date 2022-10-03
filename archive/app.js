// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// const list = document.getElementById("listBlog");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(json => handleShowData(json)) //? envia json

// function handleShowData(usuarios) //? recebe json
// {
//   usuarios.forEach(({name, username, email}) => {   

//     const li = document.createElement("li");
//     li.innerText = `Nome: ${name}, Usuário: ${username}, E-mail: ${email}`;
//     list.appendChild(li);
//   })
// }

//! FLUXO 
//* SELECIONO A QUANTIDADE
//! PEGA A QT DA API
//! RETORNA POSTS 
//! CRIAR CARDS VIA JS 
//! CRIAR CARDS DE ACORDO COM A QT 
//! IMPRIMIR DADOS EM CADA CARD

const listBlog = document.getElementById('listBlog')
const inputNumber = 1;

//? Functions

handleCard()
function handleCard()
{
  const verif = verificationNumber()
  
  if (verif === true) {
    createCard();
  }
}

function verificationNumber()
{  
  if (inputNumber == ''){ //!temp  
    handleMessage('Digite um número válido')

    return false
  }
  
  return true
}

function createCard()
{
  const col = document.createElement('div');
  col.classList.add('col-lg-4'); 
  
  const card = document.createElement('div');
  card.classList.add('card'); 
  
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body'); 

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title'); 
  cardTitle.innerText = 'Card title teste';

  const cardText = document.createElement('p');
  cardText.classList.add('card-text'); 
  cardText.innerText = 'Card text teste';

  const cardButton = document.createElement('a');
  cardButton.classList.add('btn', 'btn-primary'); 

  col.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardButton);
  //!ADD IMG

  listBlog.appendChild(col);
}

//? FUNCTIIONS DEFAULT

function handleMessage(message)
{
  alert(message)
}

//? EVENTS
