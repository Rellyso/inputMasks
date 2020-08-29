const percentInput = document.querySelector('input[name=formatNumber]')
const cpfInput = document.querySelector('input[name=cpf]')
const celInput = document.querySelector('input[name=cel]')

percentInput.addEventListener("keydown", (e) => {
    setTimeout(
        () => {

            let { value } = e.target

            value = value.replace(/\D/g, "")

            if (e.key == "Backspace") {
                // 245%
                value = value.slice(0, -1)
            }

            value = new Intl.NumberFormat('pt-br', {
                style: "percent",
                minimumFractionDigits: 2,
                maximumFractionDigits: 4,
            }).format(value / 10000)


            e.target.value = value

        }, 1
    )
})

cpfInput.addEventListener("keydown", (e) => {
    if (e.key != "Backspace" && e.key != "Delete") {

        setTimeout(
            () => {
                let { value } = e.target

                value = value.replace(/\D/g, "")
                value = value.replace(/(\d{3})/, "$1.")
                value = value.replace(/(\D)(\d{3})/, "$1$2.")
                value = value.replace(/(\D)(\d{3})(\D)(\d{3})/, "$1$2$3$4-")
                value = value.replace(/(\b-\d\d)(\d)/, "$1")

                e.target.value = value

            }, 1
        )
    }
})

celInput.addEventListener("keydown", (e) => {
    if (e.key != "Backspace" && e.key != "Delete") {

        setTimeout(
            () => {
                let { value } = e.target

                value = value.replace(/\D/g, "") //apenas números

                value = value.replace(/^(\d\d)/i, "($1) ")
                value = value.replace(/(\b\d)(\d{4})/, "$1 $2")
                value = value.replace(/(\b\d)(\d{3})(\d{1})/, "$1$2-$3")
                value = value.replace(/(\b-\d\d\d\d)(\d)/, "$1")

                e.target.value = value

            }, 1
        )
    }
})

// const Mask = {
//     apply(input, func) {
//         input.value = Mask[func](input.value) // == Mask.func(value)
//     },

//     cpfFormat(value) {
//         setTimeout(() => {

//         }, 1)
//     }
// }
