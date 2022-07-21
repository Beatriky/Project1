 function onClick() {
    alert("Day:  " + this.innerText);
   // const data=event.target.dataset.date;
  // document.getElementById("dataProg").innerText = data;
     document.getElementById("dataProg").innerText = `Schedule for July ${this.innerText}, 2022`;

 }

console.log("ss");
let tableData = document.querySelectorAll("td");
console.log(tableData);
for(const days of tableData)
{
    days.addEventListener("click", onClick);
    days.addEventListener("click", getinnerText);
}
 function getinnerText() {
     let text = document.getElementById("user1").innerText;

     document.getElementById("dataProg").innerText = text;

 }


 tableData.forEach(function(element) {
     if(element.textContent === "available") {
         element.classList.add("available-green");
     }
 });