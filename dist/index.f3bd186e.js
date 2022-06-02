//Kanban board
//setting up the variables to get the value of task and status from the html file
const tasks = document.querySelectorAll(".task");
const all_status = document.querySelectorAll(".status");
let draggableTask = null;
//adding a handler to the task variable
tasks.forEach((task)=>{
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
});
//if the user has started dragging the object then draggable task is set to equal the current object
function dragStart() {
    draggableTask = this;
    //adding set timeout will execute the currently object style after the timer expires
    setTimeout(()=>{
        this.style.display = "none";
    }, 0);
}
//same as for drag start
function dragEnd() {
    draggableTask = null;
    setTimeout(()=>{
        this.style.display = "block";
    }, 0);
}
//adding a handler for each of the drag events
all_status.forEach((status)=>{
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});
//while the user is dragging the object, no other default action can take place such as forms submitting or switching to another page
function dragOver(e) {
    e.preventDefault();
}
//Once the user is dragging the object the border for the kanban column the object is over will become dashed to add visual feeback to the user
function dragEnter() {
    this.style.border = "1px dashed #ccc";
}
//once the object is not over the box anymore the border will go back to normal
function dragLeave() {
    this.style.border = "none";
}
//when the user drops the task then that column will append the task meaning it now stays in that column
function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTask);
}
// Modal
//set the modal variables to get elements from the html file
const buttons = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
//when the add button is clocked then the overlay and modal are set to active making them appear on the screen with css styling
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        document.querySelector(button.dataset.targetModal).classList.add("active");
        overlay.classList.add("active");
    });
});
//when the x button is clicked on the modal then the overlay and modal remove the active status and therefore they dissapear
close_modals.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const modal = button.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});
//if the user clicks somewhere else on the window other than the modal while the modal is active then the modal will close
window.onclick = (event)=>{
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal)=>modal.classList.remove("active")
        );
        overlay.classList.remove("active");
    }
};
// create task
//setting the variables for creating the task
const submit_tasks = document.getElementById("submit_task");
submit_tasks.addEventListener("click", createTask);
//creating a new task
function createTask() {
    const tasks_div = document.createElement("div");
    //getting the user input for the html file for the task
    const input_task_val = document.getElementById("input_task").value;
    //getting the user input for the due date
    const input_duedate_val = document.getElementById("input_duedate").value;
    //getting the user input for the time completed
    const input_time_val = document.getElementById("input_time").value;
    //this then returnts to the document a new text node of the titles and variables input by the user
    const txt = document.createTextNode("Task: " + input_task_val + ", Due: " + input_duedate_val + ", Completion: " + input_time_val + " hours");
    //the tasks div then appends this text and adds it to the task div
    tasks_div.appendChild(txt);
    tasks_div.classList.add("task");
    //this also makes it draggable
    tasks_div.setAttribute("draggable", "true");
    // create span
    //this is the button on the draggable task which deletes the task
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);
    //making the span always appear on the tasks div
    tasks_div.appendChild(span);
    no_status.appendChild(tasks_div);
    //if the span element is clicked then it deletes the parents element which is the task, therefore removing the task from the board
    span.addEventListener("click", ()=>{
        span.parentElement.style.display = "none";
    });
    //adding the event handles for drag start and drag end to make any new tasks draggable
    tasks_div.addEventListener("dragstart", dragStart);
    tasks_div.addEventListener("dragend", dragEnd);
    //if the input task is left blank and submitted then no text will be appended to create a new task
    document.getElementById("input_task").value = "";
    task_form.classList.remove("active");
    overlay.classList.remove("active");
}
//closing the tasks with the close button
const close_buttons = document.querySelectorAll(".close");
close_buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        button.parentElement.style.display = "none";
    });
}); //(Payenda, 2020)

//# sourceMappingURL=index.f3bd186e.js.map
