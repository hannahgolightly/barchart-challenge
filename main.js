import { default as data } from "./data.json" assert { type: "json" };

const chart = document.querySelector('.chart');
const highest = Math.max(...data.map(d => d.amount))
const scale = 2;
let totalAmount = 0;

//for each day loop over and create a div, append to the parent chart
data.map(date => {
    const barArea = document.createElement('div');
    const day = document.createElement('p');
    const bar = document.createElement('div');
    const amount = document.createElement('div');
    amount.setAttribute('class', 'amount');
    barArea.setAttribute('class', 'bar-area');
    barArea.appendChild(amount)
    barArea.appendChild(bar)
    barArea.appendChild(day)
    chart.appendChild(barArea)

    amount.textContent = `$${date.amount}`;
    day.textContent = date.day;
    const barHeight = date.amount * scale;

    bar.style.height = `${barHeight}px`;
    bar.classList.add('bar');
    if (date.amount === highest) {
        bar.style.backgroundColor = "hsl(186, 34%, 60%)";
    }

    totalAmount += parseFloat(date.amount);
    return totalAmount;
})

const total = document.querySelector('.total');
total.textContent = `$${totalAmount}`;