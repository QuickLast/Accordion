document.addEventListener("DOMContentLoaded", () => {

    const buttonPlusElement = document.querySelectorAll('.plus');
    const buttonMinusElement = document.querySelectorAll('.minus');
    const accordionElement = document.querySelectorAll('.accordion');
    const titlecontainerElement = document.querySelectorAll('.titlecontainer');

    buttonPlusElement.forEach((button, index) => {

        const accordion = accordionElement[index];
        const titlecontainer = titlecontainerElement[index];
        const buttonMinus = buttonMinusElement[index];
        const buttonPlus = buttonPlusElement[index];
        button.addEventListener('click', () => {
            accordion.classList.toggle('show');
            titlecontainer.classList.toggle('show');

            if(accordion.classList.contains('show')) {
                buttonPlus.style.display = 'none';
                buttonMinus.style.display = 'block';
            } else {
                buttonPlus.style.display = 'block';
                buttonMinus.style.display = 'none';
            }
        })

    })

    buttonMinusElement.forEach((button, index) => {

        const accordion = accordionElement[index];
        const titlecontainer = titlecontainerElement[index];
        const buttonMinus = buttonMinusElement[index];
        const buttonPlus = buttonPlusElement[index];
        button.addEventListener('click', () => {
            accordion.classList.toggle('show');
            titlecontainer.classList.toggle('show');
            buttonPlus.style.display = 'block';
            buttonMinus.style.display = 'none';
            })

    })
    

});