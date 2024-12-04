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

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("myForm").disabled = true;
    showModal("Submitting form...");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.onreadystatechange = function() {
        var response = xhr.responseText;
        showModal(response);
        document.getElementById("myForm").reset();
    };
    xhr.send(new FormData(this));

});