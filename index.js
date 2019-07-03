const baseURL = 'https://api.github.com';
const user = 'yukijina';
const token = 'b1d89895c5cb39e90445bd1bdd9b395697bdf522';
// const postData = {
//   body: 'Great stuff'
// };
//
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// })
//   .then(res => res.json())
//   .then(json => console.log(json));
//
// fetch(
//   'https://api.github.com/repos/yukijina/rails-todomvc-code-along/commits/9de1b3ec53444f5b4bcb8db24a88f60c982d1c57/comments',
//   {
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: {
//       Authorization: `token ${token}`
//     }
//   }
// ).then(res => console.log(res));

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      //body: JSON.stringify(showResults),
      headers: {
        Authorization: `token ${getToken()}`
        //Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
   .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const p = document.createElement('p')
  p.innerText = `HTML URL: ${json.html_url}`
  document.getElementById('results').append(p)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'js-ajax-fetch-lab';

  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value,
  };

  fetch(
    `${baseURL}/repos/${user}/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
        //Authorization: `token ${token}`
      }
    }
  ).then(res => res.json())
}


function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  //const repo = 'js-ajax-fetch-lab';

  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,
    {
      // GET below is not necessary
      // We need when we use other methods like POST, DELETE...
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
        //Authorization: `token ${token}`
        }
    }
  )
   .then(res => res.json())
   .then(json => displayIssues(json))
}

function displayIssues(json) {
  console.log(typeof(json))
  console.log(Object.values(json))
  const div = document.getElementById('issues');
  div.innerHTML = (Object.values(json).map(j => `<ul><li>${j.title}</li></ul>`).join(''))

  //Can't 'map' json (object {}), neeed to map array
  //Object.values returns an array. So the code below does not work
  // issueDiv.innerHTML = (json.map(j => `<ul><li>${j.title}</li></ul>`).join(''))
 }
