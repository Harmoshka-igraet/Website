const addComment = async (ev) => {
    ev.preventDefault();

    const comment = {
        user: document.getElementById('name').value,
        comment: document.getElementById('comment').value
    };

    try {
        const res = await fetch('http://localhost:3000/add-comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment)
        });
        const savedComment = await res.json();
        displayComment(savedComment);
        document.forms[0].reset();
        console.log("Comment is saved!")
    } catch(err) { console.log(err); }
};

function displayComment(comment) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `<h2>${comment.user}</h2><p>${comment.comment}</p>`;
    document.querySelector(".comments").appendChild(div);
}

// Load existing comments
fetch('http://localhost:3000/comments')
  .then(res => res.json())
  .then(data => data.forEach(displayComment))
  .catch(err => console.log(err));







  