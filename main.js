// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//---------------------------------------------------------------------------

//will need to add .hidden class to "id = Model in error modal"
// const likeClick = document.querySelector('.like-glyph')

/*Need to be able to call upon activated hear class and attach to target
element. 
Need to switch out const FULL_HEART & EMPTY HEART to switch fotter display
*/
const commentHearts = document.querySelectorAll(".like-glyph");

//document.addEventListener("click", changeHeart)
function changeHeart(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
  .catch(function(error){;
    console.log(error.message);
    const objError = document.querySelector('#modal')
    const oErrorMessage = document.querySelector('#modal-message')
    objError.classList.remove('hidden')
    oErrorMessage.innerText = error
    setTimeout(() =>{
      objError.classList.add('hidden')
    }, 3000)
  })


  //Need to make function that simulates user request to like a comment
//will need to change heart from empty to full or full to empty
//when clicked or changed, will need and event lisenter. 
//if request fails then will need to remove hidden status for error modal
// for three seconds(will need set Timeout method)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
}

for (const glyph of commentHearts) {
  glyph.addEventListener("click", changeHeart);
}
