console.log("Frontend JavaScript ishga tushdi");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja }</span>
          <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
              Ozgartirish
            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">ochirish</button>
          </div>`;
}

let createField = document.getElementById("create-field");


//----- Add new item -----//

document.getElementById("create-form").addEventListener("submit", function(e){
  e.preventDefault();

  axios.post("/create-item", {reja: createField.value})
  .then((response) =>{ 
    document.getElementById("item-list").insertAdjacentHTML("beforeend", 
        itemTemplate(response.data));
    createField.value = "",
    createField.focus();
  })
  .catch(err=> {
    console.log("Iltimos qaytadan harakat qiling");
  });
});


//----- Delete and Edit (update) item -----//

document.addEventListener("click", function(e){
//delete oper
  console.log(e.target);
   if(e.target.classList.contains("delete-me")) {
    if(confirm("Aniq o'chirmoqchimisiz?")) {
      axios
      .post("/delete-item",{id: e.target.getAttribute("data-id")})
      .then((response) =>{
        console.log(response.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling");
      });
    }
  }

//edit oper
if(e.target.classList.contains("edit-me")) {
    let userInput = prompt("O'zgartirish kiriting", 
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    if (userInput) {
        axios.post("/edit-item", {
            id: e.target.getAttribute("data-id"), 
            new_input: userInput,
        }).then(response => {
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(
                ".item-text"
            ).innerHTML = userInput;
        }).catch(err => {
            console.log("Iltimos qayta urinib ko'ring!");
        });
    }
}
});