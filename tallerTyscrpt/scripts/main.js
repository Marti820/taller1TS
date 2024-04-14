import { series } from './data.js';
var seriesTableBody = document.getElementById('cuerpoTabla');
poblarTabla(series);
function poblarTabla(series) {
    var avg = 0;
    var tot = 0;
    var tot2 = 0;
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td>").concat(serie.titulo, "</td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>");
        seriesTableBody.appendChild(row);
        tot += serie.temporadas;
        tot2 += 1;
    });
    avg = tot / tot2;
    var row = document.createElement('tr');
    row.innerHTML = "\n        <td scope=\"row\" colspan=\"4\" id= avg>El numero promedio de temporadas es ".concat(avg, "</td>");
    seriesTableBody.appendChild(row);
}
