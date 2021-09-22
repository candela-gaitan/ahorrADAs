const balanceButton = document.querySelector("#balance-button");
const categoriesButton = document.querySelector("#categories-button");
const reportsButton = document.querySelector("#reports-button");
const balanceSection = document.querySelector("#balance");
const categoriesSection = document.querySelector("#categories");
const reportsSection = document.querySelector("#reports");
const newOperationButton = document.querySelector("#new-operation-button");
const newOperationSection = document.querySelector("#new-operation");

const cancelNewOperationButton = document.querySelector("#cancel-new-operation-button");
const addNewOperationButton = document.querySelector("#add-new-operation-button");

categoriesButton.onclick = () => {
    balanceSection.classList.add("is-hidden");
    reportsSection.classList.add("is-hidden");
    categoriesSection.classList.remove("is-hidden");
}

reportsButton.onclick = () => {
    balanceSection.classList.add("is-hidden");
    categoriesSection.classList.add("is-hidden");
    reportsSection.classList.remove("is-hidden");
}

balanceButton.onclick = () => {
    reportsSection.classList.add("is-hidden");
    categoriesSection.classList.add("is-hidden");
    balanceSection.classList.remove("is-hidden");
}

newOperationButton.onclick = () => {
    reportsSection.classList.add("is-hidden");
    categoriesSection.classList.add("is-hidden");
    balanceSection.classList.add("is-hidden");
    newOperationSection.classList.remove("is-hidden");
}

// Temporales hasta que se de funcionalidad al formulario

cancelNewOperationButton.onclick = () => {
    reportsSection.classList.add("is-hidden");
    categoriesSection.classList.add("is-hidden");
    newOperationSection.classList.add("is-hidden");
    balanceSection.classList.remove("is-hidden");
}

addNewOperationButton.onclick = () => {
    reportsSection.classList.add("is-hidden");
    categoriesSection.classList.add("is-hidden");
    newOperationSection.classList.add("is-hidden");
    balanceSection.classList.remove("is-hidden");
}