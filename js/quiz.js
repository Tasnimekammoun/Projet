function calculateResult(event) {
   
    event.preventDefault();

    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

   
    const question1 = form.querySelector('input[name="q1"]:checked');
    const question2 = form.querySelector('input[name="q2"]:checked');
    const question5 = form.querySelector('input[name="q5"]:checked');

       if (!question1 || !question2 || !question5) {
        resultDiv.textContent = "Please answer all the questions before submitting.";
        resultDiv.style.color = "red";
        return;
    }

   
    const flavor = question1.value;
    const format = question2.value;
    const preference = question5.value;

    let result = "";

   
    if (flavor === "chocolate" && format === "sharing") {
        result = "You prefer chocolate desserts to share, such as a rich layer cake.";
    } else if (flavor === "fruit" && format === "individual") {
        result = "You enjoy individual fruit-based desserts, like tarts or parfaits.";
    } else if (preference === "savory") {
        result = "You prefer savory items, like quiches or savory bites.";
    } else {
        result = "You appreciate unique creations, perfect for special occasions.";
    }

   
    resultDiv.textContent = ` ${result}`;
    resultDiv.style.color = "green";
}
