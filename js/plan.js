const fetchURL = "http://www.fulek.com/VUA/SUPIT/";
var details = [];


$(function () {

    $("#table").css("display", "none");

    var getNazivKolegija = {

        url: fetchURL + 'GetNastavniPlan',

        getValue: "label",

        list: {
            onClickEvent: async function () {
                var selectedItemValue = $("#nazivKolegija").getSelectedItemData();

                await getCollegeDetails(selectedItemValue.value);

            },
            match: {
                enabled: true
            }
        },

        theme: "square"
    };

    $("#nazivKolegija").easyAutocomplete(getNazivKolegija);
});

async function getCollegeDetails(val) {

    $.ajax({

        url: fetchURL + 'GetKolegij/' + val,
        type: 'GET',
        dataType: 'json',
        async: true,
        success: function (data) {
            details.push(data);
            drawTable(details);
        },
        error: function (request, error) {
            alert("Dogodila se pogreška prilikom dohvaćanja informacija za taj kolegij!");
            console.error(error);
            return false;
        }
    });
}

function drawTable(items) {

    items.length < 1 ? $("#table").css('display', 'none') : $("#table").css('display', '');

    
    var table = document.getElementById('tableContents');

    var tableContents = '';
    items.forEach(element => {
        tableContents += '<tr><td>' + element.kolegij + '</td><td>' + element.ects + '</td><td>' + element.sati + '</td><td>'
            + element.predavanja + '</td><td>' + element.vjezbe + '</td><td>' + element.tip + '</td>';
        tableContents += "<td><button id='" + element.id + "' onclick = 'removeItem(" + element.id + ")' class='btn btn-danger'> Obriši</button></td></tr>";
        
    });
    var td = "</td><td>"; 
    tableContents += "<tfoot><td><b>Ukupno:</b>" + td + items.sum("ects") + td + items.sum("sati") +"<td colspan='4'></td></tfoot>";
    table.innerHTML = tableContents;
}


function removeItem(val) {

    details = details.filter(item => item.id !== val)
    drawTable(details); // refresh table 
}

Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}
