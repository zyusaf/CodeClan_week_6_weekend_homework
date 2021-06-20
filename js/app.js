document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded');

    const form = document.querySelector('#new-item');
    form.addEventListener('submit', handleFormSubmit);

    let deleteButton = document.createElement("BUTTON");
    deleteButton.innerHTML = "Delete All";
    document.body.appendChild(deleteButton);
    deleteButton.addEventListener('click', handleDeleteClick);
    
})

const handleFormSubmit = function (event) {
    event.preventDefault();
    const list = document.querySelector("#sport-icon-list");
    const newListItem = document.createElement("li");
    list.appendChild(newListItem);
    const nameInput = document.createElement("p");
    nameInput.textContent = `${event.target.name.value}`;
    newListItem.appendChild(nameInput);
    const sportInput = document.createElement("p");
    sportInput.textContent = `${event.target.sport.value}`;
    newListItem.append(sportInput);
    const nationalitySelect = document.createElement("p");
    nationalitySelect.textContent = `${event.target.nationality.value}`;
    newListItem.appendChild(nationalitySelect);
    
    document.querySelector('#new-item').reset();
}

const handleDeleteClick = function () {
    const list = document.querySelector('#sport-icon-list');
    list.innerHTML = "";
}