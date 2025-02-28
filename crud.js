let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let age = document.getElementById("age");
  let qualification = document.getElementById("qualification");
  let address = document.getElementById("address");
  let tableform = document.getElementById("tableform");

  if (
    firstname.value === "" ||
    lastname.value === "" ||
    age.value === "" ||
    qualification.value === "" ||
    address.value === ""
  ) {
    alert("fill form");
  } else {

    getDatas();

    tableform.innerHTML +=
    `   
              <tr>
                <td>${totalDatas.firstname}</td>
                <td>${totalDatas.lastname}</td>
                <td>${totalDatas.age}</td>
                <td>${totalDatas.qualification}</td>
                <td>${totalDatas.address}</td>
                <td>
                <button onclick="Edits(this)"class="btn btn-warning">Edit</button>&nbsp;
                <button onclick="deletes(this)"class="btn btn-danger">Delete</button>
                </td>
              </tr>
          
    `
    firstname.value="",
    lastname.value="",
    age.value="",
    qualification.value="",
    address.value=""
    
    
  }


});

let totalDatas={};

let getDatas=()=>
    { 
        totalDatas=
        {
            ['firstname']:firstname.value,
            lastname:lastname.value,
            age:age.value,
            qualification:qualification.value,
            address:address.value
        }
        console.log(totalDatas);
    }


    window.deletes=(btn)=>
      {
        btn.parentElement.parentElement.remove();
      }
   

      window.Edits=(btn)=>
        {
          var edit=btn.parentElement.parentElement;
          
          document.getElementById('firstname').value=edit.cells[0].innerText;
          document.getElementById("lastname").value = edit.cells[1].innerText;
          document.getElementById("age").value = edit.cells[2].innerText;
          document.getElementById("qualification").value = edit.cells[3].innerText;
          document.getElementById("address").value = edit.cells[4].innerText;
        
          // Remove the row from the table
          edit.remove();
        }

