const form = document.querySelector('#form');
const nuevo = document.querySelector('#nuevoCampeon');
const enviar = document.querySelector('#enviar');
const campeon = document.querySelector('#campeon');

nuevo.addEventListener('input', () => {
    localStorage.setItem("Campeón", nuevo.value)
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // console.log(nuevo.value);
    if (nuevo.value === "ARGENTINA") {
        const p = document.querySelector("#campeon");
        p.textContent += "ANULO MUFA";
        localStorage.setItem("ARG CAMPEÓN?", "EL DIEGOTE")
        nuevo.value = "";
        nuevo.disabled = true
    } else if (nuevo.value === "argentina") {
        const p = document.querySelector("#campeon");
        p.textContent += "ANULO MUFA";
        localStorage.setItem("ARG CAMPEÓN?", "EL DIEGOTE")
        nuevo.value = "";
        nuevo.disabled = true
    } if (nuevo.value === "Argentina") {
        const p = document.querySelector("#campeon");
        p.textContent += "ANULO MUFA";
        localStorage.setItem("ARG CAMPEÓN?", "EL DIEGOTE")
        nuevo.value = "";
        nuevo.disabled = true
    } else {
        const p = document.querySelector('#campeon')
        p.textContent += nuevo.value;
        nuevo.value = " ";
        nuevo.disabled = true
    }
}
);

const segundo = 1000
const minuto = segundo * 60
const hora = minuto * 60
const dia = hora * 24

const worldCup = new Date('2026-06-03 12:00:00')

function zero(number) {
    return String(number).padStart(2, '0')
}

function WorldCupDate() {
    const currentDate = new Date().getTime()
    return worldCup.getTime() - currentDate
}

function setcontador(element, value) {
    document.querySelector(`.${element}`).innerHTML = value
}

function diffdia(diff) {
    return Math.floor(diff / dia)
}

function diffhora(diff) {
    const round = Math.floor(diff % dia / hora)
    return zero(round)
}

function diffminuto(diff) {
    const round = Math.floor(diff % hora / minuto)
    return zero(round)
}

function diffsegundo(diff) {
    const round = Math.floor(diff % minuto / segundo)
    return zero(round)
}

function contador() {
    const diff = WorldCupDate()

    setcontador('dias', diffdia(diff))
    setcontador('horas', diffhora(diff))
    setcontador('minutos', diffminuto(diff))
    setcontador('segundos', diffsegundo(diff))
}

window.load = setInterval(contador, 1000)




const grupoA = [SeleccionA = "QATAR", SeleccionB = "ECUADOR", SeleccionC = "SENEGAL", SeleccionD = "PAISES BAJOS"]
const grupoB = [SeleccionA = "INGLATERRA", SeleccionB = "IRAN", SeleccionC = "ESTADOS UNIDOS", SeleccionD = "GALES"]
const grupoC = [SeleccionA = "ARGENTINA", SeleccionB = "ARABIA SAUDITA", SeleccionC = "MÉXICO", SeleccionD = "POLONIA"]
const grupoD = [SeleccionA = "FRANCIA", SeleccionB = "AUSTRALIA", SeleccionC = "DINAMARCA", SeleccionD = "TUNEZ"]
const grupoE = [SeleccionA = "ESPAÑA", SeleccionB = "COSTA RICA", SeleccionC = "ALEMANIA", SeleccionD = "JAPÓN"]
const grupoF = [SeleccionA = "BÉLGICA", SeleccionB = "CANADÁ", SeleccionC = "MARRUECOS", SeleccionD = "CROACIA"]
const grupoG = [SeleccionA = "BRASIL", SeleccionB = "SERBIA", SeleccionC = "SUIZA", SeleccionD = "CAMERUN"]
const grupoH = [SeleccionA = "PORTUGAL", SeleccionB = "GHANA", SeleccionC = "URUGUAY", SeleccionD = "COREA DEL SUR"]

const primerGrupo = JSON.stringify(grupoA)
const segundoGrupo = JSON.stringify(grupoB)
const tercerGrupo = JSON.stringify(grupoC)
const cuartoGrupo = JSON.stringify(grupoD)
const quintoGrupo = JSON.stringify(grupoE)
const sextoGrupo = JSON.stringify(grupoF)
const septimoGrupo = JSON.stringify(grupoG)
const octavoGrupo = JSON.stringify(grupoH)

localStorage.setItem("Grupo A:", primerGrupo)
localStorage.setItem("Grupo B:", segundoGrupo)
localStorage.setItem("Grupo C:", tercerGrupo)
localStorage.setItem("Grupo D:", cuartoGrupo)
localStorage.setItem("Grupo E:", quintoGrupo)
localStorage.setItem("Grupo F:", sextoGrupo)
localStorage.setItem("Grupo G:", septimoGrupo)
localStorage.setItem("Grupo H:", octavoGrupo)
