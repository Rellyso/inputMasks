const percentInput = document.querySelector('input[name=formatNumber]')

percentInput.addEventListener("keydown", (e) => {
    setTimeout(
        () => {

            let { value } = e.target

            value = value.replace(/\W/g, "")
            
            if (e.key == "Backspace") {
                // 245%
                value = value.slice(0,-1)
            }

            value = new Intl.NumberFormat('pt-br', {
                style:"percent",
                minimumFractionDigits: 2,
                maximumFractionDigits: 4,
            }).format(value / 10000)


            e.target.value = value

        }, 1)
})

const Mask = {

    apply(input, func) {
        console.log(input.value)
        input.value = Mask[func](input.value) // == Mask.func(value)
    },

    format(value) {
        setTimeout(() => {
            value = value.replace(/\D/g, "")

            return new Intl.NumberFormat('pt-BR', {
                style: 'percent',
            }).format(value)
        }, 1)
    }
}

