let car = confirm('Bmw X7 or Mersedes GLS600')
if(car === true) {
    let price = confirm('Стоимость Bmw X7 136.000$, хотите купить?') 
    if(price === true) {
        let color = confirm('Black or white')
        if(color === true) {
            let hatch = confirm('Хотите ли вы люк? (Стоимость 10%)')
            if(hatch === true) {
                let tonirovka = confirm('Хотите ли вы тонировку? (Стоимость 5%)')
                if(tonirovka === true) {
                    let summa = confirm('Ваш заказ принят, общая сумма 154.000$')
                } else {
                    let summa = confirm('Ваш заказ принят, общая сумма 136.000$')
                }
            } else {
                 let tonirovka = confirm('Хотите ли вы тонировку? (Стоимость 5%)')
                if(tonirovka === true) {
                    let summa = confirm('Ваш заказ принят, общая сумма 142.800$')
                } else {
                    let summa = confirm('Ваш заказ принят, общая сумма 136.000$')
                }
            }
        } else {
            let hatch = confirm('Хотите ли вы люк? (Стоимость 10%)')
            if(hatch === true) {
                let tonirovka = confirm('Хотите ли вы тонировку? (Стоимость 5%)')
                if(tonirovka === true) {
                    let summa = confirm('Ваш заказ принят, общая сумма 154.000$')
                } else {
                    let summa = confirm('Ваш заказ принят, общая сумма 147.200$')
                }
            } else {
                let tonirovka = confirm('Хотите ли вы тонировку? (Стоимость 5%)')
                if(tonirovka === true) {
                    let summa = confirm('Ваш заказ принят, общая сумма 142.800$')
                } else {
                    let summa = confirm('Ваш заказ принят, общая сумма 136.000$')
                }
            }
        }
    } else {
        alert('Досвидания')
    }
} else {
    let price2 = confirm('Стоимость Mersedes GLS600 300.000$, хотите купить?')
    if(price2 === true) {
        let color2 = confirm('Black or white')
        if(color2 === true) {
            let hatch2 = confirm('Хотите ли вы люк? (Стоимость 10%)')
            if(hatch2 === true) {
                let tonirovka2 = confirm('Хотите ли вы тонировку? (Стоимость 5%)')
                if(tonirovka2 === true) {
                    let summa2 = confirm('Ваш заказ принят, общая сумма 345.000$')
                } else {
                    let summa2 = confirm('Ваш заказ принят, общая сумма 330.000$')
                }
            } else {
                let tonirovka2 = confirm('Хотите ли вы тонировку? (Стоимость 5%)')
                if(tonirovka2 === true) {
                    let summa2 = confirm('Ваш заказ принят, общая сумма 315.000$')
                } else {
                    let summa2 = confirm('Ваш заказ принят, общая сумма 300.000$')
                }
            }
        } else {
            let hatch2 = confirm('Хотите ли вы люк? (Стоимость 10%)')
            if(hatch2 === true) {
                let tonirovka2 = confirm('Хотите ли вы тонировку? (Стоимость 5%)')
                if(tonirovka2 === true) {
                    let summa2 = confirm('Ваш заказ принят, общая сумма 345.000$')
                } else {
                    let summa2 = confirm('Ваш заказ принят, общая сумма 330.000$')
                }
            } else {
                let tonirovka2 = confirm('Хотите ли вы тонировку? (Стоимость 5%)')
                if(tonirovka2 === true) {
                    let summa2 = confirm('Ваш заказ принят, общая сумма 315.000$')
                } else {
                    let summa2 = confirm('Ваш заказ принят, общая сумма 300.000$')
                }
            }
        }
    } else {
        alert('Досвидания')
    }
}