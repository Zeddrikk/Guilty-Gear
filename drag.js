// var count = 0;

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("childID",
//         ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     const id = ev.dataTransfer.getData("childID");
//     if (id.startsWith("dragged") || !id) {
//         return;
//     }
//     const nodeCopy = document.getElementById(id).cloneNode(true);

//     nodeCopy.id = "dragged" + id + count++;

//     nodeCopy.addEventListener("dragstart", drag);

//     ev.target.appendChild(nodeCopy);

// }

// function deleteDiv(ev) {
//     ev.preventDefault();
//     const id = ev.dataTransfer.getData("childID");
//     if (!id.startsWith("dragged")) {
//         return;
//     }
//     const el = document.getElementById(id);
//     el.parentNode(removeChild(el));
// }

const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
const box = document.querySelector('.participants');



draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
})

box.addEventListener('dragover', e => {
    e.preventDefault();
});

box.addEventListener('drop', () => {
    const draggable = document.querySelector('.dragging');
    var li = document.createElement("li");
    li.classList.add('player');
    li.appendChild(draggable);
    box.appendChild(li);
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
    });
    // dropzone.addEventListener('drop', () => {
    //     dropzone.classList.remove('dropzone');
    // });

});



dropzones.forEach(dropzone => {
    dropzone.addEventListener('drop', e => {

        const draggable = document.querySelector('.dragging');

        dropzone.appendChild(draggable);
        dropzone.classList.add('full');
        dropzone.removeEventListener('dragover');
        console.log(dropzone.classList);
    })
})

