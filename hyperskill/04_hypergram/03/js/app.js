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

    brightnessSlider.addEventListener('input', function() {
        applyFilters();
    });

    contrastSlider.addEventListener('input', function() {
        applyFilters();
    });

    transparentSlider.addEventListener('input', function() {
        applyFilters();
    });

    function applyFilters() {
        if (!imgData) return;

        const brightness = brightnessSlider.value;
        const contrast = contrastSlider.value;
        const transparency = transparentSlider.value;
        const contrastFactor = (259 * (contrast + 255)) / (255 * (259 - contrast));

        const newData = new ImageData(new Uint8ClampedArray(imgData.data), imgData.width, imgData.height);

        for (let i = 0; i < newData.data.length; i += 4) {
            // Apply contrast
            newData.data[i] = truncate(contrastFactor * (newData.data[i] - 128) + 128);
            newData.data[i + 1] = truncate(contrastFactor * (newData.data[i + 1] - 128) + 128);
            newData.data[i + 2] = truncate(contrastFactor * (newData.data[i + 2] - 128) + 128);

            // Apply brightness
            newData.data[i] = truncate(newData.data[i] + brightness);
            newData.data[i + 1] = truncate(newData.data[i + 1] + brightness);
            newData.data[i + 2] = truncate(newData.data[i + 2] + brightness);

            // Apply transparency
            newData.data[i + 3] = newData.data[i + 3] * transparency;
        }

        ctx.putImageData(newData, 0, 0);
    }

    function truncate(value) {
        if (value < 0) return 0;
        if (value > 255) return 255;
        return value;
    }
};