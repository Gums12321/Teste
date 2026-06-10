function Gire (V: number) {
    servos.P0.run(V)
    servos.P1.run(V)
    servos.P0.run(V)
}
basic.forever(function () {
	
})
