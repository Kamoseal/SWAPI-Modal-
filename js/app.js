// const arrowFunction = () => {
//   fetch('https://swapi.co/api/films/')
//  .then(function(response) {
//    return response.json();
//  })
//  .then(data)
//  .catch(function(error) {
//     console.log('Request failed', error)
//   });
// } 
fetch('https://swapi.co/api/films/')
 .then(function(response) {
   return response.json();
 })
 .then(data)
 .catch(function(error) {
    console.log('Request failed', error)
  });
function data(data) {
   const results = data.results;
   console.log(results);
   output = ``;
   results.forEach((element, index) => {
    const arrayImages = [ "./assets/images/A_New_Hope.jpg", "./assets/images/Attack_of_the_Clones.jpg", "./assets/images/The_Phantom_Menace.jpg", "./assets/images/Revenge_of_the_Sith.jpg", "./assets/images/Return_of_the_Jedi.jpg", "./assets/images/The_Empire_Strikes_Back.jpg", "./assets/images/The_Force_Awakens.jpg"
];
    const title = element.title;
    const people = element.characters;
    const images = arrayImages[index];
    
    output += `<div class="col s4 left"><img src=${images} class="responsive-img" alt=""><a class="waves-effect waves-light btn modal-trigger" href="#modal1">${title}</a></div>`
    
    $("#container").html(output);
   });
 };
 function paintModal(data) {
     console.log(data);
     
 }
 