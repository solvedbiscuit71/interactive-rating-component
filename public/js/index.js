function handleClick(index) {
  if (curRating === index){
    return
  }

  prevRating = curRating
  curRating = index + 1

  if (prevRating) {
    ratingBtns[prevRating - 1].classList.remove('rating-btn--active')
  }
  ratingBtns[curRating - 1].classList.add('rating-btn--active')
}

function hanldeSubmit() {
  document.getElementById('card-section1').style.display = "none";
  document.getElementById('card-section2').style.display = "flex";

  ratingDisplay.innerText = curRating
}

let curRating
let prevRating
const ratingBtns = document.getElementsByClassName("rating-btn")
const submitBtn = document.getElementById("submit-btn")
const ratingDisplay = document.getElementById("rating-display")

/* adding eventlistener */
for (const [index,btn] of Object.entries(ratingBtns)) {
  btn.addEventListener("click",(event) => {
    handleClick(+index)
  })
}
submitBtn.addEventListener('click',(event) => {
  if (curRating !== undefined) {
    hanldeSubmit()
  }
})