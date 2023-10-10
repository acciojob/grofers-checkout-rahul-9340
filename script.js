const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
let sum = 0; 
const items = document.getElementsByClassName("price");

for(let i=0; i<items.length; i++)
	{
      sum = sum + (+items[i].textContent);
    }
const table = document.getElementById("table")
const tr = document.createElement("tr")
	tr.innerHTML = `<td colspan="2">${sum}</td>`

table.appendChild(tr)
// document.body.appendChild(table);
	
};

getSumBtn.addEventListener("click",getSum);

