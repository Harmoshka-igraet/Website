

function galleryOpen(projectName) {
  const moreElements = document.querySelectorAll(".more");

  moreElements.forEach(el => {
    if (el.classList.contains(projectName)) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  });
}

document.getElementById("myForm").addEventListener("submit", function(event) {
event.preventDefault();

   const data = {
    name: document.getElementById("name").value,
        comment: document.getElementById("comment").value
    };

    
   let existingData = JSON.parse(localStorage.getItem("formData")) || [];

  existingData.push(data);

  localStorage.setItem("formData", JSON.stringify(existingData));

   displayData(data);
});

function displayData(data) {
 console.log(data.name);


  const div = document.createElement("div");
  div.classList.add("comment");

 const nameP = document.createElement("h2");
 nameP.textContent = data.name;
  nameP.setAttribute("data-name", data.name);


  const commentP = document.createElement("p");
 commentP.textContent = data.comment;
 commentP.setAttribute("data-comment", data.comment);

  div.appendChild(nameP);
  div.appendChild(commentP);


  const container = document.getElementsByClassName("comments")[0];
  container.appendChild(div);}


window.addEventListener("DOMContentLoaded", function () {
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];

    savedData.forEach(function(data) {
        displayData(data);
    });
})