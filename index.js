// when click on ticket button

const seatBtns = document.querySelectorAll("#seat-btn");
let count = 0;
let price = 550;
let totalPrice = 0;

for (let i = 0; i < seatBtns.length; i++) {
    const seatBtn = seatBtns[i];

    seatBtn.addEventListener("click", (event) => {

        count = count + 1;

        if (count <= 4) {
            // change bg color
            event.target.style.backgroundColor = "#1DD100";
            event.target.style.color = "white";
            event.target.disabled = true;

            // change total seat number
            const totalSeatNumber = document.getElementById("total-seat-number");
            const totalSeatNumberText = totalSeatNumber.innerText;
            const currentSeatNumber = parseInt(totalSeatNumberText);
            const newSeatNumber = currentSeatNumber - 1;
            totalSeatNumber.innerText = newSeatNumber;

            // change how many seats are choosed
            const totalSeatChoosed = document.getElementById("seat-choosed");
            const totalSeatChoosedText = totalSeatChoosed.innerText;
            const currentSeatChoosed = parseInt(totalSeatChoosedText);
            const newSeatChoosed = currentSeatChoosed + 1;
            totalSeatChoosed.innerText = newSeatChoosed;

            // write the ticket details by dom
            // ticket name
            const ticketName = document.getElementById("ticket-name");
            const p = document.createElement("p");
            p.innerText = event.target.innerText;

            ticketName.appendChild(p);

            // ticket class
            const ticketClass = document.getElementById("ticket-class");
            const p1 = document.createElement("p");
            p1.innerText = "Economy";
            ticketClass.appendChild(p1);

            // ticket price
            const ticketPrice = document.getElementById("ticket-price");
            const p2 = document.createElement("p");
            p2.innerText = price;
            ticketPrice.appendChild(p2);

            // sum the total price
            totalPrice = parseFloat(totalPrice + price);

            // show the total price on page
            const showTotalPrice = document.getElementById("total-price");
            const grandTotal = document.getElementById("grand-total");
            showTotalPrice.innerText = totalPrice.toFixed(2);
            grandTotal.innerText = totalPrice.toFixed(2);

        } else {
            alert("Sorry! You are not be able to buy more than 4 tickets.")
        }


    })

}


// discount price
const applyBtn = document.getElementById("apply-btn");

applyBtn.addEventListener("click", () => {

    // get input field value
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue)

    if (totalPrice >= 2200) {
        if (inputFieldValue === "NEW15") {

            const discountedPrice = parseFloat(totalPrice * 15 / 100);

            const discountedTotal = document.getElementById("discounted-total");
            discountedTotal.innerText = discountedPrice.toFixed(2);
            applyBtn.disabled = true;
            inputField.value = "";

            const grandTotal = document.getElementById("grand-total");
            grandTotal.innerText = (totalPrice - discountedPrice).toFixed(2);

        } else if (inputFieldValue === "Couple 20") {

            const discountedPrice = parseFloat(totalPrice * 20 / 100);

            const discountedTotal = document.getElementById("discounted-total");
            discountedTotal.innerText = discountedPrice.toFixed(2);
            applyBtn.disabled = true;
            inputField.value = "";

            const grandTotal = document.getElementById("grand-total");
            grandTotal.innerText = (totalPrice - discountedPrice).toFixed(2);

        } else {
            inputField.value = "";
            alert("Invalid Coupon Code")
        }
    } else {
        inputField.value = "";
        alert("Please buy 4 tickets to get discount!")
    }
})

// enable next btn
const phoneNumberInput = document.getElementById("phone-number-input");
phoneNumberInput.addEventListener("keyup", () => {
    const nextBtn = document.getElementById("next-btn");
    const value = phoneNumberInput.value;
    if(value.length >= 1){
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
})

