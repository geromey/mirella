input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . #
        . # . . .
        . # # # #
        # # # # .
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("ZOLTAN")
    basic.showString("MIRELLA")
    basic.showString("FLAVIEN")
})
