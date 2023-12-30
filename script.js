const toggleMode = () => {

    const html = document.documentElement

    html.classList.toggle('light')

}

document.getElementById('switch').addEventListener('click', toggleMode)