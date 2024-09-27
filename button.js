

const buttons = document.querySelectorAll('.scorebutton');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        var score = button.innerHTML;
        ++score;
        if (button.classList.contains('grandfinal')) {
            if (score == 4) {
                score = 0;
            }
        }
        else if (score == 3) {
            score = 0;
        }
        button.innerHTML = score;
    });
});

