// dark mode script
function darkMode() {
    const darkMode = document.body;
    darkMode.classList.toggle('dark-mode');
}

// blog entry submission script - define variables
const blog = document.getElementById('blog');
const name = document.getElementById('entry-name');
const author = document.getElementById('author-name');
const entry = document.getElementById('blog-content');
const form = document.getElementById('submission-form');

//step 2: prevent form from auto-reloading
form.addEventListener('submit', function (e) {
    e.preventDefault();
})

//step 3: form validation
function validateForm() {
    let x = document.forms["submission-form"]["entry-name"].value;
    if (x == "") {
        alert("Please give your entry a title.");
        return false;
    }
    let y = document.forms["submission-form"]["author-name"].value;
    if (y == "") {
        alert("Please enter your name.");
        return false;
    }
    let z = document.forms["submission-form"]["blog-content"].value;
    if (z == "") {
        alert("Please complete the submission form in full.");
        return false;
    }

}

// step 4: take information from form and populate HTML
function submitForm() {
    let inputEntry = document.getElementById("entry-name").value;
    document.getElementById("new-title").innerHTML = inputEntry;
    document.getElementById("new-title").style.fontSize = "30px";
    document.getElementById("new-title").style.fontFamily = "Cambria, Georgia, Times, serif";

    let inputAuthor = document.getElementById("author-name").value;
    document.getElementById("new-author").innerHTML = inputAuthor;
    document.getElementById("new-author").style.fontSize = "15px";
    document.getElementById("new-title").style.fontWeight = "bold";

    let inputBlog = document.getElementById("blog-content").value;
    document.getElementById("new-content").innerHTML = inputBlog;
}