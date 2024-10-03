// Modals

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    }
    
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

  
span.onclick = function() {
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var closeSpans = document.querySelectorAll('.close');
    
    closeSpans.forEach(function(span) {
        span.onclick = function() {
        var modalId = span.getAttribute('data-modal');
        closeModal(modalId);
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}


// Drop down menu
function menuFunction() {
    var x = document.getElementById("dropMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Dark mode
function toggleDarkMode() {
    const body = document.body;
    const root = document.documentElement;

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        root.style.setProperty('--light-color', '#bdbdbd'); 
        root.style.setProperty('--dark-color', '#364943'); 
    } else {
        root.style.setProperty('--light-color', '#f5f5f5'); 
        root.style.setProperty('--dark-color', '#1E293B'); 
    }
}