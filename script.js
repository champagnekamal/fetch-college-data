// var name = window.prompt("")


var button = document.getElementById('click');
var table = document.querySelector('.table')

button.addEventListener("click", displaycollege);

function displaycollege() {
    var URL = "http://universities.hipolabs.com/search?country=india";
    fetch(URL).then(res=> res.json()).then((data)=>{console.log(data);
    for(i=0;i<data.lenght;i++){
   var tr = document.createElement("tr");
   var td = document.createElement("td");
   var span1 = document.createElement("td");
   var span2 = document.createElement("td");


   span1.innerText = data[i].name;
   span2.innerText = data[i].domains;


   table.appendChild(tr);
   tr.appendChild(td);
   td.appendChild(span1);
   td.appendChild(span2);
}
})

    }