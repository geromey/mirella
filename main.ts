input.onButtonPressed(Button.A, function () {
    if (position > 0) {
        position += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (position < 4) {
        position += 1
    }
})
let position = 0
let asteroids: number[] = []
position = 2
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        if (index == position) {
            led.plot(index, 4)
        } else {
            led.unplot(index, 4)
        }
    }
})
