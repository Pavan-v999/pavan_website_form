function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "block";
    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
}

var form=document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    showModal("Submitting form...");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.onreadystatechange = function() {
        var response = xhr.responseText;
        showModal(response);
        form.reset();
    };
    xhr.send(new FormData(this));

});