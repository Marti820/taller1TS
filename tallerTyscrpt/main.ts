import { series } from './data.js';
import { Serie } from './serie.js';


let seriesTableBody: HTMLElement = document.getElementById('cuerpoTabla')!;

poblarTabla(series);
function poblarTabla(series: Serie[]):void {
    let avg = 0;
    let tot = 0;
    let tot2 = 0;
    series.forEach(serie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td>${serie.titulo}</td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>`;
        seriesTableBody.appendChild(row);
        tot += serie.temporadas;
        tot2 += 1;
    });
    avg = tot/tot2;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td scope="row" colspan="4" id= avg>El numero promedio de temporadas es ${avg}</td>`
    seriesTableBody.appendChild(row);
}