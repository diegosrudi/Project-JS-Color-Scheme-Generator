const colorForm = document.getElementById('color-form')
const colorPicker = document.getElementById('color-picker')
const paletteContainer = document.getElementById('palette-container')
const schemeMode = document.getElementById('scheme-mode')

colorForm.addEventListener("submit", function(e) {
    e.preventDefault()
    
    const cleanColor = colorPicker.value.slice(1)
    const currentMode = schemeMode.value 

    fetch(`https://www.thecolorapi.com/scheme?hex=${cleanColor}&mode=${currentMode}`)
    .then(res => res.json())
    .then(data => {
        const htmlPalette = data.colors.map(color => {
            const hexValue = color.hex.value
            return `
                <div class="color-column">
                <div class="color-block" style="background-color: ${hexValue};"></div>
                <span class="color-hex">${hexValue}</span>
            </div>
            `
        }).join('')
        paletteContainer.innerHTML = htmlPalette
    })

})


