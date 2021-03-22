function Cadastrar(){
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var pais = document.getElementById("pais").value;

    var table = document.getElementById('table');
    var row = table.insertRow(1);
    row.innerHTML = "<td>"+ nome +"</td><td>"+ telefone +"</td><td>"+ pais +"</td>";
}