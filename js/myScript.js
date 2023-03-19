//initialise bootstrap tooltips
document.addEventListener("DOMContentLoaded", function() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
    container: 'body'
  }));
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
});



//modal alert for reccomendation page
function showAlert() {
    const nameInput = document.querySelector('#name');
    const destinationSelect = document.querySelector('#destination');
    const name = nameInput.value;
    const destination = destinationSelect.value;
    const destinationText = destinationSelect.options[destinationSelect.selectedIndex].text;
    const message = `Ok, ${name}, your destination is ${destinationText}.`;
    
    //modal pop-up
    const myModal = document.createElement('div');
    myModal.innerHTML = ` 
    <!-- Modal -->
    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">All Set!</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          Alright, ${nameInput.value}, your destination is ${destinationSelect.options[destinationSelect.selectedIndex].text}! We'll put together an amazing plan for your trip and you'll receive it in your email within a few days! Meanwhile, hit "Show me more" to see our destination showcase!
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-target="#my-modal" data-bs-dismiss="modal">Close</button>
            <a href="../subpage_3/sub3.html" class="btn btn-primary">Show Me More<br>(Leaves this page)</a>

          </div>
        </div>
      </div>
    </div>
`;




document.body.insertBefore(myModal, document.body.firstChild);
    
//show and hide 
    const modalShow = new bootstrap.Modal(myModal);
    modalShow.show();

   const closeButtons = document.querySelectorAll('.btn-close, .btn-secondary');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalShow.hide();
            });
    });

};

// Travel Concierge form
const myForm = document.querySelector('form');

myForm.addEventListener('submit', event => {
    event.preventDefault();
        
    if (!myForm.checkValidity()) {   
        myForm.classList.add('was-validated');
    } else {
        event.stopPropagation();
        showAlert();
            
    };
        
});






    


