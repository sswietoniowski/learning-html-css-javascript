window.onload = function() {
    const password = document.getElementById('password');
    const okButton = document.getElementById('ok-button');
    const launchButton = document.getElementById('launch-button');
    const checkButtons = document.querySelectorAll('.check-button');
    const levers = document.querySelectorAll('.lever');

    const disableLaunchPanel = () => {
        launchButton.disabled = true;
        checkButtons.forEach(button => button.disabled = true);
        levers.forEach(lever => lever.disabled = true);
    }

    const enableLaunchPanel = () => {
        launchButton.disabled = false;
        checkButtons.forEach(button => button.disabled = false);
        levers.forEach(lever => lever.disabled = false);
    }

    const disablePasswordCheck = () => {
        password.disabled = true;
        okButton.disabled = true;
    }

    okButton.onclick = () => {
        if (password.value === 'TrustNo1') {
            enableLaunchPanel();
            disablePasswordCheck();
        }
    }

    disableLaunchPanel();
}