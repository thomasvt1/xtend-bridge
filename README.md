# xtend-bridge
This is small writeup/howto to connect the Intergas Xtend hybrid heat-pump to Home Assistant.

# Requirements
* 2x ESP8266
* 3x female to female dupont wires ([link](https://www.tinytronics.nl/shop/en/cables-and-connectors/cables-and-adapters/prototyping-wires/dupont-compatible-and-jumper/dupont-jumper-wire-female-female-10cm-10-wires))
* [Home Assistant](https://www.home-assistant.io/)
* [Node-RED](https://nodered.org/)

# How it works
This setup 'abuses' the AP mode of the Xtend by polling the Xtend API every 10 seconds, all output is printed and send to the second ESP (now called ESP2) where we run a ser2net server. Node-RED is subscribed to this ser2net server and validates/parses the data received. After this is done data is sent to Home Assistant using the [Node-RED Home Assistant plugin](node-red-contrib-home-assistant-websocket)

![Xtend Data Flow](https://raw.githubusercontent.com/thomasvt1/xtend-bridge/master/images/xtend-esp-bridge.drawio.png "Xtend Data Flow")


# Setup

## Setting up the first ESP8266
The first ESP8266 will connect to the Xtend heatpump, currently this is only possible when the Xtend is in 'AP mode' (purple light blinking). 
