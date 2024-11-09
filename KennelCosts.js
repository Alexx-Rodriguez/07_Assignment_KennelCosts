function CalculatePrice() {

    let dogSize = document.getElementById("dogSize").value;
    let numberOfDays = document.getElementById("numberOfDays").value;
    let priceCost = parseInt(dogSize) * parseInt(numberOfDays);
    document.getElementById("price").textContent = 'Price: $' + priceCost.toFixed(2);
}

function CalculateTax() {
    let dogSize = document.getElementById("dogSize").value;
    let numberOfDays = document.getElementById("numberOfDays").value;
    let priceCost = parseInt(dogSize) * parseInt(numberOfDays);
    let totalTax = priceCost * (0.47/10)
    document.getElementById("tax").textContent = 'Tax: $' + totalTax.toFixed(2); 
}

function TotalCost() {
    let dogSize = parseInt(document.getElementById("dogSize").value);
    let numberOfDays = parseInt(document.getElementById("numberOfDays").value);
    let priceCost = parseInt(dogSize) * parseInt(numberOfDays);
    let totalTax = priceCost * (0.47/10)
    let totalCost = priceCost + totalTax
    document.getElementById("total").textContent = 'Total: $' + totalCost.toFixed(2);
}