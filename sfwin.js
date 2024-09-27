const sf = document.querySelectorAll('.semifinal');
const final = document.getElementById('fgf');

const finalmatch = final.querySelector('.matchup');

console.log('hi');

sf.forEach(semi => {
    var ready = false;
    var sfmatchups = semi.querySelectorAll('.dropzone');
    const winbuttons = semi.querySelectorAll('.winbutton');
    winbuttons.forEach(winbutton => {
        winbutton.addEventListener('click', () => {
            var winbutton1 = semi.querySelector('.winbutton1');
            var winbutton2 = semi.querySelector('.winbutton2');
            var winslot1 = semi.querySelector('.win1');
            // if (winslot1.innerHTML != null) {
            //     console.log('gfdsfdsfds');
            // }
            var winslot2 = semi.querySelector('.win2');
            winslot1 = winslot1.querySelector('.box');
            // if (winslot1.innerHTML != null) {
            //     console.log('gfdsfdsfds');
            // }
            winslot2 = winslot2.querySelector('.box');
            var winclone1 = winslot1.cloneNode(true);
            if (winclone1.innerHTML != null) {
                console.log(winclone1.innerHTML);
            }
            var winclone2 = winslot2.cloneNode(true);
            console.log(winbutton1.innerHTML);
            if (winbutton1.innerHTML == 2) {
                if (semi.id == "semi1") {
                    finalmatch.querySelector('.p1tab').appendChild(winclone1);
                }
                else {
                    finalmatch.querySelector('.p2tab').appendChild(winclone1);
                }
            }
            else if (winbutton2.innerHTML == 2) {
                if (semi.id == "semi1") {
                    finalmatch.querySelector('.p1tab').appendChild(winclone2);
                }
                else {
                    finalmatch.querySelector('.p2tab').appendChild(winclone2);
                }
            }
            else if (winbutton1.innerHTML == 0) {
                if (semi.id == "semi1") {
                    finalmatch.querySelector('.p1tab2').innerHTML = null;
                }
                else {
                    finalmatch.querySelector('.p2tab').innerHTML = null;
                }
            }
            else if (winbutton2.innerHTML == 0) {
                if (semi.id == "semi1") {
                    finalmatch.querySelector('.p1tab').innerHTML = null;
                }
                else {
                    finalmatch.querySelector('.p2tab').innerHTML = null;
                }
            }
        });
    });

});
