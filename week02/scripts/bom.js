const textbox = document.querySelector(".chapter");
const button = document.querySelector(".btn");
const chapterBook = document.querySelector(".chapter-book-list");
//const deleteItem = document.querySelector(".closebtn");

button.addEventListener('click', () => {
    console.log("i have been clicked, Ouch!!");
    if (textbox.value === "") {
        alert("You need to enter a book and a chapter");
    }
    else{
        let li = document.createElement("li");
        li.textContent = textbox.value;
        chapterBook.appendChild(li);
        const closebtn = document.createElement("span")
        closebtn.textContent = "✖️";
        closebtn.classList.add("closebtn");
        li.appendChild(closebtn);


        closebtn.addEventListener("click", () => {
        li.remove();
})
        textbox.value = "";
    }
});





