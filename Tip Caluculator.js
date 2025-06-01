function calculateTip() {
    let billAmountValue = document.getElementById("billAmount").value;
    let percentageTipValue = document.getElementById("percentageTip").value;
    if (billAmountValue === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input.";

    } else if (percentageTipValue === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input.";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let caluclatedTip = ((parseInt(percentageTipValue) / 100) * parseInt(billAmountValue));
        let totalAmount = parseInt(billAmountValue) + parseInt(caluclatedTip);
        document.getElementById("tipAmount").value = (caluclatedTip);
        document.getElementById("totalAmount").value = (totalAmount);

    }
}