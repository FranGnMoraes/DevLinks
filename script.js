function toggleMode() {
    const html = document.documentElement

    // if (html.classList.contains('dark')) {
    //     html.classList.remove('dark')
    // } else {
    //     html.classList.add('dark')
    // }

    html.classList.toggle('dark')

    const img = document.querySelector("#profile img")

    const isDarkMode = html.classList.contains('dark')

    if (isDarkMode) {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', "Foto de menina de cabelo tom marsala, médio e liso com leve maquiagem marsala e delineado preto. Usa um colar dourado e vestido em tom preto e esboça um leve sorriso. Em fundo rosa pastel")
    } else {
        img.setAttribute('src', './assets/avatar2.png')
        img.setAttribute('alt', "Foto de menina de cabelo tom marsala, médio e liso com leve maquiagem marsala e delineado preto. Usa um colar dourado e vestido em tom preto e esboça um leve sorriso. Em fundo violeta")
    }
}
