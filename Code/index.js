const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')



setTimeout(function(){
    modal.style.display = 'inline'
}, 3000)



modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})


declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})




consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)

    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thank you so much <span class="modal-display-name">${fullName}</span>! </h2>
        <p>We just sold the rights to your eternal soul.</p>
    `
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 