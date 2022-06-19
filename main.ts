input.onButtonPressed(Button.A, function () {
    pressione_A += 1
    if (pressione_A == 1) {
        basic.showIcon(IconNames.Sad)
    }
    if (pressione_A == 2) {
        basic.showNumber(input.temperature())
    }
    while ((pressione_A == 3 || pressione_B == 2) && risposta == 0) {
        if (input.temperature() >= 21 && pressione_A == 3 || input.temperature() < 21 && pressione_B == 2) {
            basic.showString("Grazie!")
            pressione_A = 10
            pressione_B = 10
            risposta = 1
        } else if (input.temperature() >= 21 && pressione_B == 2 || input.temperature() < 21 && pressione_A == 3) {
            basic.showString("Sei sicuro? Riprova!")
            risposta = 0
            basic.pause(1000)
        }
    }
    if (pressione_A == 11) {
        while (pressione_B >= 10) {
            if (input.compassHeading() <= 45) {
                basic.showString("N")
                indice = 1
            } else if (input.compassHeading() > 45 && input.compassHeading() <= 135) {
                basic.showString("E")
                indice = 2
            } else if (input.compassHeading() > 135 && input.compassHeading() <= 225) {
                basic.showString("S")
                indice = 3
            } else if (input.compassHeading() > 225 && input.compassHeading() <= 315) {
                basic.showString("O")
                indice = 4
            } else {
                basic.showString("N")
                indice = 1
            }
        }
    }
    if (pressione_A == 12) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showString("E' stato bello giocare insieme!")
    }
})
input.onButtonPressed(Button.B, function () {
    pressione_B += 1
    if (pressione_B == 1) {
        basic.showIcon(IconNames.Heart)
    }
    while ((pressione_A == 3 || pressione_B == 2) && risposta == 0) {
        if (input.temperature() >= 21 && pressione_A == 3 || input.temperature() < 21 && pressione_B == 2) {
            basic.showString("Grazie!")
            pressione_A = 10
            pressione_B = 10
            risposta = 1
        } else if (input.temperature() >= 21 && pressione_B == 2 || input.temperature() < 21 && pressione_A == 3) {
            basic.showString("Sei sicuro? Riprova!")
            risposta = 0
            basic.pause(1000)
        }
    }
    if (risposta == 1) {
        if (indice == 1 && pressione_B >= 11) {
            basic.showString("Bravissimo! ")
            risposta = 2
            pressione_B = 9
        } else if (indice != 1 && pressione_B >= 11) {
            basic.showString("Sicuro? Non vorrei perdermi…")
        }
    }
})
let indice = 0
let risposta = 0
let pressione_B = 0
let pressione_A = 0
pressione_A = 0
pressione_B = 0
risposta = 0
