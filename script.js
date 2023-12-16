
let priority=document.querySelector("#priority");
let status=document.querySelector("#status");
let box2=document.querySelector(".box2");

function onadd(){
    
    let name=document.querySelector(".text").value;
let duedate=document.querySelector(".duedate").value;
    console.log(name);
      let div=document.createElement("div");
      div.classList.add("one");
      div.innerHTML=`<h1>${name}</h1>
      <p>${duedate}</p>
      <div class="b">
      <button>Delete onclick="isdelete()"</button>
      <button>Edit onclick="isedit()"</button>
  </div>`;
  box2.appendChild(div);
 
}
