//! FLUXO 
//* SELECIONO A QUANTIDADE
//! PEGA A QT DA API
//! RETORNA POSTS 
//* CRIAR CARDS VIA JS 
//! CRIAR CARDS DE ACORDO COM A QT 
//! IMPRIMIR DADOS EM CADA CARD

const listBlog = document.getElementById('listBlog');
const formNumber = document.getElementById('formNumber');
const inputNumber = document.getElementById('inputNumber');
const inputSubmit = document.getElementById('inputSubmit');

//? Functions

function handleSubmit(e)
{
  e.preventDefault();
  
  handleCard();
}

function handleCard()
{
  const verif = verificationNumber();
  
  if (verif === true) {
    //? ou
    // getDataBase()
    getDataBase().then(data => createCard(data)) 
    // const newDataBase = getDataBase();  
    // newDataBase.then(function(data) { 
      // createCard(data);  
    // })

  }
}

async function getDataBase()
{
  // const arrEndpoints = [
  //   "https://jsonplaceholder.typicode.com/posts/76",
  //   "https://jsonplaceholder.typicode.com/posts/77",
  //   "https://jsonplaceholder.typicode.com/posts/78",
  //   "https://jsonplaceholder.typicode.com/posts/79"
  // ]

  // const arrPromises = arrEndpoints.map(url => fetch(url).then(res => res.json()))
  // const getAllData = await Promise.all(arrPromises);



  const dataBase = [];
  const arrEndpoints = []
  
  for (var i = 1; i <= inputNumber.value; i++) {    
    const randon = Math.random() * (100 - 1) + 1;
    arrEndpoints.push("https://jsonplaceholder.typicode.com/posts/" + randon.toFixed(0));
  }
  const arrPromises = arrEndpoints.map(url => fetch(url).then(res => res.json()))
  const getAllData = await Promise.all(arrPromises);

  // const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + randon.toFixed(0))
  // const data = await response.json()  
  
  // dataBase.push(data);

  return getAllData
}

function verificationNumber()
{  
  if (inputNumber.value == ''){ //!temp  
    handleMessage('Digite um número válido')

    return false
  }
  
  return true
}

function createCard(dataBase)
{
  console.log(dataBase);
  dataBase.forEach(function(item, index){

    // const newItem = JSON.parse(item); 
    
    const col = document.createElement('div');
    col.classList.add('col-lg-4'); 
    
    const card = document.createElement('div');
    card.classList.add('card'); 

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img-top'); 
    cardImage.setAttribute('alt', 'imagem teste');
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body'); 

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title'); 
    cardTitle.innerText = item.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text'); 
    cardText.innerText = item.body;

    const cardButton = document.createElement('a');
    cardButton.setAttribute('href', '#');
    cardButton.classList.add('btn', 'btn-primary'); 
    cardButton.innerText = 'Ver Mais';

    col.appendChild(card);
    card.appendChild(cardImage);  
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    //!ADD IMG

    listBlog.appendChild(col);
  });
}

//? FUNCTIIONS DEFAULT

function handleMessage(message)
{
  alert(message)
}

//? EVENTS

formNumber.addEventListener('submit', handleSubmit)