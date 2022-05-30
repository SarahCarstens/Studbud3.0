const tasks = document.querySelectorAll(".task");
const all_status = document.querySelectorAll(".status");
let draggableTask = null;
tasks.forEach((task)=>{
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
});
function dragStart() {
    draggableTask = this;
    setTimeout(()=>{
        this.style.display = "none";
    }, 0);
}
function dragEnd() {
    draggableTask = null;
    setTimeout(()=>{
        this.style.display = "block";
    }, 0);
}
all_status.forEach((status)=>{
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});
function dragOver(e) {
    e.preventDefault();
}
function dragEnter() {
    this.style.border = "1px dashed #ccc";
    console.log("dragEnter");
}
function dragLeave() {
    this.style.border = "none";
    console.log("dragLeave");
}
function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");
}
// modal
const buttons = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        document.querySelector(button.dataset.targetModal).classList.add("active");
        overlay.classList.add("active");
    });
});
close_modals.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const modal = button.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});
window.onclick = (event)=>{
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal)=>modal.classList.remove("active")
        );
        overlay.classList.remove("active");
    }
};
// create task
const submit_tasks = document.getElementById("submit_task");
submit_tasks.addEventListener("click", createTask);
function createTask() {
    const tasks_div = document.createElement("div");
    const input_task_val = document.getElementById("input_task").value;
    const input_duedate_val = document.getElementById("input_duedate").value;
    const txt = document.createTextNode("Task: " + input_task_val + ", Due Date: " + input_duedate_val);
    tasks_div.appendChild(txt);
    tasks_div.classList.add("task");
    tasks_div.setAttribute("draggable", "true");
    // create span
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt);
    tasks_div.appendChild(span);
    no_status.appendChild(tasks_div);
    span.addEventListener("click", ()=>{
        span.parentElement.style.display = "none";
    });
    tasks_div.addEventListener("dragstart", dragStart);
    tasks_div.addEventListener("dragend", dragEnd);
    document.getElementById("input_task").value = "";
    task_form.classList.remove("active");
    overlay.classList.remove("active");
}
const close_buttons = document.querySelectorAll(".close");
close_buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        button.parentElement.style.display = "none";
    });
}); //Dictionary

//# sourceMappingURL=index.f3bd186e.js.map
