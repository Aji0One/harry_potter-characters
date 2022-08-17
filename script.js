var main=document.createElement("div");
main.id="main";

var title=document.createElement("h1");
title.id="title";
title.innerHTML="Harry Potter Character info";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","house");
input.setAttribute("placeholder","Enter House name. ex:gryffindor");

var button=document.createElement("button");
button.id="button";
button.setAttribute("type","button");
button.addEventListener("click",foo);
button.innerHTML="Search";

main.append(title,input,button);

var container=document.createElement("div");
container.classList.add("container");


var row=document.createElement("div");
row.classList.add("row");


container.append(row);

document.body.append(main,container);

async function foo(){
    var name=document.getElementById("house").value;
    var res=await fetch(`http://hp-api.herokuapp.com/api/characters/house/${name}`);
    var res=await res.json();
    res.forEach(ele =>{
        var column=document.createElement("div");
        column.classList.add("col-sm-4");
        column.innerHTML="";
        column.innerHTML=`<div class="card" style="width: 18rem;">
        <img src=${ele.image} class="card-img-top" alt="pic of character">
   
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${ele.name}</li>
          <li class="list-group-item">Gender: ${ele.gender}</li>
          <li class="list-group-item">Date of Birth: ${ele.dateOfBirth}</li>
          <li class="list-group-item">Patronus: ${ele.patronus}</li>
          <li class="list-group-item">Wand Core: ${ele.wand.core}</li>
        </ul>
        
      </div>`;
      row.append(column);

    })
}

