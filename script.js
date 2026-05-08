/* Menu Bar */
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    }
})

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try{
        const response = await fetch("https://formspree.io/f/mwvynqwd", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if(response.ok){
            form.reset();

            formMessage.textContent = "Message sent successfully!";
            formMessage.classList.add("show");

            setTimeout(() => {
                formMessage.classList.remove("show");
            }, 3000);
        }
        else{
            formMessage.textContent = "Failed to send message.";
            formMessage.classList.add("show");
        }
    }
    catch(error){
        formMessage.textContent = "Something went wrong.";
        formMessage.classList.add("show");
    }
});