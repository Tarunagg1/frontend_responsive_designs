const add = document.getElementById("add");


const updateLocalStorageData = () => {
    const localDataArea = document.querySelectorAll('textarea');
    let notes = [];

    localDataArea.forEach((note) => {
        notes.push(note.value);
    })

    localStorage.setItem("notesData", JSON.stringify(notes));
}

const addNote = (text = '') => {
    const note = document.createElement("div");
    note.classList.add("note");

    const htmlData = `
      <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;

    note.insertAdjacentHTML('afterbegin', htmlData);

    // get references
    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const maindiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    // deleting the note
    deleteButton.addEventListener('click', () => {
        note.remove()
        updateLocalStorageData();
    });

    // edit button
    textarea.value = text;
    maindiv.innerHTML = text;

    editButton.addEventListener('click', () => {
        maindiv.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    })

    textarea.addEventListener('change', (e) => {
        const inputValues = e.target.value;
        maindiv.innerHTML = inputValues;
        updateLocalStorageData();
    })

    document.body.appendChild(note);
}

const getNotes = JSON.parse(localStorage.getItem('notesData'));
if (getNotes) {
    getNotes.forEach((ele) => {
        addNote(ele);
    })
}


add.addEventListener("click", () => {
    addNote();
})






















