input.onButtonPressed(Button.A, function () {
    basic.showString("" + (dht11_dht22.readData(dataType.humidity)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (dht11_dht22.readData(dataType.temperature)))
})
dht11_dht22.selectTempType(tempType.celsius)
dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.P0,
true,
false,
true
)
basic.forever(function () {
	
})
