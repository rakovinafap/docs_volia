const sellerVolin = [
    "ФОП ВОЛІН ДМИТРО ОЛЕКСАНДРОВИЧ",
    "ЄДРПОУ 3481406255, ",
    "тел. +38 (068) 183-35-38",
    "Р/р UA733133990000026001055732574", 
    "в Запорізьке РУ ПриватБанк ", 
    "м.Запоріжжя МФО 313399 ", 
    "ІПН 3481406255, номер свідоцтва  ", 
    "Платник єдиного податку 2 групи ", 
    "Адреса вул. Димитрова, буд.41, кв.44, м.Запоріжжя"
];

const sellerMakarenko = [
    "ФОП МАКАРЕНКО ОЛЕКСІЙ ВАЛЕНТИНОВИЧ",
    "ЄДРПОУ 3469805393, ",
    "тел. +38 (063) 947-22-22",
    "Р/р UA393220010000026009320025073", 
    "в Запорізьке АТ УНІВЕРСАЛ БАНК ", 
    "м.Запоріжжя МФО 322001 ", 
    "ІПН 3469805393, номер свідоцтва  ", 
    "Платник єдиного податку 2 групи ", 
    "Адреса вул. Авраменка, буд. 7, кв. 45, м.Запоріжжя"
];

const sellerName = localStorage.getItem('seller');

const tableSeller = document.querySelectorAll('span');
for (let i = 1; i < 10; i++) {
       if (sellerName == "Volin") {
              tableSeller[i].innerHTML = sellerVolin [i - 1];
       } else {
              tableSeller[i].innerHTML = sellerMakarenko [i - 1];
       }
       
};



const firstProductSum = localStorage.getItem('price1') * localStorage.getItem('count1'),
      secondProductSum = localStorage.getItem('price2') * localStorage.getItem('count2'),
      thirdProductSum = localStorage.getItem('price3') * localStorage.getItem('count3'),
      myClient = localStorage.getItem('organization'),
      seller = localStorage.getItem('seller'),
      phoneNumberOrg = localStorage.getItem('phone'),
      docNumber = localStorage.getItem('numbers'),
      allSums = firstProductSum + secondProductSum + thirdProductSum;

	  const phone = phoneNumberOrg,
	        phone1 = phone.substring(0, 3),
			phone2 = phone.substring(3, 6),
			phone3 = phone.substring(6, 8),
			phone4 = phone.substring(8, 10),
			phoneResult = "(" + phone1 + ")" +"-"+ phone2 +"-"+ phone3 +"-"+ phone4;
			
	 		
			
	    
	       

document.querySelector('.documentName1').innerHTML = "Рахунок фактура № B-00000" + docNumber;
document.querySelector('.organization').innerHTML = myClient;
document.querySelector('.phoneNumberOrganization').innerHTML = "тел. " + phoneResult;


var today = new Date();
var now = today.toLocaleDateString('ua');
document.querySelector('.date').innerHTML = "Від "+now; 
 

var dateEnd = new Date();
dateEnd.setDate(dateEnd.getDate() + 5);
var dateGG = dateEnd.toLocaleDateString('ua');
document.querySelector('.dateEnd').innerHTML = 'Рахунок дійсний до сплати до '+dateGG;





        
const mainTable = document.getElementById('mainTable');

function addTR1 (str) {
         if (str) {

  const mainTable = document.getElementById('mainTable');

  const tr1 = document.createElement('tr');
  tr1.className = "secondStr";

  const td1 = document.createElement('td');
  td1.textContent = "1";
  
  const td2 = document.createElement('td');
  td2.className = "nameProduct";
  td2.textContent = localStorage.getItem('tovar1');

  const td3 = document.createElement('td');
  td3.textContent = localStorage.getItem('count1') + ".000";

  const td4 = document.createElement('td');
  td4.className = "pcs";
  td4.textContent = "шт.";
  
  const td5 = document.createElement('td');
  td5.textContent = localStorage.getItem('price1') + ".00";

  const td6 = document.createElement('td');
  td6.textContent = firstProductSum + ".00";

 mainTable.appendChild(tr1);
 tr1.appendChild(td1);
 tr1.appendChild(td2);
 tr1.appendChild(td4);
 tr1.appendChild(td3);
 tr1.appendChild(td5);
 tr1.appendChild(td6);

  };
};


