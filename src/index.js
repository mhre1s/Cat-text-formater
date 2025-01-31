const cpf = document.getElementById('cpf')
cpf.addEventListener('input', ev =>{
    const formatedCpf = ev.target.value.replace(/\D/g, "");
    ev.target.value = formatedCpf
})


function toTitleCase(text){

    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

const capsLock = document.getElementById('capslock')
capsLock.addEventListener('input', ev =>{
    const text = ev.target.value
    const formattedText = toTitleCase(text)
    ev.target.value = formattedText;

    console.log(toTitleCase(formattedText))
}) 

const putInCaps = document.getElementById('put-capslock')

putInCaps.addEventListener('input', ev =>{
    const lowerCaseText = ev.target.value
    const upperCaseText = lowerCaseText.toUpperCase()
    ev.target.value = upperCaseText
})

document.querySelectorAll("button[id^='copyButton']").forEach(button => {
    button.addEventListener("click", async function (ev) {
        ev.preventDefault()
        let parentDiv = this.closest("div"); 
        let inputField = parentDiv.querySelector("input, textarea"); 

        if (inputField) {
            inputField.setSelectionRange(0, inputField.value.length); 

            try {
                await navigator.clipboard.writeText(inputField.value);
                let message = parentDiv.querySelector("#paragraph")
                message.classList.remove("hidden")

                setTimeout(()=>message.classList.add("hidden"), 2000)
            } catch (err) {
                console.error("Erro ao copiar:", err);
            }
        }
    });
});

