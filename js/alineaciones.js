const local = document.querySelector('#local');
const visitante = document.querySelector('#visitante');
let html = "";
let fn = empleado => {
    const { n, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11 } = empleado

    html =
        `<b id="seleccion">${n}</b></br>
        <b id="del">${n11}</b></br>
        <b id="del">${n10}</b></br>
        <b id="del">${n9}</b></br>
        <b id="med">${n8}</b></br>
        <b id="med">${n7}</b></br>
        <b id="med">${n6}</b></br>
        <b id="def">${n5}</b></br>
        <b id="def">${n4}</b></br>
        <b id="def">${n3}</b></br>
        <b id="def">${n2}</b></br>
        <b id="arq">${n1}</b></br>
        <b id="dt">${n0}</b>`
};

const locales = (locales) => { locales.forEach(fn); local.innerHTML = html; };
const visitantes = (visitantes) => { visitantes.forEach(fn); visitante.innerHTML = html; };

let fetchLocal;
let fetchVisitante;

const locale = () => { fetch(fetchLocal).then((respuesta) => { return respuesta.json() }).then((datos) => { locales(datos) }).catch((error) => { console.log(error) }) };
const visite = () => { fetch(fetchVisitante).then((respuesta) => { return respuesta.json() }).then((datos) => { visitantes(datos) }).catch((error) => { console.log(error) }) };

const grupoa0 = () => { fetchLocal = "../json/qatar.json"; fetchVisitante = "../json/ecuador.json"; locale(); visite() }
const grupoa1 = () => { fetchLocal = "../json/senegal.json"; fetchVisitante = "../json/paisesbajos.json"; locale(); visite() }
const grupoa2 = () => { fetchLocal = "../json/paisesbajos.json"; fetchVisitante = "../json/ecuador.json"; locale(); visite() }
const grupoa3 = () => { fetchLocal = "../json/qatar.json"; fetchVisitante = "../json/senegal.json"; locale(); visite() }
const grupoa4 = () => { fetchLocal = "../json/paisesbajos.json"; fetchVisitante = "../json/qatar.json"; locale(); visite() }
const grupoa5 = () => { fetchLocal = "../json/ecuador.json"; fetchVisitante = "../json/senegal.json"; locale(); visite() }

const grupob0 = () => { fetchLocal = "../json/england.json"; fetchVisitante = "../json/iran.json"; locale(); visite() }
const grupob1 = () => { fetchLocal = "../json/usa.json"; fetchVisitante = "../json/gales.json"; locale(); visite() }
const grupob2 = () => { fetchLocal = "../json/gales.json"; fetchVisitante = "../json/iran.json"; locale(); visite() }
const grupob3 = () => { fetchLocal = "../json/england.json"; fetchVisitante = "../json/usa.json"; locale(); visite() }
const grupob4 = () => { fetchLocal = "../json/gales.json"; fetchVisitante = "../json/england.json"; locale(); visite() }
const grupob5 = () => { fetchLocal = "../json/iran.json"; fetchVisitante = "../json/usa.json"; locale(); visite() }

const grupoc0 = () => { fetchLocal = "../json/argentina.json"; fetchVisitante = "../json/arabia.json"; locale(), visite() };
const grupoc1 = () => { fetchLocal = "../json/mexico.json"; fetchVisitante = "../json/polonia.json"; locale(), visite() };
const grupoc2 = () => { fetchLocal = "../json/polonia.json"; fetchVisitante = "../json/arabia.json"; locale(), visite() };
const grupoc3 = () => { fetchLocal = "../json/argentina.json"; fetchVisitante = "../json/mexico.json"; locale(), visite() };
const grupoc4 = () => { fetchLocal = "../json/polonia.json"; fetchVisitante = "../json/argentina.json"; locale(), visite() };
const grupoc5 = () => { fetchLocal = "../json/arabia.json"; fetchVisitante = "../json/mexico.json"; locale(), visite() };

