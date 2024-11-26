    // Preview uploaded profile picture
    function previewImage(event) {
        const reader = new FileReader();
        reader.onload = function() {
            const imgElement = document.getElementById('profileImage');
            imgElement.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);