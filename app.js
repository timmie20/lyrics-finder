const container = document.querySelector('.container')
const submitForm = document.querySelector('form')
const input = document.getElementById('search-bar')
const selectOption = document.querySelector('#select-option')
const output = document.querySelector('.output')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b0729b720msha963c1aab6fcf66p13d7eejsnb50294ef6d4f',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

function loadSpotify (e){
  fetch(`https://spotify23.p.rapidapi.com/search/?q=${input.value}&type=tracks&offset=0&limit=10&numberOfTopResults=5`, options)
  .then(function (res) {
    return res.json()
  })
  .then(function(data){
    renderUI(data)
    console.log(data)
  }) 
   e.preventDefault()
}

function renderUI(data){
  output.innerHTML = data.tracks
}

 submitForm.addEventListener('submit', loadSpotify)






