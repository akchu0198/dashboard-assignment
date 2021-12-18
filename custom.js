//const wrapper = document.querySelector(".wrapper");
//const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
//const customBtn = document.querySelector("#custom-btn");
//const cancelBtn = document.querySelector("#cancel-btn i");
//const img = document.querySelector("#img2");
var img;
var wrapper;
var fileName;
//var defaultBtn;
var customBtn;
var cancelBtn;
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive(img1){
  if(img1 === 'img1')
  {
    img = document.querySelector("#img1");
    wrapper = document.querySelector(".front");
    fileName = document.querySelector(".file-name-front");
    //defaultBtn = document.querySelector("#default-btn");
    customBtn = document.querySelector("#custom-btn");
    cancelBtn = document.querySelector("#cancel-btn i");
  }else{
    img = document.querySelector("#img2");
    wrapper = document.querySelector(".back");
    fileName = document.querySelector(".file-name-back");
    //defaultBtn = document.querySelector("#default-btn-back");
    customBtn = document.querySelector("#custom-btn-back");
    cancelBtn = document.querySelector("#cancel-btn-back i");
  }
 defaultBtn.click(img);
}
defaultBtn.addEventListener("change", function(){
 const file = this.files[0];
 if(file){
   const reader = new FileReader();
   reader.onload = function(){
     const result = reader.result;
     img.src = result;
     wrapper.classList.add("active");
   }
   cancelBtn.addEventListener("click", function(){
     img.src = "";
     wrapper.classList.remove("active");
   })
   reader.readAsDataURL(file);
 }
 if(this.value){
   let valueStore = this.value.match(regExp);
   fileName.textContent = valueStore;
 }
});