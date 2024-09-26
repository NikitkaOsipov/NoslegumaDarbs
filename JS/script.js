// Function to open modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    }
    
    // Function to close modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

document.getElementById('modalBtnPolite').onclick = function() {
    openModal('modalPolite'); 
}

document.getElementById('modalBtnCry').onclick = function() {
    openModal('modalCry'); 
}

document.getElementById('modalBtnWar').onclick = function() {
    openModal('modalWar'); 
}
var modal = document.getElementsByClassName("modal");

var btn = document.getElementsByClassName("modalBtn");

var span = document.getElementsByClassName("close");


btn.onclick = function() {
    modal.style.display = "block";
}

  
  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
  
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var closeSpans = document.querySelectorAll('.close');
    
    // Attach click event to each <span> for closing modals
    closeSpans.forEach(function(span) {
        span.onclick = function() {
        var modalId = span.getAttribute('data-modal');
        closeModal(modalId);
    }
});

 // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}

// // Function to open modal
// function openModal(modalId) {
//     var modal = document.getElementById(modalId);
//     modal.style.display = "block";
//     }
    
//     // Function to close modal
//     function closeModal(modalId) {
//     var modal = document.getElementById(modalId);
//     modal.style.display = "none";
//     }
    
//     // Attach click event to Evo 8 button
//     document.getElementById('learnMoreBtnEvo').onclick = function() {
//     openModal('myModalEvo8'); // Make sure this targets the correct modal
//     }
    
    
//     // Attach click event to R6 button
//     document.getElementById('learnMoreBtnR6').onclick = function() {
//     openModal('myModalR6');
//     }
    
    
//     // Attach click event to R6 button
//     document.getElementById('learnMoreBtnHouse').onclick = function() {
//     openModal('myModalHouse');
//     }
    
//     // Get all <span> elements that close modals
//     var closeSpans = document.querySelectorAll('.close');
    
//     // Attach click event to each <span> for closing modals
//     closeSpans.forEach(function(span) {
//     span.onclick = function() {
//     var modalId = span.getAttribute('data-modal');
//     closeModal(modalId);
//     }
//     });
    
//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//     if (event.target.classList.contains('modal')) {
//     closeModal(event.target.id);
//     }
//     }
    
//     function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");