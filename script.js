// function changeTheme() {
//     const body = document.body;
    
//     if (body.classList.contains('dark-theme')) {
//         body.classList.remove('dark-theme');
//         body.classList.add('light-theme');
//     } else {
//         body.classList.remove('light-theme');
//         body.classList.add('dark-theme');
//     }
// }




















// document.getElementById('themeButton').addEventListener('click', changeTheme);

// document.getElementById('characterForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const newName = document.getElementById('nombre').value;
//     const imageInput = document.getElementById('imageInput').files[0];

//     document.getElementById('characterTitle').innerText = `${newName}, el Elefante de Chocolate`;
//     document.getElementById('characterName').innerText = newName;
//     document.getElementById('characterNameAdventure').innerText = newName;

//     if (imageInput) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             document.getElementById('characterImage').src = e.target.result;
//             document.getElementById('characterImage').alt = newName;
//         };
//         reader.readAsDataURL(imageInput);
//     }
// });

const themeButton = document.getElementById('themeButton');


themeButton.addEventListener('click', changeTheme);

var isLight = true;

function changeTheme() {
    //apuntarle a body
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    if (isLight) {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        isLight = false;
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        isLight = true;
    }
}
