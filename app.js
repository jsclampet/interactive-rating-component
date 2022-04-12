//create var for each ratings button
let ratingBtnArr = document.getElementsByClassName('rating-btn');
//create var for rating choice, leave empty, to be filled or assigned a value
let ratingChoice = 0

//loop through each button
for (let btn of ratingBtnArr){
    //add event listener to each button
    btn.addEventListener('click', (e) => {
        //assign clicked value to ratingchoice
        ratingChoice = e.currentTarget.textContent;
        //FIRST, clear/remove 'btn-active' class from all buttons
        for (let button of ratingBtnArr){
            button.classList.remove('btn-active')
        }
        //THEN, only add 'btn-active' class to clicked button
        e.currentTarget.classList.add('btn-active')
    })
}

//create var for feedback-card
let feedbackCard = document.getElementsByClassName('feedback-card')[0];
//create var for thankyou-card
let thankyouCard = document.getElementsByClassName('thankyou-card')[0];
//create var for thankyou paragraph element (ratingTxt)
let ratingTxt = document.getElementsByClassName('rating-selection')[0]
//create var for submit button
let submitBtn = document.getElementsByClassName('submit')[0];

//add event listener for submit, 
submitBtn.addEventListener('click', () => {
    //only run function IF a rating is selected
    if(ratingChoice){
        //---add 'hidden' class to feedback-card, 
        feedbackCard.classList.add('hidden');
        //---remove 'hidden' from thankyou-card
        thankyouCard.classList.remove('hidden');
        //---apply stored rating var to string displaying rating out of 5
        ratingTxt.textContent = `You selected ${ratingChoice} out of 5`
    }
})

