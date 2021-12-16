var enter = document.getElementById("submit");
let datatable = document.querySelector('#table');
var totaldata = 0;
let studentdata = [];

enter.addEventListener("click", () => {

    if (document.getElementById('name').value == "" || document.getElementById('mark').value =="" ){
        alert("Please insert all the field");
        return false;
    }

    let data = {
        Names: document.getElementById('name').value,
        Marks: document.getElementById('mark').value
    }
    
    studentdata.push(data);

    let confirmation = confirm("Click Ok if you want to add more mark");

    //if user want to add more mark
    if (confirmation) {

        //clear placeholder
        document.getElementById('name').value = '';
        document.getElementById('mark').value = '';
        alert("Enter another mark");

        //number or looping ref: index
        totaldata++;

    //if user doesn't want to add more mark
    } else {

        for(i=0; i <=totaldata; i++){

            if (studentdata[i].marks <= 100 && studentdata[i].marks >= 90) {
                studentdata[i]['Grades'] = 'A';

            }else if (studentdata[i].marks <= 89 && studentdata[i].marks >= 80) {
                studentdata[i]['Grades'] = 'B';

            }else if (studentdata[i].marks <= 79 && studentdata[i].marks >= 70) {
                studentdata[i]['Grades'] = 'C';
                
            }else if (studentdata[i].marks <= 69 && studentdata[i].marks >= 60) {
                studentdata[i]['Grades'] = 'D';
                
            } else{
                studentdata[i]['Grades'] = 'F';
            }
        }
        //check log
        console.log(studentdata);
        
        let head = ['Names', 'Marks', 'Grades'];
        let table = document.createElement('table');
        let headerRow = document.createElement('tr');

        head.forEach(headerText => {
            let header = document.createElement('th');
            let textNode = document.createTextNode(headerText);

            header.appendChild(textNode);
            headerRow.appendChild(header);
        });

        table.appendChild(headerRow);

        studentdata.forEach(std =>{
            let row = document.createElement('tr');

            Object.values(std).forEach(text =>{
                let cell = document.createElement('td');
                let textNode = document.createTextNode(text);
                
                cell.appendChild(textNode);
                row.appendChild(cell);
            })
            table.appendChild(row);
        });
        datatable.appendChild(table);
    }
})