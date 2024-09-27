const f = document.getElementById('fgf');
const match = f.querySelector('.matchup');
const finalbuttons = f.querySelectorAll('.fbutton');

finalbuttons.forEach(button => {
    button.addEventListener('click', () => {
        var button1 = match.querySelector('.final1');
        var button2 = match.querySelector('.final2');
        var finalist1 = match.querySelector('.p1tab');
        var finalist2 = match.querySelector('.p2tab');
        finalist1 = finalist1.querySelector('.box');
        finalist2 = finalist2.querySelector('.box');
        var finalist1clone = finalist1.cloneNode(true);
        var finalist2clone = finalist2.cloneNode(true);
        if (button1.innerHTML == 2) {
            match.querySelector('.win').appendChild(finalist1clone);
        }
        else if (button2.innerHTML == 2) {
            match.querySelector('.win').appendChild(finalist2clone);
        }
        else if (button2.innerHTML == 0) {
            match.querySelector('.win').innerHTML = null;
        }
        else if (button1.innerHTML == 0) {
            match.querySelector('.win').innerHTML = null;
        }
    });
});
