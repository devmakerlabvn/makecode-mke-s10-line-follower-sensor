/**
 * Giá trị Analog của cảm biến
 */
/**
 * Giá trị (%) của cảm biến
 */
let dataPercent = 0
let dataAnalog = 0
// Bật cổng Serial
serial.setBaudRate(BaudRate.BaudRate115200)
// Xóa toàn bộ nội dung trên LCD (nếu có)
lcd.clearScreen()
// Cho hiển thị tiêu đề trước
lcd.displayText("Line Detect", 1, 1)
lcd.displayText(lcd.displaySymbol(lcd.Symbols.sym02), 1, 2)
basic.forever(function () {
    // Đọc giá trị Analog của cảm biến và đổi ra thang (%)
    dataAnalog = pins.analogReadPin(AnalogPin.P0)
    dataPercent = Math.round(Math.map(dataAnalog, 0, 1023, 100, 0))
    // Cho hiển thị giá trị (%) của cảm biến trên LCD
    if (dataPercent > 50) {
        lcd.displayText("" + dataPercent + "% [===]  ", 3, 2)
    } else {
        lcd.displayText("" + dataPercent + "% [   ]  ", 3, 2)
    }
    // Gửi giá trị (%) của cảm biến lên Serial
    serial.writeLine("" + (dataPercent))
    // Dừng 0.5s
    basic.pause(500)
})
