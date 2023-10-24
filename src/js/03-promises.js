import Notiflix from 'notiflix';

const myform = document.querySelector("form");
const firstDelay = document.querySelectorAll("input")[0];
const delayStep = document.querySelectorAll("input")[1];
const amount = document.querySelectorAll("input")[2];
let storageVar = 0;


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const canResolve = Math.random() > 0.3;
    setTimeout(()=>{
    if (canResolve) {
      resolve({ position, delay });
    }
    
    else {
      reject({ position, delay });
    }
    }, delay)
  })
}


function handleSubmit(event) {
  event.preventDefault();
  for (let i = 1; i <= amount.value; i++){

    

    if (i === 1) {
      createPromise(i, firstDelay.value).then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay} milliseconds.`);
      })
        .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay} milliseconds.`);  
        })
    }

    else if (i >= 2) {
      storageVar = storageVar + parseInt(delayStep.value);
      createPromise(i, storageVar + parseInt(firstDelay.value)).then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay} milliseconds.`);
      })
        .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay} milliseconds.`); 
        })
    }

    

  }
  storageVar = 0;
}

myform.addEventListener("submit", handleSubmit);


