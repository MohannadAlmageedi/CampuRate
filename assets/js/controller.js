document.getElementById("surveyForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);


    const scriptURL = "https://script.google.com/macros/s/AKfycbzfFWvrPMG6V-b_ttoRi0DNmHv24hhwQcKE6LhUJI5YpM07x8ajlqs5SVKf0mCcbKJ5/exec";

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("The data has been successfully submitted!");
            form.reset();
            window.location.href = "../views/thankyou.html";
        } else {
            alert("An error occurred during submission. Please try again later.");
        }
    } catch (error) {
        alert("Failed to connect to the server.");
    }
});
