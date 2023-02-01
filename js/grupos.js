const equipo1 = [document.querySelector('#A1'), document.querySelector('#A2'), document.querySelector('#A3')];
const equipo2 = [document.querySelector('#B1'), document.querySelector('#B2'), document.querySelector('#B3')];
const equipo3 = [document.querySelector('#C1'), document.querySelector('#C2'), document.querySelector('#C3')];
const equipo4 = [document.querySelector('#D1'), document.querySelector('#D2'), document.querySelector('#D3')];

const body = document.querySelector('#section1');
const header = document.querySelector('#header')
const alineacionContainer = document.querySelector('#alineacionContainer');
const btnVolver = document.querySelector('#close');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

const btn = [
    document.querySelector('#button1'),
    document.querySelector('#button2'),
    document.querySelector('#button3'),
    document.querySelector('#button4'),
    document.querySelector('#button5'),
    document.querySelector('#button6'),
];

const a0 = document.querySelector('#grupoa0');
const a1 = document.querySelector('#grupoa1');
const a2 = document.querySelector('#grupoa2');
const a3 = document.querySelector('#grupoa3');
const a4 = document.querySelector('#grupoa4');
const a5 = document.querySelector('#grupoa5');

const b0 = document.querySelector('#grupob0');
const b1 = document.querySelector('#grupob1');
const b2 = document.querySelector('#grupob2');
const b3 = document.querySelector('#grupob3');
const b4 = document.querySelector('#grupob4');
const b5 = document.querySelector('#grupob5');

const c0 = document.querySelector('#grupoc0');
const c1 = document.querySelector('#grupoc1');
const c2 = document.querySelector('#grupoc2');
const c3 = document.querySelector('#grupoc3');
const c4 = document.querySelector('#grupoc4');
const c5 = document.querySelector('#grupoc5');

const d0 = document.querySelector('#grupod0');
const d1 = document.querySelector('#grupod1');
const d2 = document.querySelector('#grupod2');
const d3 = document.querySelector('#grupod3');
const d4 = document.querySelector('#grupod4');
const d5 = document.querySelector('#grupod5');

const e0 = document.querySelector('#grupoe0');
const e1 = document.querySelector('#grupoe1');
const e2 = document.querySelector('#grupoe2');
const e3 = document.querySelector('#grupoe3');
const e4 = document.querySelector('#grupoe4');
const e5 = document.querySelector('#grupoe5');

const f0 = document.querySelector('#grupof0');
const f1 = document.querySelector('#grupof1');
const f2 = document.querySelector('#grupof2');
const f3 = document.querySelector('#grupof3');
const f4 = document.querySelector('#grupof4');
const f5 = document.querySelector('#grupof5');

const g0 = document.querySelector('#grupog0');
const g1 = document.querySelector('#grupog1');
const g2 = document.querySelector('#grupog2');
const g3 = document.querySelector('#grupog3');
const g4 = document.querySelector('#grupog4');
const g5 = document.querySelector('#grupog5');

const h0 = document.querySelector('#grupoh0');
const h1 = document.querySelector('#grupoh1');
const h2 = document.querySelector('#grupoh2');
const h3 = document.querySelector('#grupoh3');
const h4 = document.querySelector('#grupoh4');
const h5 = document.querySelector('#grupoh5');

document.addEventListener('DOMContentLoaded', function () {
    let parent = document.querySelector('.alineacionContainer'),
        topPanel = parent.querySelector('.top'),
        mover = parent.querySelector('.mover'),
        skewHack = 0,
        delta = 0;

    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    };

    parent.addEventListener('mousemove', function (event) {

        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        mover.style.left = event.clientX + delta + 'px';

        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});