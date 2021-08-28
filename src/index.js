import './sass/main.scss';
// import "./styles.css";
import  data  from './menu.json';
import  template  from './templates/menu.hbs';

const refs = {
    body: document.querySelector("body"),
checkbox: document.querySelector("#theme-switch-toggle"),
list: document.querySelector(".js-menu")
}

const {body, checkbox, list} = refs;


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const {LIGHT, DARK} = Theme;


//   console.log(checkbox.checked);
 

  checkbox.addEventListener("change", changeTheme);

//   localStorage.setItem("theme", "light");
  const storageValue = localStorage.getItem("theme");

//   console.log(storageValue);


  function changeTheme (e) {
 
if (e.target.checked){
    body.classList.remove(LIGHT);
    body.classList.add(DARK);
    // body.classList.replace(LIGHT, DARK);

    localStorage.setItem("theme", "dark");
} else {
    body.classList.remove(DARK);
    body.classList.add(LIGHT);
    // body.classList.replace(DARK, LIGHT);
    localStorage.setItem("theme", "light");
    
}
  }
  
  
  storageValue === null ? body.classList.add(LIGHT) : localStorage.value;
 
  if(storageValue === "dark"){
    body.classList.add(DARK);
    checkbox.checked = "true"};
  
  //   if(storageValue === null){
  //       body.classList.add(LIGHT);
  //       checkbox.checked = "false"};




const items = template(data);



list.insertAdjacentHTML("afterbegin", items);