function addTR2 (str) {
         if (str) {

  const mainTable = document.getElementById('mainTable');

  const tr1 = document.createElement('tr');
  tr1.className = "secondStr";

  const td1 = document.createElement('td');
  td1.textContent = "2";
  
  const td2 = document.createElement('td');
  td2.className = "nameProduct";
  td2.textContent = localStorage.getItem('tovar2');

  const td3 = document.createElement('td');
  td3.textContent = localStorage.getItem('count2') + ".000";

  const td4 = document.createElement('td');
  td4.className = "pcs";
  td4.textContent = "шт.";
  
  const td5 = document.createElement('td');
  td5.textContent = localStorage.getItem('price2') + ".00";

  const td6 = document.createElement('td');
  td6.textContent = secondProductSum + ".00";

 mainTable.appendChild(tr1);
 tr1.appendChild(td1);
 tr1.appendChild(td2);
 tr1.appendChild(td4);
 tr1.appendChild(td3);
 tr1.appendChild(td5);
 tr1.appendChild(td6);
  
  };
};




function addTR3 (str) {
         if (str) {
  const mainTable = document.getElementById('mainTable');

  const tr1 = document.createElement('tr');
  tr1.className = "secondStr";

  const td1 = document.createElement('td');
  td1.textContent = "3";
  
  const td2 = document.createElement('td');
  td2.className = "nameProduct";
  td2.textContent = localStorage.getItem('tovar3');

  const td3 = document.createElement('td');
  td3.textContent = localStorage.getItem('count3') + ".000";

  const td4 = document.createElement('td');
  td4.className = "pcs";
  td4.textContent = "шт.";
  
  const td5 = document.createElement('td');
  td5.textContent = localStorage.getItem('price3') + ".00";

  const td6 = document.createElement('td');
  td6.textContent = thirdProductSum + ".00";

 mainTable.appendChild(tr1);
 tr1.appendChild(td1);
 tr1.appendChild(td2);
 tr1.appendChild(td4);
 tr1.appendChild(td3);
 tr1.appendChild(td5);
 tr1.appendChild(td6);

   
 };
};



addTR1(localStorage.getItem('tovar1'));
addTR2(localStorage.getItem('tovar2'));
addTR3(localStorage.getItem('tovar3'));






const imgPodpis = document.querySelector('.imgPodpis');

function getRandomInt() {
       return Math.floor(Math.random() * 4);
     };

console.log (getRandomInt(3));     

const imgsVolin  = [
       "<img src=\'img/volin1.png\' width=\'180px\' height=\'180px\'>",
       "<img src=\'img/volin2.png\' width=\'180px\' height=\'180px\'>",
       "<img src=\'img/volin3.png\' width=\'180px\' height=\'180px\'>",
       "<img src=\'img/volin4.png\' width=\'180px\' height=\'180px\'>"
];

const imgsMakarenko = [
       "<img src=\'img/makarenko1.png\' width=\'180px\' height=\'180px\'>",
       "<img src=\'img/makarenko2.png\' width=\'180px\' height=\'180px\'>",
       "<img src=\'img/makarenko3.png\' width=\'180px\' height=\'180px\'>",
       "<img src=\'img/makarenko4.png\' width=\'180px\' height=\'180px\'>"
];

if (seller === "Volin") {
       imgPodpis.innerHTML = imgsVolin[getRandomInt()];
} else {
       imgPodpis.innerHTML = imgsMakarenko[getRandomInt()];
};








document.querySelector('.sumAll').innerHTML = allSums + ".00";





/* const tdOne = document.querySelectorAll('tr.firstStr > td');
console.log (tdOne);

const tdTwo = document.querySelectorAll('tr.secondStr > td');
console.log (tdTwo); */




