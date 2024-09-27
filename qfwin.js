const qf = document.getElementById('qs');
const qfmatchups = qf.querySelectorAll('.matchup');


qfmatchups.forEach(matchup => {
    var playercount = 0;
    matchup.addEventListener('drop', () => {
        playercount++;
        console.log(playercount);
        if (playercount == 2) {
            var p1 = matchup.querySelector('.p1tab');
            var p2 = matchup.querySelector('.p2tab');
            p1 = p1.querySelector('.box');
            p2 = p2.querySelector('.box');
            var p1clone = p1.cloneNode(true);
            var p2clone = p2.cloneNode(true);
            var b1 = matchup.querySelector('.player1');
            var b2 = matchup.querySelector('.player2');
            console.log(b1.innerHTML);
            matchup.addEventListener('click', () => {
                if (b1.innerHTML == 2) {

                    matchup.querySelector('.qfwin').appendChild(p1clone);
                }
                else if (b2.innerHTML == 2) {
                    matchup.querySelector('.qfwin').appendChild(p2clone);
                }
                else if (b2.innerHTML == 0) {
                    matchup.querySelector('.qfwin').innerHTML = null;
                }
                else if (b1.innerHTML == 0) {
                    matchup.querySelector('.qfwin').innerHTML = null;
                }

            })

        }
    });


})




