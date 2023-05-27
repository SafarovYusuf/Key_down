const insert = document.querySelector("#insert")

window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
    
    <div class='key'>
        <small> event.key</small>
        ${e.key == ' ' ? "Space" : e.key}
    </div>

    <div class="key">
        <small> event.keyCode</small>
        ${e.keyCode}
    </div>

    <div class="key">
    <small>event code</small>
    ${e.code}
    </div>

    `

    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.code)
    console.log('')
})