const grupod0 = () => { fetchLocal = "../json/francia.json"; fetchVisitante = "../json/australia.json"; locale(); visite() }
const grupod1 = () => { fetchLocal = "../json/dinamarca.json"; fetchVisitante = "../json/tunez.json"; locale(); visite() }
const grupod2 = () => { fetchLocal = "../json/tunez.json"; fetchVisitante = "../json/australia.json"; locale(); visite() }
const grupod3 = () => { fetchLocal = "../json/francia.json"; fetchVisitante = "../json/dinamarca.json"; locale(); visite() }
const grupod4 = () => { fetchLocal = "../json/tunez.json"; fetchVisitante = "../json/francia.json"; locale(); visite() }
const grupod5 = () => { fetchLocal = "../json/australia.json"; fetchVisitante = "../json/dinamarca.json"; locale(); visite() }

const grupoe0 = () => { fetchLocal = "../json/españa.json"; fetchVisitante = "../json/costarica.json"; locale(); visite() }
const grupoe1 = () => { fetchLocal = "../json/alemania.json"; fetchVisitante = "../json/japon.json"; locale(); visite() }
const grupoe2 = () => { fetchLocal = "../json/japon.json"; fetchVisitante = "../json/costarica.json"; locale(); visite() }
const grupoe3 = () => { fetchLocal = "../json/españa.json"; fetchVisitante = "../json/alemania.json"; locale(); visite() }
const grupoe4 = () => { fetchLocal = "../json/japon.json"; fetchVisitante = "../json/españa.json"; locale(); visite() }
const grupoe5 = () => { fetchLocal = "../json/costarica.json"; fetchVisitante = "../json/alemania.json"; locale(); visite() }

const grupof0 = () => { fetchLocal = "../json/belgica.json"; fetchVisitante = "../json/canada.json"; locale(); visite() }
const grupof1 = () => { fetchLocal = "../json/marruecos.json"; fetchVisitante = "../json/croacia.json"; locale(); visite() }
const grupof2 = () => { fetchLocal = "../json/croacia.json"; fetchVisitante = "../json/canada.json"; locale(); visite() }
const grupof3 = () => { fetchLocal = "../json/belgica.json"; fetchVisitante = "../json/marruecos.json"; locale(); visite() }
const grupof4 = () => { fetchLocal = "../json/croacia.json"; fetchVisitante = "../json/belgica.json"; locale(); visite() }
const grupof5 = () => { fetchLocal = "../json/canada.json"; fetchVisitante = "../json/marruecos.json"; locale(); visite() }

const grupog0 = () => { fetchLocal = "../json/brasil.json"; fetchVisitante = "../json/serbia.json"; locale(); visite() }
const grupog1 = () => { fetchLocal = "../json/suiza.json"; fetchVisitante = "../json/camerun.json"; locale(); visite() }
const grupog2 = () => { fetchLocal = "../json/camerun.json"; fetchVisitante = "../json/serbia.json"; locale(); visite() }
const grupog3 = () => { fetchLocal = "../json/brasil.json"; fetchVisitante = "../json/suiza.json"; locale(); visite() }
const grupog4 = () => { fetchLocal = "../json/camerun.json"; fetchVisitante = "../json/brasil.json"; locale(); visite() }
const grupog5 = () => { fetchLocal = "../json/serbia.json"; fetchVisitante = "../json/suiza.json"; locale(); visite() }

const grupoh0 = () => { fetchLocal = "../json/portugal.json"; fetchVisitante = "../json/ghana.json"; locale(); visite() }
const grupoh1 = () => { fetchLocal = "../json/uruguay.json"; fetchVisitante = "../json/coreadelsur.json"; locale(); visite() }
const grupoh2 = () => { fetchLocal = "../json/coreadelsur.json"; fetchVisitante = "../json/ghana.json"; locale(); visite() }
const grupoh3 = () => { fetchLocal = "../json/portugal.json"; fetchVisitante = "../json/uruguay.json"; locale(); visite() }
const grupoh4 = () => { fetchLocal = "../json/coreadelsur.json"; fetchVisitante = "../json/portugal.json"; locale(); visite() }
const grupoh5 = () => { fetchLocal = "../json/ghana.json"; fetchVisitante = "../json/uruguay.json"; locale(); visite() }










