

function onClick() {
    alert("Day:  " + this.innerText);

   // document.getElementById("schedule").innerText = dataText;
   // document.getElementById("schedule").innerText = `Schedule for July ${this.innerText}, 2022`;
 }


const daysVar=document.querySelectorAll('.days');
daysVar.forEach(item=>
{
    item.addEventListener('click',event=>
    {
       // console.log(event.target.dataset.date, event.target.innerText, "Weekend: "+event.currentTarget.classList.contains(('weekdays'),));
        const dataText=event.target.dataset.date;
      //  document.getElementById("schedule").innerText = dataText;
        document.getElementById("schedule").innerText = "Schedule for July "+dataText+" 2022";
    })
})


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