import { default as data } from "./data.json" assert { type: "json" };

const highest = Math.max(...data.map(d => d.amount))
const scale = 2;
console.log(highest)

const chart = document.querySelector('.chart');
//for each day loop over and create a div, append to the parent chart
data.map(date => {
    const bar = document.createElement('div');
    const day = document.createElement('p');
    const amount = document.createElement('div');
    bar.appendChild(amount)
    bar.appendChild(day)
    chart.appendChild(bar)
    day.textContent = date.day;
    const barHeight = date.amount * scale;
    amount.style.height = barHeight;
    amount.classList.add('bar');
    if (date.amount === highest) {
        amount.style.backgroundColor = "hsl(186, 34%, 60%)";
    }
})