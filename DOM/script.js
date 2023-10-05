function CrearTabla(filas, columnas, encabezado) {

    let divTabla = document.getElementById('divTabla');

    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla");
    tabla.setAttribute("border", "2");
    tabla.setAttribute("bordercolor", "blue");
    tabla.setAttribute("bgcolor", "lightblue");
   
    let tblhead = document.createElement('thead');
    let filahead = document.createElement('tr');
    for (let i in encabezado) {
        let celdahead = document.createElement('th');
        let txtceldahead = document.createTextNode(encabezado[i]);
        celdahead.appendChild(txtceldahead);
        filahead.appendChild(celdahead);
    }
     
    tblhead.appendChild(filahead);
    tabla.appendChild(tblhead);

    let tblbody = document.createElement("tbody");
    for (let i = 0; i < filas; i++) {

        let fila = document.createElement('tr');

        for (let j = 0; j < columnas; j++) {
            
            let celda = document.createElement("td");
            let txtcelda = document.createTextNode(`celda ${i} ${j}`);
            celda.appendChild(txtcelda);
            fila.appendChild(celda);
        }

        tblbody.appendChild(fila);
    }

    tabla.appendChild(tblbody)
    divTabla.appendChild(tabla);

}

CrearTabla(6,7,['E0','E1','E2','E3','E4','E5','E6']);