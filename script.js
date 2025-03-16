//your JS code here. If required.
// OTP Verification Frontend Code

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            if (value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value && index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = "";
            }
        });
    });
});

	
	
}