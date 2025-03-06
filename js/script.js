



const nButton = document.querySelector('.send');
numberDocument.innerHTML = localStorage.getItem('numbers'); 

let j = localStorage.getItem('numbers') || 0;
const nAddNum = () => {
  j++;
  localStorage.setItem('numbers', j);
  
  let numberDocument = document.getElementById('numberDocument');
  numberDocument.innerHTML = localStorage.getItem('numbers'); 
};
nButton.addEventListener('click', nAddNum); 






const btnAdd = document.querySelector('.btnAdd');
let i = 0;
const deleteButton = (e) => {
  i++;
  if (i == 2) {
   e.target.remove();
  }
};
btnAdd.addEventListener('click', deleteButton);





btnAdd.addEventListener('click', function() {

  var container = document.getElementById("container");
  let breack = document.createElement("BR");

  var inp1 = document.createElement("input");
  inp1.className = "input0";
  inp1.placeholder = "Наименование товара";
  var inp2 = document.createElement("input");
  inp2.className = "input1"; 
  inp2.placeholder = "К";
  var inp3 = document.createElement("input");
  inp3.className = "input2";
  inp3.placeholder = "Цена";

container.appendChild(inp1);
container.appendChild(breack);
container.appendChild(inp2);
container.appendChild(breack);
container.appendChild(inp3);
container.appendChild(breack);

});
 



const main = document.getElementById('container');
nButton.addEventListener('click', function (e) {
  e.preventDefault();
   
  let sellers = document.querySelector('.sellerName');
  let seller = sellers.options[sellers.selectedIndex].value;
  localStorage.setItem('seller', seller);
 
  
  let inputs = document.querySelectorAll("input")
  
  
      
      localStorage.setItem('organization', inputs[0].value);
      localStorage.setItem('phone', inputs[1].value);
      localStorage.setItem("tovar1", inputs[2].value);
      localStorage.setItem("count1", inputs[3].value);
      localStorage.setItem("price1", inputs[4].value);
      localStorage.setItem("tovar2", inputs[5].value);
      localStorage.setItem("count2", inputs[6].value);
      localStorage.setItem("price2", inputs[7].value);
      localStorage.setItem("tovar3", inputs[8].value);
      localStorage.setItem("count3", inputs[9].value);
      localStorage.setItem("price3", inputs[10].value);
    
  
  /* let organization = localStorage.getItem('organization');
  let tovarLocal = localStorage.getItem("tovar");
  let countLocal = localStorage.getItem("count");
  let priceLocal = localStorage.getItem("price"); */
}); 



  

  
const pageResulOne = "https://docs-volia.vercel.app/result.html";
const pageResulSecond = "https://docs-volia.vercel.app/resultNakladnaya.html";
const hrefOne = '<a href="'+pageResulOne+'">Счет-Фактура</a>';
const hrefSecont = '<a href="'+pageResulSecond+'">Накладная</a>';
/* var img = "<img src=\'img/doc1.png\' width=\'50px\' height=\'50px\'>"; */
   

  




const resultPage = () => {
    main.innerHTML = "<div>"+hrefOne+hrefSecont+"</div>"; 

    document.querySelector('.footerButtons').innerHTML = "";
    numberDocument.innerHTML = "";
    document.querySelector('.numDoc').innerHTML = "";
};


 nButton.addEventListener('click', function() {
   setTimeout(resultPage, 200); 
}); 



const resetBTN = document.querySelector('.removeLS');
const removeLS = () => {
  localStorage.clear();
};

resetBTN.addEventListener('click', removeLS);
 
    