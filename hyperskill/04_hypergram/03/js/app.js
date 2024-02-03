window.onload = function() {
    const uploadButton = document.querySelector('#upload-button');
    const fileInput = document.querySelector('#file-input');
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const brightnessSlider = document.querySelector('#brightness');
    const contrastSlider = document.querySelector('#contrast');
    const transparentSlider = document.querySelector('#transparent');
    let imgData = null;

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
                imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            };
        });

        reader.readAsDataURL(file);
    });

    brightnessSlider.addEventListener('change', function() {
        applyFilters();
    });

    contrastSlider.addEventListener('change', function() {
        applyFilters();
    });

    transparentSlider.addEventListener('change', function() {
        applyFilters();
    });

    function applyFilters(){
        if (!imgData) return;

        const brightness = parseInt(brightnessSlider.value);
        const contrast = parseInt(contrastSlider.value);
        const transparency = parseFloat(transparentSlider.value);

        const contrastFactor = (259 * (contrast + 255)) / (255 * (259 - contrast));

        const newData = new ImageData(new Uint8ClampedArray(imgData.data), imgData.width, imgData.height);

        for (let i = 0; i < newData.data.length; i += 4) {
            let r = newData.data[i];
            let g = newData.data[i + 1];
            let b = newData.data[i + 2];
            let a = newData.data[i + 3];

            // Apply contrast
            r = contrastFactor * (r - 128) + 128;
            g = contrastFactor * (g - 128) + 128;
            b = contrastFactor * (b - 128) + 128;

            // Apply brightness
            r = truncate(r + brightness);
            g = truncate(g + brightness);
            b = truncate(b + brightness);

            // Apply transparency
            if (transparency !== 1) {
                a = truncate(a * transparency);
            }

            newData.data[i] = r;
            newData.data[i + 1] = g;
            newData.data[i + 2] = b;
            newData.data[i + 3] = a;
        }

        ctx.putImageData(newData, 0, 0);
    }

    function truncate(value) {
        if (value < 0) return 0;
        if (value > 255) return 255;
        return value;
    }
};