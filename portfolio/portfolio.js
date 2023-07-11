     var menu1=document.getElementById('men1');
    var menu2=document.getElementById('men2');
    var menu3=document.getElementById('men3');
    var tabb1=document.getElementById('tab1');
    var tabb2=document.getElementById('tab2');
    var tabb3=document.getElementById('tab3');

function menuClick1(){
    

    if(menu1.classList.contains('active-link')){
          menu1.classList.remove('active-link');
          
    }else{
        menu1.classList.add('active-link');
        menu2.classList.remove("active-link");
        menu3.classList.remove("active-link");

    }
    if(tabb1.classList.contains('active-tab')){
        tabb1.classList.remove('active-tab');
    }else{
        tabb1.classList.add('active-tab');
        tabb2.classList.remove('active-tab');
        tabb3.classList.remove('active-tab');
    }
}

function menuClick3(){
   

    if(menu3.classList.contains('active-link')){
          menu3.classList.remove("active-link");

    }else{
        menu3.classList.add('active-link');
        menu2.classList.remove("active-link");
        menu1.classList.remove("active-link");

      
    }
    if(tabb3.classList.contains('active-tab')){
        tabb3.classList.remove('active-tab');
    }else{
        tabb3.classList.add('active-tab');
        tabb1.classList.remove('active-tab');
        tabb2.classList.remove('active-tab');
    }
}
function menuClick2(){
    

    if(menu2.classList.contains('active-link')){
          menu2.classList.remove("active-link");
          
    }else{
        menu2.classList.add('active-link');
        menu1.classList.remove("active-link");
        menu3.classList.remove("active-link");
    }
   
    if(tabb2.classList.contains('active-tab')){
        tabb2.classList.remove('active-tab');
    }else{
        tabb2.classList.add('active-tab');
        tabb1.classList.remove('active-tab');
        tabb3.classList.remove('active-tab');
    }

}


function showLes() {
    const showless = document.getElementById('btn');
    var showcont = document.getElementsByClassName('project_img11')[0]; // Accessing the first element in the collection
  
    if (showless.textContent.includes('Show More')) {
      showless.textContent = 'Show Less';
      showcont.style.display = "flex";
    } else {
      showless.textContent = 'Show More';
      showcont.style.display = "none"; // Set the display to "none" to hide the element
    }
  }
  
  var raks=document.getElementById('menu');

  function menuClick(){
    if(raks.classList.contains('menu9')){
         raks.classList.remove('menu9');
    }else{
         raks.classList.add('menu9');
    }
           
  }
  