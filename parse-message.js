const e = {
    status_0$temp_flow: {
        key: "7e06",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$temp_supply: {
        key: "7ee6",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$temp_return: {
        key: "7e81",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$temp_hotwater: {
        key: "7e28",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$temp_coldwater: {
        key: "7eb2",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$temp_flue: {
        key: "7ead",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$water_pressure: {
        key: "7ed3",
        type: "int16",
        unit: "unit.bars",
        factor: "0.01"
    },
    status_0$temp_set: {
        key: "7e31",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$temp_t_ext_1: {
        key: "7e52",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$temp_t_ext_2: {
        key: "7e5b",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$temp_misscher: {
        key: "7e9f",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_0$flame_current: {
        key: "7e82",
        type: "int16",
        unit: "unit.micro_ampere",
        factor: "0.01"
    },
    status_0$heatdemand_status: {
        key: "7e51",
        type: "uint8",
        options: {
            85: "sensortest",
            86: "commissioning",
            87: "crankheating",
            170: "service",
            204: "dhw",
            51: "dhw_int",
            240: "boiler_int",
            15: "boiler_ext",
            153: "postrun_boiler",
            102: "ch",
            103: "ch_wait",
            104: "defrosting",
            0: "opentherm",
            255: "heatup",
            24: "frost",
            230: "starting_ch",
            231: "postrun_ch",
            126: "standby",
            127: "off",
            37: "ch_rf",
            205: "dhw_hreco",
            117: "starting_cooling",
            118: "cooling",
            119: "cooling_wait",
            189: "postrun_cooling"
        }
    },
    status_0$rf_thermostat_status: {
        key: "7e14",
        type: "uint8",
        bits: ["rf_rth_bound", "rf_rth_communication", "rf_rth_battery_info", "rf_rth_battery_ok", "rf_rth_nefertari"]
    },
    status_0$heatdemand_io: {
        key: "7e3e",
        type: "uint8",
        bits: ["gp_switch", "tap_switch", "roomtherm", "pump", "threewayvalve", "alarm_status", "roomthermostat_230V", "opentherm"]
    },
    status_0$burner_status: {
        key: "7e7a",
        type: "uint8",
        options: {
            0: "startup",
            1: "interpurge",
            2: "postpurge",
            4: "prepurge",
            8: "ignition",
            16: "waiting",
            32: "running",
            64: "rest",
            128: "lockout"
        }
    },
    status_0$burner_io: {
        key: "7e76",
        type: "uint8",
        bits: ["gasvalve", "spark", "io_signal", "ch_ot_disabled", "low_water_pressure", "pressure_sensor", "burner_block", "grad_flag"]
    },
    status_0$lockout_code: {
        key: "7e2c",
        type: "uint8",
        options: {
            1: "LOCKOUT_CH_PUMP",
            2: "LOCKOUT_DHW_PUMP",
            3: "LOCKOUT_CONDENSOR_OVERHEAT",
            9: "LOCKOUT_ERROR_LOCKOUT_DEVICE",
            10: "LOCKOUT_DEFROST_WATER_TEMP_LOW",
            18: "LOCKOUT_HEATPUMP_TYPE_UNCONFIGURED",
            19: "LOCKOUT_BMM_ILLIGAL_SERIAL",
            20: "LOCKOUT_STORAGEHANDLER_SYNC",
            22: "LOCKOUT_FIRMWARE_COMPATIBILITY",
            23: "LOCKOUT_XTP_DEVICE_INTERNAL_FAULT",
            24: "LOCKOUT_XTP_DEVICE_CONFIG_FAULT",
            25: "LOCKOUT_XTP_COMMUNICATION_FAULT",
            26: "LOCKOUT_XTP_START_FAULT",
            31: "LOCKOUT_ERROR_UNKNOWN",
            37: "LOCKOUT_SENSOR_HP_RETURN",
            38: "LOCKOUT_SENSOR_HP_SUPPLY",
            39: "LOCKOUT_SENSOR_SYSTEM_SUPPLY",
            40: "LOCKOUT_SENSOR_OUTDOOR",
            46: "LOCKOUT_SENSOR_BOILER_RETURN",
            47: "LOCKOUT_SENSOR_BOILER_SUPPLY",
            50: "LOCKOUT_CODE_THERMOSTAT_HEATPUMP",
            51: "LOCKOUT_CODE_THERMOSTAT_BOILER",
            254: "LOCKOUT_BYPASS_MODE_ACTIVE",
            255: "LOCKOUT_NO_ERROR"
        }
    },
    status_0$internal_fault: {
        key: "7e67",
        type: "uint8",
        options: {
            0: "ERROR_UNKNOWN",
            1: "ERROR_INTERRUPT_SEQUENCE",
            2: "ERROR_INTERRUPT_SEQUENCE2",
            5: "ERROR_INTERRUPT_NUMBER",
            6: "ERROR_MAIN_NUMBER",
            7: "ERROR_MAIN_SEQUENCE_TIMEOUT",
            8: "ERROR_MAIN_LOAD",
            9: "ERROR_CORRUPT_SEQUENCE_ID",
            10: "ERROR_CRC32_CHECKSUM",
            11: "ERROR_CRC32_RELEASE",
            12: "ERROR_CRC32_TIMEOUT",
            13: "ERROR_CRC32_NUMBER",
            14: "ERROR_CRC32_VALUE",
            19: "ERROR_EEPROM_BMM",
            20: "ERROR_CHECKSUM",
            21: "ERROR_CHECKSUM_RELEASE",
            22: "ERROR_CHECKSUM_TIMEOUT",
            23: "ERROR_CHECKSUM_NUMBER",
            24: "ERROR_CHECKSUM_VALUE",
            30: "ERROR_RAM_CUR_VALUE_1",
            31: "ERROR_RAM_CUR_VALUE_2",
            32: "ERROR_RAM_ADDRESS_1",
            33: "ERROR_RAM_ADDRESS_2",
            34: "ERROR_RAM_COUNTER_1",
            35: "ERROR_RAM_COUNTER_2",
            36: "ERROR_RAM_TIMEOUT_1",
            37: "ERROR_RAM_TIMEOUT_2",
            38: "ERROR_RAM_VALUE_1",
            39: "ERROR_RAM_VALUE_2",
            40: "ERROR_RAM_COUNTER",
            41: "ERROR_RAM_TIMEOUT",
            42: "ERROR_RAM_INIT_STATE",
            50: "ERROR_ISR_SEQUENCE_AD",
            80: "ERROR_AD_PIN_27",
            81: "ERROR_AD_PIN_30",
            82: "ERROR_SHORTCUT_PIN_27_PIN_28",
            83: "ERROR_SHORTCUT_PIN_29_PIN_30",
            84: "ERROR_AMPLIFIER_REF_0",
            85: "ERROR_AMPLIFIER_REF_1",
            86: "ERROR_AMPLIFIER_REF_2",
            87: "ERROR_AMPLIFIER_REF_3",
            90: "ERROR_SAMPLING_NOT_STARTED",
            107: "ERROR_CLOCK_REF",
            108: "ERROR_CLOCK_CRC",
            109: "ERROR_MAIN_SEQUENCE_CHECK_TEMPERATURES",
            111: "ERROR_HMI_INIT",
            120: "ERROR_FAST_SEQUENCE_120",
            121: "ERROR_FAST_SEQUENCE_121",
            122: "ERROR_FAST_SEQUENCE_122",
            123: "ERROR_FAST_SEQUENCE_123",
            124: "ERROR_FAST_SEQUENCE_124",
            125: "ERROR_FAST_SEQUENCE_125",
            126: "ERROR_FAST_SEQUENCE_126",
            127: "ERROR_FAST_SEQUENCE_127",
            128: "ERROR_FAST_SEQUENCE_128",
            129: "ERROR_FAST_SEQUENCE_129",
            130: "ERROR_FAST_SEQUENCE_130",
            131: "ERROR_FAST_SEQUENCE_131",
            132: "ERROR_FAST_SEQUENCE_132",
            133: "ERROR_FAST_SEQUENCE_133",
            134: "ERROR_FAST_SEQUENCE_134",
            135: "ERROR_FAST_SEQUENCE_135",
            136: "ERROR_FAST_SEQUENCE_136",
            137: "ERROR_FAST_SEQUENCE_137",
            138: "ERROR_FAST_SEQUENCE_138",
            139: "ERROR_FAST_SEQUENCE_139",
            140: "ERROR_SLOW_SEQUENCE_140",
            141: "ERROR_SLOW_SEQUENCE_141",
            142: "ERROR_SLOW_SEQUENCE_142",
            143: "ERROR_SLOW_SEQUENCE_143",
            144: "ERROR_SLOW_SEQUENCE_144",
            145: "ERROR_SLOW_SEQUENCE_145",
            146: "ERROR_SLOW_SEQUENCE_146",
            147: "ERROR_SLOW_SEQUENCE_147",
            148: "ERROR_SLOW_SEQUENCE_148",
            149: "ERROR_SLOW_SEQUENCE_149",
            150: "ERROR_SLOW_SEQUENCE_150",
            151: "ERROR_SLOW_SEQUENCE_151",
            152: "ERROR_SLOW_SEQUENCE_152",
            153: "ERROR_SLOW_SEQUENCE_153",
            154: "ERROR_SLOW_SEQUENCE_154",
            155: "ERROR_SLOW_SEQUENCE_155",
            156: "ERROR_SLOW_SEQUENCE_156",
            157: "ERROR_SLOW_SEQUENCE_157",
            158: "ERROR_SLOW_SEQUENCE_158",
            159: "ERROR_SLOW_SEQUENCE_159",
            200: "ERROR_RESET_UNKNOWN",
            201: "ERROR_RESET_POR",
            202: "ERROR_RESET_VDDBOR",
            203: "ERROR_RESET_BOR",
            204: "ERROR_RESET_TRAPR",
            205: "ERROR_RESET_IOPUWR",
            206: "ERROR_RESET_CM",
            207: "ERROR_RESET_EXTR",
            208: "ERROR_RESET_WDTO",
            209: "ERROR_RESET_DPSLP",
            210: "ERROR_RESET_IDLE",
            211: "ERROR_RESET_SLEEP",
            212: "ERROR_RESET_DEFAULT_ISR",
            220: "ERROR_ADDRESS_ERROR_TRAP",
            221: "ERROR_MATH_ERROR_TRAP",
            222: "ERROR_OSCILLATOR_FAIL_TRAP",
            223: "ERROR_STACK_ERROR_TRAP",
            224: "ERROR_DEFAULT_ISR_TRAP",
            225: "ERROR_ALT_RESERVED_TRAP",
            226: "ERROR_STM32_INIT",
            227: "ERROR_MAIN_INIT",
            255: "ERROR_UNKNOWN"
        }
    },
    status_1$flowsensor_flow: {
        key: "794b",
        type: "int16",
        unit: "unit.liters_per_minute",
        factor: "0.01"
    },
    status_1$notification_code: {
        key: "7940",
        type: "uint8",
        options: {
            0: "WARN_PARAMETER_OUT_OF_BOUNDS",
            1: "WARN_LOW_PRESSURE",
            2: "WARN_NO_PRESSURE",
            8: "WARN_XTP_FAULT_HP_OFF",
            9: "WARN_HEATPUMP_SELECT_PHASE",
            10: "WARN_HEATPUMP_REMOTE_OFF",
            11: "WARN_HEATPUMP_FAILED",
            12: "WARN_KWH_METER",
            13: "WARN_CONDENSOR_OVERHEAT",
            14: "WARN_ROOMTHERM_FAILED",
            15: "WARN_CRANKHEATER",
            16: "WARN_WATER_TEMP_SENSORS",
            18: "WARN_EEPROM_BROKEN",
            19: "WARN_BMM_BROKEN",
            20: "WARN_NO_FLOW_DHW_CIRCUIT",
            21: "WARN_NO_FLOW_CH_CIRCUIT",
            22: "WARN_FLOW_CONTROL_DISABLED",
            23: "WARN_COMMISSIONING_LOW_FLOW",
            26: "WARN_RTC_TIME_INVALID",
            27: "WARN_RTC_CLOCK",
            31: "WARN_UNKNOWN",
            32: "WARN_DEFROST_TIMEOUT",
            33: "WARN_DEFROST_MONITOR_TIMEOUT",
            37: "WARN_SENSOR_HP_RETURN",
            38: "WARN_SENSOR_HP_SUPPLY",
            39: "WARN_SENSOR_SYSTEM_SUPPLY",
            40: "WARN_SENSOR_OUTDOOR",
            41: "WARN_SENSOR_CONDENSOR_REF_LIQ",
            42: "WARN_SENSOR_CONDENSOR_REF_GAS",
            46: "WARN_SENSOR_BOILER_RETURN",
            47: "WARN_SENSOR_BOILER_SUPPLY",
            48: "WARN_BOILER_FLOW_TOO_HIGH",
            49: "WARN_BOILER_FLOW_TOO_LOW",
            50: "WARN_BOILER_FLOW_REVERSED",
            51: "WARN_BOILER_FAULT",
            52: "WARN_BOILER_OPENTHERM_FAULT",
            53: "WARN_BOILER_BOILER_SETTING_MAX",
            54: "WARN_BOILER_NO_CH_REPONSE",
            60: "WARN_THERMOSTAT_VERSION",
            255: "WARN_NONE"
        }
    },
    status_1$OT_master_member_id: {
        key: "79f9",
        type: "uint8"
    },
    status_1$override_roomtemperature_1: {
        key: "798f",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_1$roomtemperature_set_1: {
        key: "7921",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_1$roomtemperature_1: {
        key: "79b3",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_1$override_roomtemperature_2: {
        key: "7986",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_1$roomtemperature_set_2: {
        key: "7928",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_1$roomtemperature_2: {
        key: "79ba",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_1$temp_outside_actual: {
        key: "79f8",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_1$OT_therm_prod_version: {
        key: "7911",
        type: "uint8"
    },
    status_1$OT_therm_prod_type: {
        key: "79e0",
        type: "uint8"
    },
    status_1$override_dhw_comfort: {
        key: "7971",
        type: "uint8"
    },
    status_1$gasvalve_current: {
        key: "79f4",
        type: "int8",
        unit: "unit.ampere",
        factor: "0.01"
    },
    status_1$ot2_therm_prod_version: {
        key: "79c4",
        type: "uint8"
    },
    status_1$OT2_therm_prod_type: {
        key: "79e1",
        type: "uint8"
    },
    status_1$OT2_master_member_id: {
        key: "79fe",
        type: "uint8"
    },
    status_1$rf_rth_master_type: {
        key: "79ec",
        type: "uint8"
    },
    status_1$rf_rth_master_version: {
        key: "79eb",
        type: "uint8"
    },
    status_1$hardware_type: {
        key: "79c1",
        type: "uint8"
    },
    status_2$fan_set: {
        key: "701e",
        type: "uint16",
        unit: "unit.rounds_per_minute"
    },
    status_2$fan_speed: {
        key: "70ee",
        type: "uint16",
        unit: "unit.rounds_per_minute"
    },
    status_2$fan_torque: {
        key: "702b",
        type: "uint16"
    },
    status_2$fan_bridge_temperature: {
        key: "70db",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_2$bus_voltage: {
        key: "70ce",
        type: "int16",
        unit: "unit.voltage",
        factor: "0.01"
    },
    status_2$pump_set: {
        key: "707e",
        type: "uint16",
        unit: "unit.rounds_per_minute"
    },
    status_2$pump_speed: {
        key: "701b",
        type: "uint16",
        unit: "unit.rounds_per_minute"
    },
    status_2$pump_flow: {
        key: "70ec",
        type: "uint16",
        unit: "unit.liters_per_hour"
    },
    status_2$pump_bridge_temperature: {
        key: "709a",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_2$temp_he1: {
        key: "7073",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_2$temp_he2: {
        key: "707a",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_2$stepper_pos_set: {
        key: "70cf",
        type: "uint16"
    },
    status_2$stepper_pos: {
        key: "70a3",
        type: "uint16"
    },
    status_3$SystemStatus: {
        key: "77dd",
        type: "uint8",
        options: {
            0: "TID_MONITOR_LOCKOUT",
            1: "TID_PUMP_VENTING",
            2: "TID_SERVICE",
            3: "TID_DEFROST",
            4: "TID_DHW",
            5: "TID_ROOMHEATING_COMFORT",
            6: "TID_ROOMHEATING_ECO",
            7: "TID_ROOMCOOLING",
            8: "TID_DHW_HEATEXCHANGER",
            9: "TID_FLOORHEATINGPROTOCOL",
            12: "TID_ANTIFREEZE",
            13: "TID_PUMP_MAINTENANCE",
            14: "TID_IDLE",
            255: "NO_TASK"
        }
    },
    status_3$PendingTask_1: {
        key: "7704",
        type: "uint8",
        options: {
            0: "TID_MONITOR_LOCKOUT",
            1: "TID_PUMP_VENTING",
            2: "TID_SERVICE",
            3: "TID_DEFROST",
            4: "TID_DHW",
            5: "TID_ROOMHEATING_COMFORT",
            6: "TID_ROOMHEATING_ECO",
            7: "TID_ROOMCOOLING",
            8: "TID_DHW_HEATEXCHANGER",
            9: "TID_FLOORHEATINGPROTOCOL",
            12: "TID_ANTIFREEZE",
            13: "TID_PUMP_MAINTENANCE",
            14: "TID_IDLE",
            255: "NO_TASK"
        }
    },
    status_3$PendingTask_2: {
        key: "770d",
        type: "uint8",
        options: {
            0: "TID_MONITOR_LOCKOUT",
            1: "TID_PUMP_VENTING",
            2: "TID_SERVICE",
            3: "TID_DEFROST",
            4: "TID_DHW",
            5: "TID_ROOMHEATING_COMFORT",
            6: "TID_ROOMHEATING_ECO",
            7: "TID_ROOMCOOLING",
            8: "TID_DHW_HEATEXCHANGER",
            9: "TID_FLOORHEATINGPROTOCOL",
            12: "TID_ANTIFREEZE",
            13: "TID_PUMP_MAINTENANCE",
            14: "TID_IDLE",
            255: "NO_TASK"
        }
    },
    status_3$PendingTask_3: {
        key: "770a",
        type: "uint8",
        options: {
            0: "TID_MONITOR_LOCKOUT",
            1: "TID_PUMP_VENTING",
            2: "TID_SERVICE",
            3: "TID_DEFROST",
            4: "TID_DHW",
            5: "TID_ROOMHEATING_COMFORT",
            6: "TID_ROOMHEATING_ECO",
            7: "TID_ROOMCOOLING",
            8: "TID_DHW_HEATEXCHANGER",
            9: "TID_FLOORHEATINGPROTOCOL",
            12: "TID_ANTIFREEZE",
            13: "TID_PUMP_MAINTENANCE",
            14: "TID_IDLE",
            255: "NO_TASK"
        }
    },
    status_3$PendingTask_4: {
        key: "771f",
        type: "uint8",
        options: {
            0: "TID_MONITOR_LOCKOUT",
            1: "TID_PUMP_VENTING",
            2: "TID_SERVICE",
            3: "TID_DEFROST",
            4: "TID_DHW",
            5: "TID_ROOMHEATING_COMFORT",
            6: "TID_ROOMHEATING_ECO",
            7: "TID_ROOMCOOLING",
            8: "TID_DHW_HEATEXCHANGER",
            9: "TID_FLOORHEATINGPROTOCOL",
            12: "TID_ANTIFREEZE",
            13: "TID_PUMP_MAINTENANCE",
            14: "TID_IDLE",
            255: "NO_TASK"
        }
    },
    status_3$PendingTask_5: {
        key: "7718",
        type: "uint8",
        options: {
            0: "TID_MONITOR_LOCKOUT",
            1: "TID_PUMP_VENTING",
            2: "TID_SERVICE",
            3: "TID_DEFROST",
            4: "TID_DHW",
            5: "TID_ROOMHEATING_COMFORT",
            6: "TID_ROOMHEATING_ECO",
            7: "TID_ROOMCOOLING",
            8: "TID_DHW_HEATEXCHANGER",
            9: "TID_FLOORHEATINGPROTOCOL",
            12: "TID_ANTIFREEZE",
            13: "TID_PUMP_MAINTENANCE",
            14: "TID_IDLE",
            255: "NO_TASK"
        }
    },
    status_3$SystemIo: {
        key: "77d2",
        type: "uint16",
        bits: ["dhwPumpOn", "chPumpOn", "pressureDetected", "systemFlowDetected", "dhwFlowDetected", "compressorRunning", "switched_on", "boiler_opentherm_connected", "boiled_requested", "thermostat_ot1_opentherm_connected", "thermostat_ot1_shortcircuit", "thermostat_ot2_opentherm_connected", "thermostat_ot2_shortcircuit", "commissioning", "gateway_connected"]
    },
    status_3$RequestedHeatpumpMode: {
        key: "777d",
        type: "uint8",
        options: {
            0: "HP_OM_DHW",
            1: "HP_OM_HEATING",
            2: "HP_OM_COOLING",
            253: "HP_OM_PUMPDOWN",
            254: "HP_OM_OFF",
            255: "HP_OM_UNDEFINED"
        }
    },
    status_3$Flags: {
        key: "77c3",
        type: "uint8",
        bits: ["bLowLoadEnable", "bControlSupplyTemperature", "bProgressiveTempRequest", "bSilentModeActive", "bHeatpumpForceMaxPower", "bHeatpumpRegulateMaxPower", "bHeatWasAtMinimumFreq", "bCompressorWasOn"]
    },
    status_3$HeatpumpHysteresisControlState: {
        key: "7769",
        type: "uint8"
    },
    status_3$HeatpumpDegreeMinutesControlState: {
        key: "7711",
        type: "uint8"
    },
    status_3$DegreeMinutesCompressorState: {
        key: "773a",
        type: "uint8"
    },
    status_3$RequestedTemperature: {
        key: "7767",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_3$FilteredReturnTemperature30min: {
        key: "771b",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_3$DegreeMinutesIntegrator: {
        key: "7712",
        type: "int32"
    },
    status_3$ProtectState: {
        key: "772c",
        type: "uint8"
    },
    status_3$RequestedBuhLevel: {
        key: "7766",
        type: "uint8",
        options: {
            0: "BU_OFF",
            1: "BU_STAGE1",
            2: "BU_STAGE2",
            3: "BU_STAGE3"
        }
    },
    status_3$BuhAllowedFlags: {
        key: "7716",
        type: "uint8",
        bits: ["L1_allowed", "L2_allowed", "L3_allowed"]
    },
    status_3$BuhActiveFlags: {
        key: "77ce",
        type: "uint8",
        bits: ["L1_active", "L2_active", "L3_active"]
    },
    status_3$ClockProgramActiveFlags: {
        key: "7747",
        type: "uint8",
        bits: ["CH_Active", "HP_Blocked_active", "Silent_Active"]
    },
    status_4$tSystemSupply: {
        key: "621d",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tHpSupply: {
        key: "62e7",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tHpReturn: {
        key: "6280",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tBoilerSupply: {
        key: "625b",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tBoilerReturn: {
        key: "623c",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tDhwHot: {
        key: "6269",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tDhwCold: {
        key: "6256",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tDhwPreheat: {
        key: "628d",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tOutdoor: {
        key: "62d1",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tTempAux1: {
        key: "620f",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tTempAux2: {
        key: "6206",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$tTempSet: {
        key: "62ed",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_4$fSystem: {
        key: "629c",
        type: "int16",
        unit: "unit.liters_per_minute",
        factor: "0.01"
    },
    status_4$fDhw: {
        key: "6290",
        type: "int16",
        unit: "unit.liters_per_minute",
        factor: "0.01"
    },
    status_4$sPumpCh: {
        key: "62cb",
        type: "int16",
        unit: "unit.percent",
        factor: "0.01"
    },
    status_4$sPumpDhw: {
        key: "622b",
        type: "int16",
        unit: "unit.percent",
        factor: "0.01"
    },
    status_5$operationMode: {
        key: "657e",
        type: "uint8",
        options: {
            0: "HP_OM_DHW",
            1: "HP_OM_HEATING",
            2: "HP_OM_COOLING",
            253: "HP_OM_PUMPDOWN",
            254: "HP_OM_OFF",
            255: "HP_OM_UNDEFINED"
        }
    },
    status_5$workingMode: {
        key: "6578",
        type: "uint8",
        options: {
            0: "HP_WM_COOLING",
            1: "HP_WM_HEATING",
            2: "HP_WM_DEFROSTING",
            3: "HP_WM_PUMPDOWN",
            255: "HP_WM_UNDEFINED"
        }
    },
    status_5$faultCode: {
        key: "651d",
        type: "uint16",
        options: {
            0: "HP_GEN_FAULT_NONE",
            1: "HP_GEN_FAULT_DEFROST_FAILED",
            2: "HP_GEN_FAULT_LOW_PRESSURE",
            3: "HP_GEN_FAULT_HIGH_PRESSURE",
            4: "HP_GEN_FAULT_COMPRESSOR_OUTSIDE_OP_RANGE",
            5: "HP_GEN_FAULT_EXHAUST_TEMP_TOO_HIGH",
            6: "HP_GEN_FAULT_CONDENSOR_TEMP_TOO_HIGH",
            7: "HP_GEN_FAULT_OUTDOORUNIT_SPECIFIC_AUTO_RESTART",
            8: "HP_GEN_FAULT_OUTDOORUNIT_SPECIFIC_LOCKED",
            9: "HP_GEN_FAULT_OUTDOORUNIT_CONTROL_GUARD",
            10: "HP_GEN_FAULT_WATER_FLOW_TOO_LOW",
            11: "HP_GEN_FAULT_WATER_FLOW_TOO_LOW_DEFROST",
            12: "HP_GEN_FAULT_CONDENSOR_GAS_TOO_LOW",
            13: "HP_GEN_FAULT_NO_TOUTDOOR_SENSOR",
            14: "HP_GEN_FAULT_PUMPDOWN_FAILED",
            15: "HP_GEN_FAULT_DSH_TOO_LOW",
            16: "HP_GEN_FAULT_SSH_TOO_LOW",
            17: "HP_GEN_FAULT_SSH_TOO_HIGH",
            18: "HP_GEN_FAULT_COOLING_MODE_TEMPS",
            19: "HP_GEN_FAULT_CONDENSOR_LIQUID_SENSOR",
            20: "HP_GEN_FAULT_XTP_DEVICE_WATER_INLET",
            21: "HP_GEN_FAULT_XTP_DEVICE_WATER_OUTLET",
            22: "HP_GEN_FAULT_XTP_DEVICE_REFRIGERANT_LIQUID",
            23: "HP_GEN_FAULT_XTP_DEVICE_REFRIGERANT_GAS",
            128: "AC_BUS_VOLTAGE_HIGH",
            129: "AC_BUS_VOLTAGE_LOW",
            130: "DC_BUS_OVERVOLTAGE",
            131: "COMPRESSOR_OVERCURRENT_HARDWARE",
            132: "COMPRESSOR_OVERCURRENT_FIRMWARE",
            133: "AC_INPUT_OVERCURRENT_HARDWARE",
            134: "AC_INPUT_OVERCURRENT_FIRMWARE",
            135: "COMPRESSOR_CURRENT_OVERLOAD",
            136: "PHASE_LOSS_LOSS_OF_SYNCHRONISM",
            137: "IPM_TEMP_PROTECTION",
            138: "OUTDOOR_DC_FAN_FAULT",
            139: "SUCTION_TEMP_SENSOR_ERROR",
            140: "ODU_DISCHARGE_TEMP_SENSOR_ERROR",
            141: "ODU_COIL_TEMP_SENSOR_ERROR",
            142: "AMBIENT_TEMP_SENSOR_ERROR",
            143: "DISCHARGE_TEMP_HIGH_ERROR",
            144: "CONDENSING_TEMP_HIGH_ERROR",
            145: "ODU_IDU_COMMUNICATION_ERROR",
            146: "DC_BUS_UNDERVOLTAGE",
            255: "NO_ERROR",
            65535: "UNCONNECTED"
        }
    },
    status_5$flags: {
        key: "656b",
        type: "uint16",
        bits: ["powerOnReq", "powerOnStatus"]
    },
    status_5$digitalIn: {
        key: "65b9",
        type: "uint16",
        bits: ["highPressureSwitch", "lowPressureSwitch", "waterFlowSwitch", "emergencySwitch", "modeSwitch"]
    },
    status_5$digitalOut: {
        key: "65d0",
        type: "uint16",
        bits: ["compressor", "waterpump", "fourWayValve", "fanMotor", "antifreezeHeatingStrip", "crankAntifreezeHeatingStrip", "sprayValve", "auxiliaryElectricHeater", "dhwPump", "threewayValve"]
    },
    status_5$inletWaterTemperature: {
        key: "655c",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_5$outletWaterTemperature: {
        key: "65d2",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_5$exhaustTemperature: {
        key: "65d9",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_5$suctionTemperature: {
        key: "6505",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_5$coilTemperature: {
        key: "65c1",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_5$ambientTemperature: {
        key: "6573",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_5$actualFrequency: {
        key: "65a7",
        type: "int16",
        unit: "unit.hertz",
        factor: "0.01"
    },
    status_5$frequencySetpoint: {
        key: "658a",
        type: "int16",
        unit: "unit.hertz",
        factor: "0.01"
    },
    status_5$suctionPressure: {
        key: "6579",
        type: "int16",
        unit: "unit.bars",
        factor: "0.01"
    },
    status_5$exhaustPressure: {
        key: "65b0",
        type: "int16",
        unit: "unit.bars",
        factor: "0.01"
    },
    status_5$phaseCurrent: {
        key: "657a",
        type: "int16",
        unit: "unit.ampere",
        factor: "0.001"
    },
    status_6$EEVSteps: {
        key: "6c66",
        type: "int16",
        unit: "unit.steps"
    },
    status_6$suctionOverheat: {
        key: "6cfb",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_6$exhaustOverheat: {
        key: "6c33",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_6$fanspeedSetpoint: {
        key: "6c61",
        type: "int16",
        unit: "unit.rounds_per_minute"
    },
    status_6$actualFan1Speed: {
        key: "6c8a",
        type: "int16",
        unit: "unit.rounds_per_minute"
    },
    status_6$actualFan2Speed: {
        key: "6cf1",
        type: "int16",
        unit: "unit.rounds_per_minute"
    },
    status_6$ACInputVoltage: {
        key: "6c8f",
        type: "int16",
        unit: "unit.voltage",
        factor: "0.1"
    },
    status_6$ACInputCurrent: {
        key: "6c00",
        type: "int16",
        unit: "unit.ampere",
        factor: "0.001"
    },
    status_6$busVoltage: {
        key: "6cfc",
        type: "int16",
        unit: "unit.voltage",
        factor: "0.1"
    },
    status_6$IPM_PIMactualTemp: {
        key: "6cd1",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_6$temperatureCondensor_refrigrerant_gas: {
        key: "6c26",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_6$temperatureCondensor_refrigrerant_liquid: {
        key: "6ceb",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_6$temperatureSubcooling: {
        key: "6c53",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_6$digitalOutIDU: {
        key: "6ce8",
        type: "uint8",
        bits: ["dig_out1", "dig_out2"]
    },
    status_6$AuxOutIDU: {
        key: "6c8b",
        type: "uint8",
        bits: ["dig_out1", "dig_out2"]
    },
    status_6$DigInIDU: {
        key: "6c35",
        type: "uint8",
        bits: ["dig_in1", "dig_in2", "dig_in3"]
    },
    status_6$DigInOpenthermIDU: {
        key: "6c27",
        type: "uint8",
        bits: ["dig_in1", "dig_in2"]
    },
    status_6$ZTV_input: {
        key: "6caf",
        type: "uint16"
    },
    status_7$powerOn: {
        key: "6b5f",
        type: "uint8"
    },
    status_7$temperatureSetpoint_DHW: {
        key: "6b95",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_7$temperatureSetpoint_Heating: {
        key: "6be7",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_7$temperatureSetpoint_Cooling: {
        key: "6bf3",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_7$temperatureHysteresis_off: {
        key: "6b75",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_7$temperatureHysteresis_on: {
        key: "6bfa",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_7$fanLimit_min: {
        key: "6b07",
        type: "int16",
        unit: "unit.rounds_per_minute"
    },
    status_7$fanLimit_max: {
        key: "6bcd",
        type: "int16",
        unit: "unit.rounds_per_minute"
    },
    status_7$compressorLimit_min: {
        key: "6b8f",
        type: "int16",
        unit: "unit.hertz",
        factor: "0.01"
    },
    status_7$compressorLimit_max: {
        key: "6b45",
        type: "int16",
        unit: "unit.hertz",
        factor: "0.01"
    },
    status_7$manualCompressorSpeed: {
        key: "6b3b",
        type: "int16",
        unit: "unit.hertz",
        factor: "0.01"
    },
    status_8$powerOn: {
        key: "46f6",
        type: "uint8"
    },
    status_8$temperatureSetpoint_DHW: {
        key: "46c0",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_8$temperatureSetpoint_Heating: {
        key: "4655",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_8$temperatureSetpoint_Cooling: {
        key: "4641",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_8$temperatureHysteresis_off: {
        key: "4638",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_8$temperatureHysteresis_on: {
        key: "4656",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    status_8$fanLimit_min: {
        key: "468f",
        type: "int16",
        unit: "unit.rounds_per_minute"
    },
    status_8$fanLimit_max: {
        key: "4645",
        type: "int16",
        unit: "unit.rounds_per_minute"
    },
    status_8$compressorLimit_min: {
        key: "46ef",
        type: "int16",
        unit: "unit.hertz",
        factor: "0.01"
    },
    status_8$compressorLimit_max: {
        key: "4625",
        type: "int16",
        unit: "unit.hertz",
        factor: "0.01"
    },
    status_8$manualCompressorSpeed: {
        key: "46ce",
        type: "int16",
        unit: "unit.hertz",
        factor: "0.01"
    },
    status_9$errorCode: {
        key: "4133",
        type: "uint16",
        options: {
            0: "HP_GEN_FAULT_NONE",
            1: "HP_GEN_FAULT_DEFROST_FAILED",
            2: "HP_GEN_FAULT_LOW_PRESSURE",
            3: "HP_GEN_FAULT_HIGH_PRESSURE",
            4: "HP_GEN_FAULT_COMPRESSOR_OUTSIDE_OP_RANGE",
            5: "HP_GEN_FAULT_EXHAUST_TEMP_TOO_HIGH",
            6: "HP_GEN_FAULT_CONDENSOR_TEMP_TOO_HIGH",
            7: "HP_GEN_FAULT_OUTDOORUNIT_SPECIFIC_AUTO_RESTART",
            8: "HP_GEN_FAULT_OUTDOORUNIT_SPECIFIC_LOCKED",
            9: "HP_GEN_FAULT_OUTDOORUNIT_CONTROL_GUARD",
            10: "HP_GEN_FAULT_WATER_FLOW_TOO_LOW",
            11: "HP_GEN_FAULT_WATER_FLOW_TOO_LOW_DEFROST",
            12: "HP_GEN_FAULT_CONDENSOR_GAS_TOO_LOW",
            13: "HP_GEN_FAULT_NO_TOUTDOOR_SENSOR",
            14: "HP_GEN_FAULT_PUMPDOWN_FAILED",
            15: "HP_GEN_FAULT_DSH_TOO_LOW",
            16: "HP_GEN_FAULT_SSH_TOO_LOW",
            17: "HP_GEN_FAULT_SSH_TOO_HIGH",
            18: "HP_GEN_FAULT_COOLING_MODE_TEMPS",
            19: "HP_GEN_FAULT_CONDENSOR_LIQUID_SENSOR",
            20: "HP_GEN_FAULT_XTP_DEVICE_WATER_INLET",
            21: "HP_GEN_FAULT_XTP_DEVICE_WATER_OUTLET",
            22: "HP_GEN_FAULT_XTP_DEVICE_REFRIGERANT_LIQUID",
            23: "HP_GEN_FAULT_XTP_DEVICE_REFRIGERANT_GAS",
            128: "AC_BUS_VOLTAGE_HIGH",
            129: "AC_BUS_VOLTAGE_LOW",
            130: "DC_BUS_OVERVOLTAGE",
            131: "COMPRESSOR_OVERCURRENT_HARDWARE",
            132: "COMPRESSOR_OVERCURRENT_FIRMWARE",
            133: "AC_INPUT_OVERCURRENT_HARDWARE",
            134: "AC_INPUT_OVERCURRENT_FIRMWARE",
            135: "COMPRESSOR_CURRENT_OVERLOAD",
            136: "PHASE_LOSS_LOSS_OF_SYNCHRONISM",
            137: "IPM_TEMP_PROTECTION",
            138: "OUTDOOR_DC_FAN_FAULT",
            139: "SUCTION_TEMP_SENSOR_ERROR",
            140: "ODU_DISCHARGE_TEMP_SENSOR_ERROR",
            141: "ODU_COIL_TEMP_SENSOR_ERROR",
            142: "AMBIENT_TEMP_SENSOR_ERROR",
            143: "DISCHARGE_TEMP_HIGH_ERROR",
            144: "CONDENSING_TEMP_HIGH_ERROR",
            145: "ODU_IDU_COMMUNICATION_ERROR",
            146: "DC_BUS_UNDERVOLTAGE",
            255: "NO_ERROR",
            65535: "UNCONNECTED"
        }
    },
    status_9$controlFlags: {
        key: "4167",
        type: "uint16",
        bits: ["reset", "bSilentModeEnabled", "bCrankHeaterServiceMode", "bTempControlRecalcIntegrator", "bProgressiveTempRequest", "bActualWaterTempTooHigh", "bCrankHeatingWarning", "bCrankHeatingCompressorRun", "bInitTemperatureControl", "bHeatingAllowed", "bCoolingAllowed", "bCompressorStatePrev", "bAntiPendelDelay", "bOilReturnCycleBusy", "bCrankHeatingEnabled", "bCrankHeatingNeeded"]
    },
    status_9$lastError_0: {
        key: "41a2",
        type: "uint16"
    },
    status_9$lastError_1: {
        key: "41a5",
        type: "uint16"
    },
    status_9$lastError_2: {
        key: "41ac",
        type: "uint16"
    },
    status_9$lastError_3: {
        key: "41ab",
        type: "uint16"
    },
    status_9$lastError_4: {
        key: "41be",
        type: "uint16"
    },
    status_9$extErrorCode: {
        key: "41a3",
        type: "uint16"
    },
    status_9$extPrevErrorCode: {
        key: "41d7",
        type: "uint16"
    },
    status_9$extError_status_0: {
        key: "41ec",
        type: "uint16"
    },
    status_9$extError_status_1: {
        key: "41eb",
        type: "uint16"
    },
    status_9$extError_status_2: {
        key: "41e2",
        type: "uint16"
    },
    status_9$extError_status_3: {
        key: "41e5",
        type: "uint16"
    },
    status_9$extError_status_4: {
        key: "41f0",
        type: "uint16"
    },
    status_9$extError_status_5: {
        key: "41f7",
        type: "uint16"
    },
    status_S$currentPowerThermal: {
        key: "5077",
        type: "int16",
        factor: .001,
        unit: "unit.kilowatt"
    },
    status_S$energyThermalDhwPrevDay: {
        key: "5098",
        type: "int16",
        unit: "unit.kWh",
        factor: "0.1"
    },
    status_S$energyThermalHeatingPrevDay: {
        key: "50ae",
        type: "int16",
        unit: "unit.kWh",
        factor: "0.1"
    },
    status_S$energyThermalCoolingPrevDay: {
        key: "5008",
        type: "int16",
        unit: "unit.kWh",
        factor: "0.1"
    },
    status_S$currentPowerElectric: {
        key: "50f2",
        type: "int16",
        factor: .001,
        unit: "unit.kilowatt"
    },
    status_S$energyElectricDhwPrevDay: {
        key: "50ff",
        type: "int16",
        unit: "unit.kWh",
        factor: "0.1"
    },
    status_S$energyElectricHeatingPrevDay: {
        key: "5099",
        type: "int16",
        unit: "unit.kWh",
        factor: "0.1"
    },
    status_S$energyElectricCoolingPrevDay: {
        key: "503f",
        type: "int16",
        unit: "unit.kWh",
        factor: "0.1"
    },
    status_S$currentCop: {
        key: "5041",
        type: "uint8",
        factor: "0.1"
    },
    status_S$copDhwPrevDay: {
        key: "5031",
        type: "uint8",
        factor: "0.1"
    },
    status_S$copHeatingPrevDay: {
        key: "50f7",
        type: "uint8",
        factor: "0.1"
    },
    status_S$copCoolingPrevDay: {
        key: "5051",
        type: "uint8",
        factor: "0.1"
    },
    status_S$currentDhwPowerThermal: {
        key: "5092",
        type: "int16",
        factor: .001,
        unit: "unit.kilowatt"
    },
    status_S$currentHpPowerThermal: {
        key: "503e",
        type: "int16",
        factor: .001,
        unit: "unit.kilowatt"
    },
    status_S$currentBoilerPowerThermal: {
        key: "5088",
        type: "int16",
        factor: .001,
        unit: "unit.kilowatt"
    },
    status_S$energyThermalBoilerPrevDay: {
        key: "506a",
        type: "int16",
        unit: "unit.kWh",
        factor: "0.1"
    },
    statistics_0$poweron_hours: {
        key: "71a7",
        type: "uint16",
        unit: "unit.hours"
    },
    statistics_0$poweron_number: {
        key: "7160",
        type: "uint16"
    },
    statistics_0$ch_hours: {
        key: "71b7",
        type: "uint16",
        unit: "unit.hours"
    },
    statistics_0$dhw_hours: {
        key: "71da",
        type: "uint16",
        unit: "unit.hours"
    },
    statistics_0$ignition_successful: {
        key: "71fa",
        type: "uint16"
    },
    statistics_0$ignition_not_successful: {
        key: "712c",
        type: "uint16"
    },
    statistics_0$flame_loss: {
        key: "7195",
        type: "uint16"
    },
    statistics_0$reset_number: {
        key: "7162",
        type: "uint16"
    },
    statistics_0$gas_meter_ch: {
        key: "7191",
        type: "uint32",
        unit: "unit.cubic_meter",
        factor: "0.0001"
    },
    statistics_0$gas_meter_dhw: {
        key: "71aa",
        type: "uint32",
        unit: "unit.cubic_meter",
        factor: "0.0001"
    },
    statistics_0$water_meter: {
        key: "7153",
        type: "uint16",
        unit: "unit.cubic_meter",
        factor: "0.0001"
    },
    statistics_0$ignition_successful_dhw: {
        key: "71c0",
        type: "uint16"
    },
    statistics_0$water_meter_MSB: {
        key: "7105",
        type: "uint8"
    },
    statistics_0$ignition_successful_dhw_MSB: {
        key: "7169",
        type: "uint8"
    },
    statistics_0$poweron_hours_MSB: {
        key: "715e",
        type: "uint8",
        unit: "unit.hours"
    },
    statistics_0$ignition_successful_MSB: {
        key: "715c",
        type: "uint8"
    },
    statistics_1$maintenance_days: {
        key: "761c",
        type: "uint16",
        unit: "unit.days"
    },
    statistics_1$maintenance_gas_usage: {
        key: "76db",
        type: "uint16",
        unit: "unit.cubic_meter"
    },
    statistics_1$maintenance_reset_counter: {
        key: "761e",
        type: "uint8"
    },
    statistics_1$clv_protection_cntr: {
        key: "766d",
        type: "uint16"
    },
    statistics_5$startDhwCounter: {
        key: "6a8d",
        type: "uint24"
    },
    statistics_5$startHeatingCounter: {
        key: "6a8e",
        type: "uint24"
    },
    statistics_5$startCoolingCounter: {
        key: "6a28",
        type: "uint24"
    },
    statistics_5$startDefrostCounter: {
        key: "6a53",
        type: "uint24"
    },
    statistics_5$operationDhwHours: {
        key: "6a6c",
        type: "uint24",
        unit: "unit.hours"
    },
    statistics_5$operationHeatingHours: {
        key: "6ac5",
        type: "uint24",
        unit: "unit.hours"
    },
    statistics_5$operationCoolingHours: {
        key: "6a78",
        type: "uint24",
        unit: "unit.hours"
    },
    statistics_5$otStatsBoilerBurnerStarts: {
        key: "6abd",
        type: "uint16"
    },
    statistics_5$otStatsBoilerBurnerCHHours: {
        key: "6a01",
        type: "uint16",
        unit: "unit.hours"
    },
    statistics_5$otStatsBoilerBurnerDHWHours: {
        key: "6a9b",
        type: "uint16",
        unit: "unit.hours"
    },
    statistics_6$startBoilerCounter: {
        key: "63ae",
        type: "uint24"
    },
    statistics_6$operationBoilerHours: {
        key: "631a",
        type: "uint24",
        unit: "unit.hours"
    },
    statistics_6$thermalEnergyBoiler: {
        key: "63df",
        type: "uint24",
        unit: "unit.kWh",
        factor: "1.0"
    },
    statistics_6$thermalEnergyDHW: {
        key: "6339",
        type: "uint24",
        unit: "unit.kWh",
        factor: "1.0"
    },
    statistics_6$thermalEnergyHeating: {
        key: "63f0",
        type: "uint24",
        unit: "unit.kWh",
        factor: "1.0"
    },
    statistics_6$thermalEnergyCooling: {
        key: "63e4",
        type: "uint24",
        unit: "unit.kWh",
        factor: "1.0"
    },
    statistics_6$electricEnergyDHW: {
        key: "6358",
        type: "uint24",
        unit: "unit.kWh",
        factor: "1.0"
    },
    statistics_6$electricEnergyHeating: {
        key: "63b3",
        type: "uint24",
        unit: "unit.kWh",
        factor: "1.0"
    },
    statistics_6$electricEnergyCooling: {
        key: "63a7",
        type: "uint24",
        unit: "unit.kWh",
        factor: "1.0"
    },
    statistics_7$bugfixentry_0: {
        key: "64e2",
        type: "bytes"
    },
    statistics_7$bugfixentry_1: {
        key: "64e5",
        type: "bytes"
    },
    statistics_7$bugfixentry_2: {
        key: "64ec",
        type: "bytes"
    },
    statistics_7$bugfixentry_3: {
        key: "64eb",
        type: "bytes"
    },
    statistics_7$bugfixentry_4: {
        key: "64fe",
        type: "bytes"
    },
    statistics_7$bugfixentry_5: {
        key: "64f9",
        type: "bytes"
    },
    statistics_7$bugfixentry_6: {
        key: "64f0",
        type: "bytes"
    },
    statistics_7$bugfixentry_7: {
        key: "64f7",
        type: "bytes"
    },
    CPUinfo$software_name: {
        key: "47da",
        type: "bytes"
    },
    CPUinfo$date_code: {
        key: "47b0",
        type: "bytes"
    },
    CPUinfo$software_version: {
        key: "47e0",
        type: "bytes"
    },
    CPUinfo$crc: {
        key: "47b1",
        type: "bytes"
    },
    CPUinfo$checksum: {
        key: "473d",
        type: "bytes"
    },
    faultcounters$lockoutHistory_0: {
        key: "4c5d",
        type: "uint8"
    },
    faultcounters$lockoutHistory_1: {
        key: "4c5a",
        type: "uint8"
    },
    faultcounters$lockoutHistory_2: {
        key: "4c53",
        type: "uint8"
    },
    faultcounters$lockoutHistory_3: {
        key: "4c54",
        type: "uint8"
    },
    faultcounters$lockoutHistory_4: {
        key: "4c41",
        type: "uint8"
    },
    faultcounters$lockoutHistory_5: {
        key: "4c46",
        type: "uint8"
    },
    faultcounters$lockoutHistory_6: {
        key: "4c4f",
        type: "uint8"
    },
    faultcounters$lockoutHistory_7: {
        key: "4c48",
        type: "uint8"
    },
    faultcounters$lockoutHistory_8: {
        key: "4c65",
        type: "uint8"
    },
    faultcounters$lockoutHistory_9: {
        key: "4c62",
        type: "uint8"
    },
    faultcounters$lockoutHistory_10: {
        key: "4c11",
        type: "uint8"
    },
    faultcounters$lockoutHistory_11: {
        key: "4c16",
        type: "uint8"
    },
    faultcounters$lockoutHistory_12: {
        key: "4c1f",
        type: "uint8"
    },
    faultcounters$lockoutHistory_13: {
        key: "4c18",
        type: "uint8"
    },
    faultcounters$lockoutHistory_14: {
        key: "4c0d",
        type: "uint8"
    },
    faultcounters$lockoutHistory_15: {
        key: "4c0a",
        type: "uint8"
    },
    faultcounters$lockoutHistory_16: {
        key: "4c03",
        type: "uint8"
    },
    faultcounters$lockoutHistory_17: {
        key: "4c04",
        type: "uint8"
    },
    faultcounters$lockoutHistory_18: {
        key: "4c29",
        type: "uint8"
    },
    faultcounters$lockoutHistory_19: {
        key: "4c2e",
        type: "uint8"
    },
    faultcounters$lockoutHistory_20: {
        key: "4c2f",
        type: "uint8"
    },
    faultcounters$lockoutHistory_21: {
        key: "4c2a",
        type: "uint8"
    },
    faultcounters$lockoutHistory_22: {
        key: "4c20",
        type: "uint8"
    },
    faultcounters$lockoutHistory_23: {
        key: "4c27",
        type: "uint8"
    },
    faultcounters$lockoutHistory_24: {
        key: "4c32",
        type: "uint8"
    },
    faultcounters$lockoutHistory_25: {
        key: "4c35",
        type: "uint8"
    },
    faultcounters$lockoutHistory_26: {
        key: "4c3c",
        type: "uint8"
    },
    faultcounters$lockoutHistory_27: {
        key: "4c3b",
        type: "uint8"
    },
    faultcounters$lockoutHistory_28: {
        key: "4c17",
        type: "uint8"
    },
    faultcounters$lockoutHistory_29: {
        key: "4c12",
        type: "uint8"
    },
    faultcounters$lockoutHistory_30: {
        key: "4c3d",
        type: "uint8"
    },
    faultcounters$lockoutHistory_31: {
        key: "4c3e",
        type: "uint8"
    },
    heatpump_generic$compressorLimitingFlags: {
        key: "8d6f",
        type: "uint8",
        bits: ["compressorLimitMaxOutdoorUnitSpec", "compressorLimitMaxApplication", "compressorLimitMaxPressureRatio", "compressorLimitMaxExhaustTemp", "compressorLimitMaxCondensorTemp", "compressorLimitMinOutdoorUnitSpec", "compressorLimitMinApplication", "compressorLimitMinSuperheat"]
    },
    heatpump_generic$pressureRatio: {
        key: "8d24",
        type: "uint8",
        factor: "0.1"
    },
    heatpump_generic$limiterPressureRatioFreq: {
        key: "8db3",
        type: "uint8"
    },
    heatpump_generic$limiterExhaustTempFreq: {
        key: "8d35",
        type: "uint8"
    },
    heatpump_generic$limiterCondensorTempFreq: {
        key: "8d3c",
        type: "uint8"
    },
    heatpump_generic$limiterEvaporatorTempFreq: {
        key: "8dbe",
        type: "uint8"
    },
    heatpump_generic$heatingState: {
        key: "8d6d",
        type: "uint8"
    },
    heatpump_generic$coolingState: {
        key: "8dd0",
        type: "uint8"
    },
    heatpump_generic$defrostState: {
        key: "8dea",
        type: "uint8"
    },
    heatpump_generic$defrostTimer3: {
        key: "8d05",
        type: "uint8"
    },
    heatpump_generic$defrostTimerM2: {
        key: "8df1",
        type: "uint8"
    },
    heatpump_generic$crank_heater_estimated_temp: {
        key: "8d94",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_generic$defrostFlags: {
        key: "8de8",
        type: "uint8",
        bits: ["AutoStartRequest", "StartDefrost", "DefrostFailed", "EvaporatorFrozen"]
    },
    heatpump_generic$faultCodeCurrent: {
        key: "8dec",
        type: "uint8"
    },
    heatpump_generic$faultCodeCurrentOutdoorUnit: {
        key: "8d10",
        type: "uint8"
    },
    heatpump_generic$faultCodeCurrentIndex: {
        key: "8d3a",
        type: "uint8"
    },
    heatpump_generic$deviceState_u8: {
        key: "8d6b",
        type: "uint8"
    },
    heatpump_generic$control_flags_u16: {
        key: "8dc9",
        type: "uint16",
        bits: ["reset", "bSilentModeEnabled", "bCrankHeaterServiceMode", "bTempControlRecalcIntegrator", "bProgressiveTempRequest", "bActualWaterTempTooHigh", "bCrankHeatingWarning", "bCrankHeatingCompressorRun", "bInitTemperatureControl", "bHeatingAllowed", "bCoolingAllowed", "bCompressorStatePrev", "bAntiPendelDelay", "bOilReturnCycleBusy", "bCrankHeatingEnabled", "bCrankHeatingNeeded"]
    },
    heatpump_generic$pid_temp_control_heating_output_s16: {
        key: "8d69",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_generic$actual_comp_freq_min_u8: {
        key: "8d4c",
        type: "uint8",
        unit: "unit.hertz"
    },
    heatpump_generic$actual_comp_freq_max_u8: {
        key: "8d46",
        type: "uint8",
        unit: "unit.hertz"
    },
    heatpump_generic$limiterSuperheatTempFreq_u8: {
        key: "8d0b",
        type: "uint8"
    },
    heatpump_generic$compressorLimitingFlags_msb: {
        key: "8d49",
        type: "uint8",
        bits: ["compressorLimitMinSuperheat", "compressorLimitMaxCurrentDraw", "compressorLimitMinEvaporatorTemp"]
    },
    heatpump_generic$heatpump_stop_cause_u8: {
        key: "8de3",
        type: "uint8"
    },
    heatpump_generic$limiterCurrentDrawFreq: {
        key: "8dd1",
        type: "uint8"
    },
    heatpump_generic$comp_freq_control_kp_u8: {
        key: "8d6e",
        type: "uint8"
    },
    heatpump_generic$comp_freq_control_ki_u8: {
        key: "8daf",
        type: "uint8"
    },
    heatpump_generic$crank_heater_state_u8: {
        key: "8d34",
        type: "uint8"
    },
    heatpump_generic$crank_heater_time_to_start_u8: {
        key: "8d21",
        type: "uint8"
    },
    heatpump_specific_tcl$Flags: {
        key: "f0f0",
        type: "uint16",
        bits: ["bOnline", "bSuperheatHeatingActive", "bSuperheatHeatingRecalcIntegrator", "bUnused", "bSuperheat4WayValveStatePrev", "bSuperheatInitPID", "bSuperheatDSHHighControlled", "bSuperheatMinimumControlled", "bCompressorPFC_on", "bSuperheatMaxEvapTempControlled", "bSuperheatMinPressureRatioControlled", "bSuperheatOscillationSignalRising", "bSuperheatOscillationDetEnabled", "bSuperheatMSSControlled", "bSuperheatDSHLowControlled", "bSuperheatSubcoolingControlled"]
    },
    heatpump_specific_tcl$Tsuperheat_filter_heating: {
        key: "f04b",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_specific_tcl$targetSuperheat_heating: {
        key: "f03f",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_specific_tcl$eevSuperheatOutput_heating: {
        key: "f068",
        type: "uint16"
    },
    heatpump_specific_tcl$Tcondensor_liquid: {
        key: "f031",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_specific_tcl$Tcondensor_gas: {
        key: "f055",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_specific_tcl$eevSuperheatTargetMinCompRatio: {
        key: "f071",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_specific_tcl$eevSuperheatTargetMaxEvapTemp: {
        key: "f066",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_specific_tcl$eevFeedForward: {
        key: "f02e",
        type: "uint16"
    },
    heatpump_specific_tcl$pidSuperheatOutput: {
        key: "f0f1",
        type: "int16"
    },
    heatpump_specific_tcl$eevLongTermAdjustment: {
        key: "f094",
        type: "int16"
    },
    heatpump_specific_tcl$eevPIDKp: {
        key: "f0bf",
        type: "uint8"
    },
    heatpump_specific_tcl$eevPIDKi: {
        key: "f0f2",
        type: "uint8"
    },
    heatpump_specific_tcl$eevPIDKd: {
        key: "f0d3",
        type: "uint8"
    },
    heatpump_specific_tcl$compressorFreqRestriction: {
        key: "f060",
        type: "uint16"
    },
    heatpump_specific_tcl$softwareVersion: {
        key: "f0a6",
        type: "uint16"
    },
    heatpump_specific_tcl$hardwareVersion: {
        key: "f02b",
        type: "uint16"
    },
    heatpump_specific_tcl2$superheatMMSTargetAdjustment: {
        key: "4088",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_specific_tcl2$superheatActualClosedLoopTi_u16: {
        key: "4022",
        type: "uint16"
    },
    heatpump_specific_tcl2$superheatMMSPeriodTime_u16: {
        key: "40c2",
        type: "uint16"
    },
    heatpump_specific_tcl2$SuperheatTargetSubcoolingAdj: {
        key: "407a",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    heatpump_specific_tcl2$heatTransferCoeffWattPerK_s16: {
        key: "4041",
        type: "int16",
        unit: "unit.watts_per_kelvin"
    },
    heatpump_specific_tcl2$SuperheatClosedLoopModeState: {
        key: "400c",
        type: "uint8"
    },
    bivalent_service$flags: {
        key: "f9f2",
        type: "uint16",
        bits: ["HeatpumpNotAllowed", "HPFailedBackupActive", "BoilerNeeded", "HPCopEfficiencyOkay", "InitialDelayDone", "bStartWithBoilerImmediatly", "bBackupReqPrev", "bHeatpumpRequested", "bBoilerRequested", "bBoilerActualState", "bBoilerOpenLoopControl", "bBoilerFlameDetected", "bBoilerFlameDurShort", "bLowLoadDetected", "bDefrostActive", "bBlockHpClockProgram"]
    },
    bivalent_service$sfTreturn30sec: {
        key: "f908",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    bivalent_service$sfTsystemsupply30sec: {
        key: "f909",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    bivalent_service$BivalentState: {
        key: "f969",
        type: "uint8"
    },
    bivalent_service$BivalentDeviceState: {
        key: "f938",
        type: "uint8"
    },
    bivalent_service$DegreeMinutes: {
        key: "f99a",
        type: "int16"
    },
    bivalent_service$maHpThermalPower: {
        key: "f926",
        type: "int16",
        factor: .001,
        unit: "unit.kilowatt"
    },
    bivalent_service$maHpElectricalPower: {
        key: "f91f",
        type: "int16",
        factor: .001,
        unit: "unit.kilowatt"
    },
    bivalent_service$AverageCOP: {
        key: "f934",
        type: "uint8"
    },
    bivalent_service$tmrBoilerDelay_threshold: {
        key: "f9bc",
        type: "uint8"
    },
    bivalent_service$MinCopThreshold_u8: {
        key: "f9c9",
        type: "uint8"
    },
    bivalent_service$BivalentSensorCalState: {
        key: "f9b4",
        type: "uint8"
    },
    bivalent_service$tLongTermCalibration_HpSupply_s16: {
        key: "f9c7",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    bivalent_service$tLongTermCalibration_SysSupply_s16: {
        key: "f950",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    bivalent_service$bForcedCalibration: {
        key: "f98e",
        type: "uint16"
    },
    bivalent_service$relativePowerLevel: {
        key: "f9b1",
        type: "uint16"
    },
    bivalent_service$flags2: {
        key: "f94e",
        type: "uint16",
        bits: ["bBlockBoiler", "bRunWaterPompLowRequest", "bHpWithinOpRangeHeating", "bSoftStartTWaterBelowTReq", "bCrankHeatingBackupReq", "bHeatpumpStoppedSensorCal"]
    },
    boiler_control$boiler_request_on: {
        key: "b2af",
        type: "uint8"
    },
    boiler_control$boiler_temp_exceeded_flags: {
        key: "b241",
        type: "uint8",
        bits: ["temp_mon_boiler_flow_reversed", "temp_mon_boiler_flow_too_high", "temp_mon_boiler_flow_too_low"]
    },
    boiler_control$boiler_request_temperature: {
        key: "b2fe",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_control$boiler_request_powerlevel: {
        key: "b232",
        type: "int16",
        unit: "unit.percent",
        factor: "0.01"
    },
    boiler_control$boiler_power_limit: {
        key: "b2d5",
        type: "int16",
        unit: "unit.percent",
        factor: "0.01"
    },
    boiler_control$boiler_flame_state: {
        key: "b2bc",
        type: "uint8"
    },
    boiler_control$boiler_lowLoadState: {
        key: "b202",
        type: "uint8"
    },
    boiler_control$boiler_lowLoadDutyCycle_u8: {
        key: "b2c6",
        type: "uint8"
    },
    boiler_control$boiler_control_flags: {
        key: "b28c",
        type: "uint8",
        bits: ["bBoilerOvertemperatureShutdown", "bBoilerNoReponse", "bLowLoadFlameOn", "bLowLoadFlameOnPrev", "bTemperatureBlankingActive"]
    },
    boiler_control$pidcontrol_setpoint: {
        key: "b2ee",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_control$pidcontrol_actual: {
        key: "b24d",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_control$pidcontrol_output: {
        key: "b206",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_control$pidcontrol_part_p: {
        key: "b25a",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_control$pidcontrol_part_i: {
        key: "b215",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_1$to_boiler_ot_status: {
        key: "8457",
        type: "uint8"
    },
    boiler_status_1$to_boiler_ot_master_config: {
        key: "841b",
        type: "uint8"
    },
    boiler_status_1$to_boiler_ot_control_setpoint: {
        key: "8434",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_1$to_boiler_ot_modulation_level_set: {
        key: "848e",
        type: "int16",
        unit: "unit.percent",
        factor: "0.01"
    },
    boiler_status_1$to_boiler_ot_room_temperature_set: {
        key: "8415",
        type: "int16",
        unit: "unit.percent",
        factor: "0.01"
    },
    boiler_status_1$to_boiler_ot_room_temperature_act: {
        key: "841f",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_1$to_boiler_ot_dhw_setpoint_set: {
        key: "84ec",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_1$to_boiler_ot_ext_boiler_set: {
        key: "8476",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_1$from_boiler_ot_status: {
        key: "843a",
        type: "uint8"
    },
    boiler_status_1$from_ot_slave_config: {
        key: "8418",
        type: "uint8"
    },
    boiler_status_1$from_boiler_ot_oem_faultcode: {
        key: "8439",
        type: "uint8"
    },
    boiler_status_1$from_boiler_ot_override_function: {
        key: "8445",
        type: "uint8"
    },
    boiler_status_1$from_boiler_ot_remote_parameter: {
        key: "84f7",
        type: "uint16"
    },
    boiler_status_1$from_boiler_ot_override_temperature: {
        key: "8488",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_1$from_boiler_ot_modulation_level: {
        key: "84d1",
        type: "int16",
        unit: "unit.percent",
        factor: "0.01"
    },
    boiler_status_1$from_boiler_ot_ch_pressure: {
        key: "844c",
        type: "int16",
        unit: "unit.bars",
        factor: "0.01"
    },
    boiler_status_2$from_boiler_ot_dhw_flowrate: {
        key: "8e7f",
        type: "int16",
        unit: "unit.liters_per_minute",
        factor: "0.01"
    },
    boiler_status_2$from_boiler_ot_boiler_temp_s16: {
        key: "8e38",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_2$from_boiler_ot_return_water_temp_s16: {
        key: "8e16",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_2$from_boiler_ot_dhw_temperature: {
        key: "8edb",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_2$from_boiler_ot_outside_temperature: {
        key: "8e80",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_2$from_boiler_ot_dhw_bounds_u16: {
        key: "8e34",
        type: "uint16"
    },
    boiler_status_2$from_boiler_ot_ch_bounds_u16: {
        key: "8e39",
        type: "uint16"
    },
    boiler_status_2$from_boiler_ot_dhw_setpoint: {
        key: "8ecb",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_2$from_boiler_ot_ch_water_setpoint: {
        key: "8e8f",
        type: "int16",
        unit: "unit.degrees_celcius",
        factor: "0.01"
    },
    boiler_status_2$from_boiler_ot_spark_not_succesfull: {
        key: "8e9d",
        type: "uint16"
    },
    boiler_status_2$from_boiler_ot_flame_loss: {
        key: "8e18",
        type: "uint16"
    },
    boiler_status_2$from_boiler_ot_burner_starts: {
        key: "8e00",
        type: "uint16"
    },
    boiler_status_2$from_boiler_ot_ch_hours: {
        key: "8ef9",
        type: "uint16",
        unit: "unit.hours"
    },
    boiler_status_2$from_boiler_ot_dhw_hours: {
        key: "8e37",
        type: "uint16",
        unit: "unit.hours"
    },
    boiler_status_2$from_boiler_ot_slave_opentherm_version: {
        key: "8ecc",
        type: "uint16"
    },
    boiler_status_2$from_boiler_ot_slave_version: {
        key: "8e1e",
        type: "uint16"
    }
}

const mockInput = { "stats": { "4133": 0, "5041": 0, "5077": 0, "5088": 0, "5099": 1, "6280": 2613, "6505": 2450, "6578": 1, "6579": 1687, "7160": 5, "7767": 2000, "7921": 1500, "7940": 255, "8439": 0, "79b3": 2415, "50f2": 7, "503e": 0, "50ae": 0, "50f7": 0, "506a": 0, "63f0": 1, "63b3": 0, "63df": 0, "6a8e": 4, "6ac5": 0, "6a53": 0, "71a7": 457, "8e00": 0, "8ef9": 0, "8e37": 0, "8e18": 0, "f9f2": 8, "65b0": 1687, "65d9": 2450, "65c1": 2500, "65a7": 0, "658a": 0, "65d0": 0, "7ed3": 32767, "7e51": 126, "7e2c": 255, "7ee6": 32767, "7e81": 32767, "7e31": 32767, "629c": 0, "62e7": 2636, "62d1": 2450, "77c3": 128, "77d2": 17092, "6cfb": -50, "6c33": -186, "6c8a": 0, "6c61": 0, "6c66": 500, "6c53": 0, "6c26": 2742, "6ceb": 2706, "b28c": 0, "b2bc": 0, "84d1": 32767, "47e0": "V0.21-" } }

/**
* @param {string} key
*/
function findByKey(key) {
    const entry = Object.entries(e).find((element) => element[1].key == key);
    return {
        title: entry[0].replace("$", "_").toLowerCase(),
        data: entry[1]
    }
}

function parseBits(data, value) {
    if (data.bits && Array.isArray(data.bits)) {
        let bitValues = {};
        for (let i = 0; i < data.bits.length; i++) {
            // Shift the value to the right by 'i' places and check if the least significant bit is 1.
            bitValues[data.bits[i]] = (value >> i) & 1;
        }
        return bitValues;
    }
    return null;
}


function parseValue(data, value) {
    switch (data.type) {
        case "int8":
        case "int16":
        case "uint8":
        case "uint16":
        case "uint24":
            if (data.factor != null)
                return value * data.factor
            if (data.options != null)
                return data.options[value]
            if (data.bits != null)
                return parseBits(data, value);
            else return value
        case "bytes": return value
        default: null
    }
}

function parseInput(input) {
    var response = []
    Object.entries(input).forEach(entry => {
        const data = findByKey(entry[0])
        response.push({
            title: data.title,
            data: data.data,
            value: entry[1],
            parsed: parseValue(data.data, entry[1])
        })
    })

    return response
}

msg.payload.parsed = parseInput(msg.payload.stats)

return msg
