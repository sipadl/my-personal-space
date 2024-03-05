const maindiv = $('.root-game');
let turn = 0;
let skillpoint = 100
let waiting = 10
let enemyHP = 5000
let yourHp = 1000
let screen = 'play'
const typeAttack = [
    {
        damage:[0,5,10,50,100],
        name:"Muda muda muda~!"
    },
    {
        damage:[0,5,10,50,100],
        name:"Road Roller da~!"
    },
    {
        damage:[0,5,10,50,100],
        name:"The World~!"
    },
];
function generateDamage() {
    const damages = Math.floor(Math.random() * (5 - 1  + 1) + 1);
    return damages;
}
$(document).ready(function() {
    renderView(screen);
})

function renderEnemy() {
    return (`<div class="inner-character">
    <img src="https://via.placeholder.com/250" alt=""/>
    ${barHP(enemyHP)}
    </div>`)
}
function die() {
    // kondisi mati
}
function enemyTurn() {
    const typeAttack = [
        {
            damage:[0,5,10,50,100],
            name:"Muda muda muda~!",
            type:"attack"
        },
        {
            damage:[0,5,10,50,100],
            name:"Road Roller da~!",
            type:"attack"

        },
        {
            damage:[0,5,10,50,100],
            name:"The World~!",
            type:"attack"
        },
        {
            damage:[0,5,10,50,100],
            name:"Heavenly Maiden~!",
            type:"heal"
        },
    ];
    const type = Math.floor(Math.random() * (5 - 1  + 1) + 1);
    const damages = Math.floor(Math.random() * (5 - 1  + 1) + 1);
    const attack = typeAttack[type];
    if(attack.type === "heal") {
        enemyHP = enemyHP + attack.damage[damages];
    } else {
        yourHp = yourHp - attack.damage[damages];
    }
}
function countdown() {
    let intervalId;
    if (waiting > 0) {
        intervalId = setInterval(() => {
            console.log(waiting);
            waiting = waiting - 1;
            if (waiting === 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    }
}
function attack(type) {
    console.log(type);
    console.log(enemyHP);
    if(type === 0){
        const damages = generateDamage(typeAttack[0]);
        enemyHP = enemyHP - typeAttack[0].damage[damages]
        skillpoint - 1;
    } else if (type === 1){
        const damages = generateDamage(typeAttack[1]);
        enemyHP = enemyHP - typeAttack[1].damage[damages]
        skillpoint - 1;
    } else if (type === 2){
        const damages = generateDamage(typeAttack[2]);
        enemyHP = enemyHP - typeAttack[2].damage[damages]
        skillpoint - 3;
    } 
    renderEnemy();
    if(enemyHP <= 0){
    // Victory Screen
    } else {
        enemyTurn();
        renderMC();
    }
}
function play() {
    mode = 'play';
    resetScreen();
    renderView(mode);
}
function resetScreen () {
    maindiv.html('')
}
function renderView(type) {
    maindiv.css({'height': '420px', 'width': '100%', 'background-color': 'gray'}); 
    if(type === 'menu'){
        maindiv.css({'height': '420px', 'width': '100%', 'background-color': 'gray'}); 
        maindiv.append(`
        <div class="container d-flex justify-content-center self-align-center">
            <div class="attack-button"
            onclick="play();"
            >
            <img src="https://via.placeholder.com/150" alt="" />
            </div>
        </div>`)
    } else if (type === 'play') {
        maindiv.append(`
        <div class="container-fluid d-flex justify-content-between row p-4">
            <div class="enemy col-3">
            ${renderEnemy()}
            </div>
            <div class="main-character col-3 d-flex justify-content-center">
            ${renderMC()}
            </div>
        </div>
        `)
    }
}
function renderMC() {
    const skills = [];
        typeAttack.forEach((item, i) => {
            skills.push(`
            <div class="attack-button mx-1" onclick="attack(${i})">
            <img src="https://via.placeholder.com/45" alt="${item.name}"/>
            </div>`)
        })
    return (
        `<div class="inner-character text-center">
            <img src="https://via.placeholder.com/150" alt=""/>
            ${barHP(yourHp)}
            <div class="main-skills d-inline d-flex justify-content-center mt-2">
            ${skills.join('\n')}
            </div>
        </div>
        `
        )
}
function barHP(hp) {
    const bar = `
    <div class="bar-hp bg-dark w-100 p-2 mt-2 position-relative">
    </div>
    <small class="position-absolute text-light">${hp}</small>
    `
    return bar;
}

