const starsEl = document.querySelectorAll(".fa-star");
const emojisEL = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0);

starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index){
  starsEl.forEach((starEl, idx) => {
    if(idx < index + 1) {
      starEl.classList.add("active");
    }else {
      starEl.classList.remove("active")
    }
  });
  emojisEL.forEach(emojiEL => {
    emojiEL.style.transform = 
    `translateX(-${index * 50}px)`;
    emojiEL.style.color = colorsArray[index] 
  })
}