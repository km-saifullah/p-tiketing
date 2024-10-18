let seatCount = 0;
const seats = document.getElementsByClassName("seat");
for (const seat of seats) {
  seat.addEventListener("click", function handleSelect(event) {
    const singleSeatBtn = event.target;

    singleSeatBtn.classList.add("bg-selected");

    let leftSeatValue = getValue("left-seats-num");
    leftSeatValue -= 1;
    setInnerText("left-seats-num", leftSeatValue);

    let selectedSeatValue = getValue("selected-seat-num");
    selectedSeatValue += 1;
    setInnerText("selected-seat-num", selectedSeatValue);

    const selectedSeatContainer = document.getElementById(
      "selected-seat-name-list"
    );
    const selectedSeatDiv = document.createElement("div");
    selectedSeatDiv.classList = `flex justify-between items-center mt-4 mb-4`;
    const seatNameP = document.createElement("p");
    seatNameP.innerText = singleSeatBtn.innerText;
    const seatClassP = document.createElement("p");
    seatClassP.innerText = "Economy";
    const seatPriceP = document.createElement("p");
    seatPriceP.innerText = 550;

    selectedSeatDiv.appendChild(seatNameP);
    selectedSeatDiv.appendChild(seatClassP);
    selectedSeatDiv.appendChild(seatPriceP);
    selectedSeatContainer.appendChild(selectedSeatDiv);

    const selectedSeatTotalPrice = selectedSeatValue * 550;
    setInnerText("total-price", selectedSeatTotalPrice);
    setInnerText("grand-total", selectedSeatTotalPrice);
  });
}

function totalPrice(id, value) {
  const totalCost = document.getElementById("total-cost").innerText;
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById("total-cost").innerText = total;
  grandTotal("other");
}
function getValue(id) {
  const budgetInnerText = document.getElementById(id).innerText;
  const budget = parseInt(budgetInnerText);
  return budget;
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
