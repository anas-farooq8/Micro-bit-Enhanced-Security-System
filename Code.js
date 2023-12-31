// Starts the alarm sound
function soundAlarm () {
    music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
}
// Event handler for button B press
input.onButtonPressed(Button.B, function () {
    // Re-enable the light sensor alarm
    if (!(lightStabled)) {
        lightStabled = !(lightStabled)
    }
})
// Event handler for shake gesture
input.onGesture(Gesture.Shake, function () {
    // Check if the alarm has not already been triggered
    if (!(alarmTriggered)) {
        // Set the alarm state to triggered
        alarmTriggered = true
        // Call the function to start the alarm sound
        soundAlarm()
        // Display a skull icon on the micro:bit LED screen
        basic.showIcon(IconNames.Skull)
    }
})
// Function to stop the alarm and reset the system
function stopAlarm () {
    // Reset the alarm state to not triggered
    alarmTriggered = false
    // Stop any playing melody
    music.stopMelody(MelodyStopOptions.All)
    // Clear the micro:bit LED screen
    basic.clearScreen()
    // Display 'OK' to indicate the system has been reset
    basic.showString("OK")
}
let alarmTriggered = false
let lightStabled = false
input.onButtonPressed(Button.A, stopAlarm)
// Variable to track if light sensor alarm can be triggered
lightStabled = true
// Threshold value for the light sensor
let lightThreshold = 150
// Continuously executed loop
basic.forever(function () {
    // Check if the alarm has not been triggered and the light sensor alarm is enabled
    if (!(alarmTriggered) && lightStabled) {
        // Check if the current light level exceeds the threshold
        if (input.lightLevel() > lightThreshold) {
            // Set the alarm state to triggered
            alarmTriggered = true
            // Disable further light sensor alarm triggers
            lightStabled = false
            // Start the alarm sound
            soundAlarm()
            // Display a triangle icon on the LED screen
            basic.showIcon(IconNames.Ghost)
        }
    }
})
