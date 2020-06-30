const home_page = document.querySelector('body');
home_page.addEventListener('click', welcomeTxt);

function welcomeTxt() {

 home_page.style.background = 'black';

fetch('test.txt')
.then(res => res.text())
.then(data => {
  document.querySelector('h1').innerHTML = data;
})
.catch(err => console.log(err));  

}