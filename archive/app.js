const listBlog = document.getElementById('listBlog');
const formNumber = document.getElementById('formNumber');
const inputNumber = document.getElementById('inputNumber');
const inputdeSubmit = document.getElementById('inputSubmit');

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
    cleanCard();
    getDataBaseInfo().then(data => createCard(data)); 
  }
}

function cleanCard()
{
  listBlog.innerText = '';
}

async function getDataBaseInfo()
{
  const dataBase = [];
  const arrEndpoints = [];
  
  for (var i = 1; i <= inputNumber.value; i++) {    
    const randonPost = Math.random() * (100 - 1) + 1;
    arrEndpoints.push("https://jsonplaceholder.typicode.com/posts/" + randonPost.toFixed(0));
  }

  const arrPromises = arrEndpoints.map(url => fetch(url).then(res => res.json()))
  const getAllData = await Promise.all(arrPromises);
  return getAllData;
}

function verificationNumber()
{  
  if (inputNumber.value == ''){ //!temp  
    handleMessage('Digite um número válido');

    return false;
  }
  
  return true;
}

function createCard(dataBase)
{
  dataBase.forEach(function(item, index){
    
    const col = document.createElement('div');
    col.classList.add('col-lg-4'); 
    
    const card = document.createElement('div');
    card.classList.add('card'); 
    
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
    // card.appendChild(cardImage);  
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);

    listBlog.appendChild(col);
  });
}

//? FUNCTIIONS DEFAULT

function handleMessage(message)
{
  alert(message);
}

//? EVENTS

formNumber.addEventListener('submit', handleSubmit);