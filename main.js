console.log(`howdy pardner`)



const addMovie = (event) =>{ //see the values being declared below WITHIN the body of the function
    event.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li') //method that lives in our doc, allowing us to.. 
    const movieTitle = document.createElement('span') //this holds our movie title
    movieTitle.addEventListener('click', crossOffMovie) 
    movieTitle.textContent = inputField.value 
    movie.appendChild(movieTitle) //appending 'child' appends it to that element AS a child as opposed to 
    // console.log(movie)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    
    document.querySelector('ul').appendChild(movie)
    inputField.vlaue = ''
}

const deleteMovie = (event) => {
    event.target.parentNode.remove() //the target is actually the SOURCE of the event
    message.textContent = 'Movie Deleted'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked') //toggle - like an on/off switch changes the value to the opposite of wahtever it is now? 
    if (event.target.classList.contains('checked')) {
        message.textContent ='Movie Watched!'
    } else {
        message.textContent = 'Oopsie'

    }
}

const add = document.querySelector('form')
add.addEventListener('submit',addMovie)


