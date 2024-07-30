const jokess = document.querySelector('.jokes p');
const button = document.querySelector('.btn');
const previousJokesContainer = document.querySelector('.previousJokesContainer');

// const jokes = [
//     "aaj garmi bohot lag rahi hai kyuki meri side main aap jo hoo",
//     "kay app kisi angle se sweet ho kyu ki meri mummy ne muje apko lane bheja hai.",
//     "chand ko pta nahi uska ek tukda dharti pe hai ",
//     "Why did the scarecrow win an award? Because he was outstanding in his field!",
//     "Parallel lines have so much in common. It's a shame they'll never meet.",
//     "Why don't skeletons fight each other? They don't have the guts.",
// ];

async function showRandomJoke() {
    const data = await fetch('https://icanhazdadjoke.com/', {
        method: "GET",
        headers: {
            Accept: "application/json",
            
        }
    });
    const jokeObj = await data.json(); 
    jokess.innerHTML = jokeObj.joke;
}

const array = [];
async function showRandomJoke(){
    const data = await fetch('https://icanhazdadjoke.com/',{
     method: "GET",
     headers : {
        Accept: "application/json",
    
     }  }); 
     }
//      const jokeObj = await data.json();
//      jokess.innerHTML = jokeObj.joke;
//     //  console.log(array)
     
//      let allJokesHtml = '';
//      array.forEach(function(joke){
//          allJokesHtml = allJokesHtml + `<div class="prevjoke">${joke}</div>`;
//         })
//         previousJokesContainer.innerHTML = allJokesHtml;
//         array.push(jokeObj.joke)
    

// button.addEventListener('click', showRandomJoke);

