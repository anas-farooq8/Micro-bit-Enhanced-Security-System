# Micro:bit Enhanced Security System

## Introduction
![CodeBlocks](https://github.com/anas-farooq8/Micro-bit-Enhanced-Security-System/assets/150327092/c728e5ab-1a5f-4356-af47-019a841af2cc)

The Micro:bit Enhanced Security System is a simple, efficient way to monitor security using the BBC micro:bit. This project harnesses the power of the sensors attached to micro:bit - the accelerometer for detecting shaking and the light sensor for monitoring light intensity changes. It's an ideal project for those looking to explore the capabilities of micro:bit in the realm of basic security solutions.

## System Overview
At the heart of this security system is the micro:bit, a compact and versatile microcontroller board. The system leverages two of its onboard sensors - the light sensor and the accelerometer - to detect potential security breaches. It's designed to be user-friendly, with the capability to reset after an alarm trigger and to identify the specific sensor that activated the alarm.

### Sensors Used
1. **Light Sensor**: Monitors ambient light levels to detect unexpected changes that could suggest unauthorized access.
2. **Accelerometer**: Detects movement or tampering when the micro:bit is physically disturbed.

## Functional Description
Here's how the system works:
- The light sensor continuously checks for changes in light intensity. If the light level crosses a certain threshold, it triggers the alarm.
- The accelerometer senses any 'shake' gesture, signaling potential tampering, which also sets off the alarm.
- Upon triggering, the micro:bit displays a visual icon (a Skull for shaking and a Ghost for light detection) and plays an alarm tune.
- The system can be reset and made ready for the next detection cycle with a simple button press.


# Project Demo

## Working
* Press shake or shake the micro:bit hub; skull icon will appear and alarm sets on for indefinitely. Until you Push the A button.
![Screenshot (43)](https://github.com/anas-farooq8/Micro-bit-Enhanced-Security-System/assets/150327092/2564ea8e-adda-44b4-905b-f55b8e50b900)
![Screenshot (44)](https://github.com/anas-farooq8/Micro-bit-Enhanced-Security-System/assets/150327092/da772b9f-c8f5-4f6c-b954-7dce0e6f7df7)
* Light Intensity threshold is set to 150, if you increase the light Intensity an alarm sets on. Pressing A will stop the Alarm but deactivate the Light alarm for further use. Push B to activate the Light Intensity detection again. 
![Screenshot (45)](https://github.com/anas-farooq8/Micro-bit-Enhanced-Security-System/assets/150327092/84986b48-25ff-45e5-973a-d631661a7638)


## Invitation for https://classroom.microbit.org/
https://classroom.microbit.org/join?id=52988&password=YEU882A7
