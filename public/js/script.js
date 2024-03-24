const clickMe = () =>{
    alert("You clicked the button");
        
}

const submitForm = ()=>{
    let formData = {};
    formData.fname = document.getElementById('first_name').value;
    formData.lname = document.getElementById('last_name').value;
    

    console.log("Form data submitted: ", formData);
}


document.addEventListener('DOMContentLoaded', function(){

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    // Trigger Modal
    var modalTrigger = document.getElementById('modal-trigger');
    modalTrigger.addEventListener('click', function() {
      var instance = M.Modal.getInstance(elems[0]);
      instance.open();
    });

    var modalTrigger = document.getElementById('formSubmit');
    modalTrigger.addEventListener('click', ()=>{
        submitForm();
    });
});