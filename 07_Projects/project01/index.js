const buttons = document.querySelectorAll("button");
// console.log(buttons);        // NodeLists

const body = document.querySelector("body");

buttons.forEach(function(button){
      button.addEventListener('click', function(e){
          if(e.target.id === 'grey'){
             body.style.backgroundColor = e.target.id;
          }else if(e.target.id === 'orange'){
             body.style.backgroundColor = e.target.id;
          }
          else if(e.target.id === 'purple'){
             body.style.backgroundColor = e.target.id;
          }
          else if(e.target.id === 'blue'){
             body.style.backgroundColor = e.target.id;
          }else{
             body.style.backgroundColor = "white"
          }
      })
})


