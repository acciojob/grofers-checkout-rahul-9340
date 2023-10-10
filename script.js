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
const last = document.getElementById("last")
const td = document.createElement("td")
	td.innerHTML = `${sum}`

last.appendChild(td)
// document.body.appendChild(table);
	
};

getSumBtn.addEventListener("click",getSum);

