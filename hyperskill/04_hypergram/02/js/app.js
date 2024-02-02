window.onload = function() {
    const uploadButton = document.querySelector('#upload-button');
    const fileInput = document.querySelector('#file-input');
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    uploadButton.addEventListener('click', function (e) {
        e.preventDefault();
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            const img = new Image();
            img.src = reader.result;

            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
            };
        });

        reader.readAsDataURL(file);
    });
};