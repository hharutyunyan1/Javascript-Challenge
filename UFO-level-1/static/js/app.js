// from data.js
        var tableData = data;
// YOUR CODE HERE!
        var tbody = d3.select('tbody');

function ufoTable(data){

    tbody.html('');

    data.forEach((input) => {

        var row = tbody.append('tr');

    Object.values(input).forEach((value) => {
           
        var cell = row.append('td');
    
        cell.text(value);

        });

    });

};

ufoTable(tableData);

function clickButton() {
    
    d3.event.preventDefault();

        var dateInput = d3.select('#datetime').property('value');

        var filteredInputData = tableData;

    switch(dateInput) {

        case dateInput:

            filteredInputData = filteredInputData.filter((inputRow) => inputRow.datetime === dateInput); 

    };

    ufoTable(filteredInputData);
    
};

d3.selectAll('#filter-btn').on('click', clickButton);