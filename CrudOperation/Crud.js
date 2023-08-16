let data=[
    {name :"Kavin M",age:21},
    {name:'Karthick M',age:21}, 
];

function displayData(){
    const dataRows=document.getElementById("dataRows");
    dataRows.innerHTML="";

    data.forEach((value,index)=>{
        const row=`
        <tr>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>
        <button class="btn btn-info edit-btn" data-index="${index}">Edit</button>
        <button class="btn btn-danger detele-btn data-index="${index}">Delete</button>
        </td>
        </tr>`;
        dataRows.insertAdjacentHTML("beforeend",row);
    });
}

function handleFormSumbit(event){
    event.preventDefault();
    const nameInput=document.getElementById("name");
    const ageInput=document.getElementById("age");

    const name=nameInput.value;
    const age=ageInput.value;

    data.push({name,age});

     nameInput.value='';
     ageInput.value='';

     displayData();
}

// document.getElementById("CrudForm");
// document.addEventListener("submit",handleFormSumbit);
displayData();