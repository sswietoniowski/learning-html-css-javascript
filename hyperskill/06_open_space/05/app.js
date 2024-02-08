window.onload = function() {
    const password = document.getElementById('password');
    const okButton = document.getElementById('ok-button');
    const launchButton = document.getElementById('launch-button');
    const checkButtons = document.querySelectorAll('.check-button');
    const levers = document.querySelectorAll('.lever');
    const rocket = document.querySelector('.rocket');
    const controlPanelInner = document.querySelector('.control-panel__inner');

    const disableLaunchPanel = () => {
        launchButton.disabled = true;
        checkButtons.forEach(button => button.disabled = true);
        levers.forEach(lever => lever.disabled = true);
    }

    const enableLaunchPanel = () => {
        checkButtons.forEach(button => button.disabled = false);
        levers.forEach(lever => lever.disabled = false);
    }

    const disablePasswordCheck = () => {
        password.disabled = true;
        okButton.disabled = true;
    }

    const enableLaunchButton = () => {
        const allCheckButtonsAreChecked = Array.from(checkButtons).every(button => button.checked);
        const allLeversAreMax = Array.from(levers).every(lever => lever.value === '100');

        if (allCheckButtonsAreChecked && allLeversAreMax) {
            launchButton.disabled = false;
        } else {
            launchButton.disabled = true;
        }
    }

    okButton.onclick = () => {
        if (password.value === 'TrustNo1') {
            enableLaunchPanel();
            disablePasswordCheck();
        }
    }

    disableLaunchPanel();

    checkButtons.forEach(button => button.onclick = enableLaunchButton);
    levers.forEach(lever => lever.oninput = enableLaunchButton);
    controlPanelInner.onchange = enableLaunchButton;

    launchButton.addEventListener('click', () => {
        if (!rocket) {
            console.log('Rocket is not found');
            return;
        } else {
            console.log('Rocket is launching...');
        }

        let position = 0;
        const intervalId = setInterval(() => {
            if (position >= window.innerWidth) {
                clearInterval(intervalId);
            } else {
                position += 10;
                rocket.style.left = position + 'px';
                rocket.style.bottom = (position * Math.tan(45 * Math.PI / 180)) + 'px';
            }
        }, 100);
    });
}