var mapNumbers = {
	0 : [2, 1, "нуль"], 
	1 : [0, 2, "один", "одна"], 
	2 : [1, 2, "два", "дві"], 
	3 : [1, 1, "три"], 
	4 : [1, 1, "чотири"], 
	5 : [2, 1, "п'ять"], 
	6 : [2, 1, "шість"], 
	7 : [2, 1, "сім"], 
	8 : [2, 1, "вісім"], 
	9 : [2, 1, "дев'ять"], 
	10 : [2, 1, "десять"], 
	11 : [2, 1, "одинадцять"], 
	12 : [2, 1, "дванадцять"], 
	13 : [2, 1, "тринадцять"], 
	14 : [2, 1, "чотирнадцять"], 
	15 : [2, 1, "п'ятнадцять"], 
	16 : [2, 1, "шістнадцять"], 
	17 : [2, 1, "сімнадцять"], 
	18 : [2, 1, "вісімнадцять"], 
	19 : [2, 1, "дев'ятнадцять"],
	20 : [2, 1, "двадцять"],
	30 : [2, 1, "тридцять"],
	40 : [2, 1, "сорок"],
	50 : [2, 1, "п'ятдесят"],
	60 : [2, 1, "шістдесят"],
	70 : [2, 1, "сімдесят"],
	80 : [2, 1, "вісімдесят"],
	90 : [2, 1, "дев'яносто"],
	100 : [2, 1, "сто"],
	200 : [2, 1, "двісті"],
	300 : [2, 1, "триста"],
	400 : [2, 1, "чотириста"],
	500 : [2, 1, "п'ятсот"],
	600 : [2, 1, "шістсот"],
	700 : [2, 1, "сімсот"],
	800 : [2, 1, "вісімсот"],
	900 : [2, 1, "дев'ятсот"]
};

var mapOrders = [ 
	{ _Gender : false, _arrStates : ["гривня", "гривні", "гривень"], _bAddZeroWord : true }, 
	{ _Gender : false, _arrStates : ["тисяча", "тисячі", "тисяч"] }, 
	{ _Gender : true, _arrStates : ["мільйон", "мільйона", "мільйонів"] }, 
	{ _Gender : true, _arrStates : ["мільярд", "мільярда", "мільярдів"] }, 
	{ _Gender : true, _arrStates : ["триліон", "триліона", "триліонів"] }
];

var objKop = { _Gender : false, _arrStates : ["копійка", "копійки", "копійок"] };

function Value(dVal, bGender) {
	var xVal = mapNumbers[dVal];
	if (xVal[1] == 1) {
		return xVal[2];
	} else {
		return xVal[2 + (bGender ? 0 : 1)];
	}
}

function From0To999(fValue, oObjDesc, fnAddNum, fnAddDesc)
{
	var nCurrState = 2;
	if (Math.floor(fValue/100) > 0) {
		var fCurr = Math.floor(fValue/100)*100;
		fnAddNum(Value(fCurr, oObjDesc._Gender));
		nCurrState = mapNumbers[fCurr][0];
		fValue -= fCurr;
	}

	if (fValue < 20) {
		if (Math.floor(fValue) > 0 || (oObjDesc._bAddZeroWord)) {
			fnAddNum(Value(fValue, oObjDesc._Gender));
			nCurrState = mapNumbers[fValue][0];
		}
	} else {
		var fCurr = Math.floor(fValue/10)*10;
		fnAddNum(Value(fCurr, oObjDesc._Gender));
		nCurrState = mapNumbers[fCurr][0];
		fValue -= fCurr;
		
		if (Math.floor(fValue) > 0) {
			fnAddNum(Value(fValue, oObjDesc._Gender));
			nCurrState = mapNumbers[fValue][0];
		}
	}

	fnAddDesc(oObjDesc._arrStates[nCurrState]);
}

function numToStr(fAmount)
{
	var fInt = Math.floor(fAmount + 0.005);
	var fDec = Math.floor(((fAmount - fInt) * 100) + 0.5);

	var arrRet = [];
	var iOrder = 0;
	var arrSouthands = [];
	for (; fInt > 0.9999; fInt/=1000) {
		arrSouthands.push(Math.floor(fInt % 1000));
	}
	if (arrSouthands.length == 0) {
		arrSouthands.push(0);
	}

	function PushToRes(strVal) { 
		arrRet.push(strVal); 
	}
	for (var iSouth = arrSouthands.length-1; iSouth >= 0; --iSouth) {
		From0To999(arrSouthands[iSouth], mapOrders[iSouth], PushToRes, PushToRes);
	}

	if (arrRet.length > 0) {
		// Capitalize first letter
		arrRet[0] = arrRet[0].match(/^(.)/)[1].toLocaleUpperCase() + arrRet[0].match(/^.(.*)$/)[1];
	}

	arrRet.push((fDec < 10) ? ("0" + fDec) : ("" + fDec));
	From0To999(fDec, objKop, function() {}, PushToRes);

	return arrRet.join(" ");
};

let doc = document.querySelector('.totalText');
let resultToStr = numToStr(allSums);
doc.innerHTML = resultToStr;





