# xtend-bridge
This is small writeup/howto to connect the Intergas Xtend hybrid heat-pump to Home Assistant.

# Requirements
* 2x [ESP8266](https://www.tinytronics.nl/en/development-boards/microcontroller-boards/with-wi-fi/esp8266-nodemcu-v2)
* 1x USB to micro-usb cable
* 3x female to female dupont wires ([link](https://www.tinytronics.nl/shop/en/cables-and-connectors/cables-and-adapters/prototyping-wires/dupont-compatible-and-jumper/dupont-jumper-wire-female-female-10cm-10-wires))
* [Home Assistant](https://www.home-assistant.io/)
* [Node-RED](https://nodered.org/)

# How it works
This setup 'abuses' the AP mode of the Xtend by polling the Xtend API every 10 seconds, all output is printed and send to the second ESP (now called ESP2) where we run a ser2net server. Node-RED is subscribed to this ser2net server and validates/parses the data received. After this is done data is sent to Home Assistant using the [Node-RED Home Assistant plugin](node-red-contrib-home-assistant-websocket)

![Xtend Data Flow](https://raw.githubusercontent.com/thomasvt1/xtend-bridge/main/images/xtend-esp-bridge.drawio.png "Xtend Data Flow")


# Setup

## Setting up the first ESP8266
The first ESP8266 will connect to the Xtend heatpump, currently this is only possible when the Xtend is in 'AP mode' (purple light blinking). So after flashing the ESP don't forget to push the button on the Xtend.
### Steps
1. Download and edit [this](ESP-1.ino) file, change line 35 with your Xtend's WiFi SSID and password
2. Flash the `ESP-1.ino` file on ESP1

## Setting up the second ESP8266
The second ESP will connect with serial to ESP1, and allow us to bridge the serial from ESP1 to your local network.
### Steps
1. Download and edit [this](ESP-2.yaml) file, change the secrets
2. Setup ESPHome if you haven't already ([link](https://esphome.io/guides/getting_started_command_line))
3. Flash `ESP2-2.yaml` on ESP2 with ESPHome

## Wiring the ESP's
For the serial connection to work we need to connect 3 pins, use the follwing schema to connect them: [photo](https://raw.githubusercontent.com/thomasvt1/xtend-bridge/main/images/esp-connected.jpg)
| ESP1 | ESP2 |
|------|------|
| GND  | GND  |
| 5V   | 5V   |
| TX   | RX   |

## Setting up Node-RED
Node-RED will connect to ESP-2 with a ser2net client, convert and parse the data and send it to Home Assistant using [Node-RED Home Assistant plugin](node-red-contrib-home-assistant-websocket).
### Steps
1. Import [flows.json](flows.json) into Node-RED
2. If you haven't set-up the Node-RED Home Assistant plugin, use this [documentation](https://zachowj.github.io/node-red-contrib-home-assistant-websocket/guide/#using-the-palette-manager)
3. Open the first node 'xtend-gateway' and change the IP address to the IP-address of ESP2
4. Deploy the flow

## Home Assistant
Home Assistant just requires a few things to get your Xtend data available
### Steps
1. Install Node-RED companion [link](https://github.com/zachowj/hass-node-red)
2. Restart Home Assistant
3. Add the 'Node-RED Companion' by adding it (Settings > Integrations -> Add Integration -> Node-RED Companion)

### Checking if it works
Now everything _should_ work!
You can go to Settings > Integrations > Node-RED Companion > Xtend and you should see the sensor status
![Home Assistant Sensor Readings](https://raw.githubusercontent.com/thomasvt1/xtend-bridge/main/images/home-assistant-node-red.png "Home Assistant Sensor Readings")
