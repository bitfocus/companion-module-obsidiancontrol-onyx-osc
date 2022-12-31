import {combineRgb, CompanionPresetDefinitions, DropdownChoice} from "@companion-module/base";

export interface ButtonDefinition {
    baseAddress: string
    hasLedFeedback: boolean
}

export class Buttons {
    private buttons : { [buttonId : string]: ButtonDefinition }

    constructor() {
        this.buttons = {
            "SELECT": {
                baseAddress: "/Mx/button/5502",
                hasLedFeedback: true
            },
            "RELEASE": {
                baseAddress: "/Mx/button/5503",
                hasLedFeedback: true
            },
            "BEAT": {
                baseAddress: "/Mx/button/5504",
                hasLedFeedback: true
            },
            "SNAP": {
                baseAddress: "/Mx/button/5511",
                hasLedFeedback: true
            },
            "||/Back": {
                baseAddress: "/Mx/button/5512",
                hasLedFeedback: true
            },
            "GO": {
                baseAddress: "/Mx/button/5513",
                hasLedFeedback: true
            },
            "View": {
                baseAddress: "/Mx/button/4121",
                hasLedFeedback: true
            },
            "Bank Page Up": {
                baseAddress: "/Mx/button/4412",
                hasLedFeedback: true
            },
            "Bank Page Down": {
                baseAddress: "/Mx/button/4413",
                hasLedFeedback: true
            },
            "PLAYBACK BANK 1": {
                baseAddress: "/Mx/button/4421",
                hasLedFeedback: false
            },
            "PLAYBACK BANK 2": {
                baseAddress: "/Mx/button/4422",
                hasLedFeedback: false
            },
            "PLAYBACK BANK 3": {
                baseAddress: "/Mx/button/4423",
                hasLedFeedback: false
            },
            "PLAYBACK BANK 4": {
                baseAddress: "/Mx/button/4424",
                hasLedFeedback: false
            },
            "PLAYBACK BANK 5": {
                baseAddress: "/Mx/button/4425",
                hasLedFeedback: false
            },
            "VIEW 1": {
                baseAddress: "/Mx/button/1101",
                hasLedFeedback: true
            },
            "VIEW 2": {
                baseAddress: "/Mx/button/1102",
                hasLedFeedback: true
            },
            "VIEW 3": {
                baseAddress: "/Mx/button/1103",
                hasLedFeedback: true
            },
            "VIEW 4": {
                baseAddress: "/Mx/button/1104",
                hasLedFeedback: true
            },
            "VIEW 5": {
                baseAddress: "/Mx/button/1105",
                hasLedFeedback: true
            },
            "VIEW 6": {
                baseAddress: "/Mx/button/1106",
                hasLedFeedback: true
            },
            "VIEW 7": {
                baseAddress: "/Mx/button/1107",
                hasLedFeedback: true
            },
            "VIEW 8": {
                baseAddress: "/Mx/button/1108",
                hasLedFeedback: true
            },
            "VIEW 9": {
                baseAddress: "/Mx/button/3101",
                hasLedFeedback: true
            },
            "VIEW 10": {
                baseAddress: "/Mx/button/3102",
                hasLedFeedback: true
            },
            "VIEW 11": {
                baseAddress: "/Mx/button/3103",
                hasLedFeedback: true
            },
            "VIEW 12": {
                baseAddress: "/Mx/button/3104",
                hasLedFeedback: true
            },
            "VIEW 13": {
                baseAddress: "/Mx/button/3105",
                hasLedFeedback: true
            },
            "VIEW 14": {
                baseAddress: "/Mx/button/3106",
                hasLedFeedback: true
            },
            "VIEW 15": {
                baseAddress: "/Mx/button/3107",
                hasLedFeedback: true
            },
            "VIEW 16": {
                baseAddress: "/Mx/button/3108",
                hasLedFeedback: true
            },
            "MACRO": {
                baseAddress: "/Mx/button/2001",
                hasLedFeedback: true
            },
            "PREVIEW": {
                baseAddress: "/Mx/button/2002",
                hasLedFeedback: true
            },
            "MENU": {
                baseAddress: "/Mx/button/2003",
                hasLedFeedback: true
            },
            "FADE": {
                baseAddress: "/Mx/button/4321",
                hasLedFeedback: true
            },
            "DELAY": {
                baseAddress: "/Mx/button/4322",
                hasLedFeedback: true
            },
            "SNAPSHOT": {
                baseAddress: "/Mx/button/4331",
                hasLedFeedback: true
            },
            "BANK": {
                baseAddress: "/Mx/button/4332",
                hasLedFeedback: true
            },
            "EDIT": {
                baseAddress: "/Mx/button/5101",
                hasLedFeedback: true
            },
            "UNDO": {
                baseAddress: "/Mx/button/5102",
                hasLedFeedback: true
            },
            "CLEAR": {
                baseAddress: "/Mx/button/5103",
                hasLedFeedback: true
            },
            "COPY": {
                baseAddress: "/Mx/button/5104",
                hasLedFeedback: true
            },
            "MOVE": {
                baseAddress: "/Mx/button/5106",
                hasLedFeedback: true
            },
            "DELETE": {
                baseAddress: "/Mx/button/5107",
                hasLedFeedback: true
            },
            "RECORD": {
                baseAddress: "/Mx/button/5401",
                hasLedFeedback: true
            },
            "UPDATE": {
                baseAddress: "/Mx/button/5402",
                hasLedFeedback: true
            },
            "LOAD": {
                baseAddress: "/Mx/button/5411",
                hasLedFeedback: true
            },
            "GROUP": {
                baseAddress: "/Mx/button/5412",
                hasLedFeedback: true
            },
            "CUE": {
                baseAddress: "/Mx/button/5413",
                hasLedFeedback: true
            },
            "0": {
                baseAddress: "/Mx/button/5200",
                hasLedFeedback: false
            },
            "1": {
                baseAddress: "/Mx/button/5201",
                hasLedFeedback: false
            },
            "2": {
                baseAddress: "/Mx/button/5202",
                hasLedFeedback: false
            },
            "3": {
                baseAddress: "/Mx/button/5203",
                hasLedFeedback: false
            },
            "4": {
                baseAddress: "/Mx/button/5204",
                hasLedFeedback: false
            },
            "5": {
                baseAddress: "/Mx/button/5205",
                hasLedFeedback: false
            },
            "6": {
                baseAddress: "/Mx/button/5206",
                hasLedFeedback: false
            },
            "7": {
                baseAddress: "/Mx/button/5207",
                hasLedFeedback: false
            },
            "8": {
                baseAddress: "/Mx/button/5208",
                hasLedFeedback: false
            },
            "9": {
                baseAddress: "/Mx/button/5209",
                hasLedFeedback: false
            },
            "-": {
                baseAddress: "/Mx/button/5210",
                hasLedFeedback: false
            },
            "+": {
                baseAddress: "/Mx/button/5211",
                hasLedFeedback: false
            },
            ".": {
                baseAddress: "/Mx/button/5212",
                hasLedFeedback: false
            },
            "Enter": {
                baseAddress: "/Mx/button/5213",
                hasLedFeedback: false
            },
            "/": {
                baseAddress: "/Mx/button/5214",
                hasLedFeedback: false
            },
            "Backspace": {
                baseAddress: "/Mx/button/5215",
                hasLedFeedback: false
            },
            "@": {
                baseAddress: "/Mx/button/5216",
                hasLedFeedback: false
            },
            "Full": {
                baseAddress: "/Mx/button/5301",
                hasLedFeedback: false
            },
            "Through": {
                baseAddress: "/Mx/button/5302",
                hasLedFeedback: false
            },
            "F1": {
                baseAddress: "/Mx/button/5601",
                hasLedFeedback: true
            },
            "F2": {
                baseAddress: "/Mx/button/56A1",
                hasLedFeedback: true
            },
            "F3": {
                baseAddress: "/Mx/button/5602",
                hasLedFeedback: true
            },
            "F4": {
                baseAddress: "/Mx/button/56A2",
                hasLedFeedback: true
            },
            "F5": {
                baseAddress: "/Mx/button/5603",
                hasLedFeedback: true
            },
            "F6": {
                baseAddress: "/Mx/button/56A3",
                hasLedFeedback: true
            },
            "F7": {
                baseAddress: "/Mx/button/2101",
                hasLedFeedback: true
            },
            "F8": {
                baseAddress: "/Mx/button/21A1",
                hasLedFeedback: true
            },
            "F9": {
                baseAddress: "/Mx/button/2102",
                hasLedFeedback: true
            },
            "F10": {
                baseAddress: "/Mx/button/21A2",
                hasLedFeedback: true
            },
            "F11": {
                baseAddress: "/Mx/button/2103",
                hasLedFeedback: true
            },
            "F12": {
                baseAddress: "/Mx/button/21A3",
                hasLedFeedback: true
            },
            "PF GROUP 1": {
                baseAddress: "/Mx/button/5701",
                hasLedFeedback: false
            },
            "PF GROUP 2": {
                baseAddress: "/Mx/button/5702",
                hasLedFeedback: false
            },
            "PF GROUP 3": {
                baseAddress: "/Mx/button/5703",
                hasLedFeedback: false
            },
            "PF GROUP 4": {
                baseAddress: "/Mx/button/5704",
                hasLedFeedback: false
            },
            "PF GROUP 5": {
                baseAddress: "/Mx/button/5705",
                hasLedFeedback: false
            },
            "PF GROUP Scroll Up": {
                baseAddress: "/Mx/scroll/5706/up",
                hasLedFeedback: false
            },
            "PF GROUP Scroll Down": {
                baseAddress: "/Mx/scroll/5706/down",
                hasLedFeedback: false
            },
            "Last": {
                baseAddress: "/Mx/button/6401",
                hasLedFeedback: true
            },
            "Next": {
                baseAddress: "/Mx/button/6402",
                hasLedFeedback: true
            },
            "Swap Programmer": {
                baseAddress: "/Mx/button/6411",
                hasLedFeedback: true
            },
            "HIGHLIGHT": {
                baseAddress: "/Mx/button/6001",
                hasLedFeedback: true
            },
            "CV": {
                baseAddress: "/Mx/button/6003",
                hasLedFeedback: true
            },
            "Link": {
                baseAddress: "/Mx/button/6108",
                hasLedFeedback: false
            },
            "BASE CHANNEL GROUP 1": {
                baseAddress: "/Mx/button/6101",
                hasLedFeedback: false
            },
            "BASE CHANNEL GROUP 2": {
                baseAddress: "/Mx/button/6102",
                hasLedFeedback: false
            },
            "BASE CHANNEL GROUP 3": {
                baseAddress: "/Mx/button/6103",
                hasLedFeedback: false
            },
            "BASE CHANNEL GROUP 4": {
                baseAddress: "/Mx/button/6104",
                hasLedFeedback: false
            },
            "BASE CHANNEL GROUP 5": {
                baseAddress: "/Mx/button/6105",
                hasLedFeedback: false
            },
            "EFFECT CHANNEL GROUP 1": {
                baseAddress: "/Mx/button/6201",
                hasLedFeedback: false
            },
            "EFFECT CHANNEL GROUP 2": {
                baseAddress: "/Mx/button/6202",
                hasLedFeedback: false
            },
            "EFFECT CHANNEL GROUP 3": {
                baseAddress: "/Mx/button/6203",
                hasLedFeedback: false
            },
            "EFFECT CHANNEL GROUP 4": {
                baseAddress: "/Mx/button/6204",
                hasLedFeedback: false
            },
            "EFFECT CHANNEL GROUP 5": {
                baseAddress: "/Mx/button/6205",
                hasLedFeedback: false
            },
            "BASE CHANNEL 1": {
                baseAddress: "/Mx/button/6111",
                hasLedFeedback: true
            },
            "BASE CHANNEL 2": {
                baseAddress: "/Mx/button/6121",
                hasLedFeedback: true
            },
            "BASE CHANNEL 3": {
                baseAddress: "/Mx/button/6131",
                hasLedFeedback: true
            },
            "BASE CHANNEL 4": {
                baseAddress: "/Mx/button/6141",
                hasLedFeedback: true
            },
            "EFFECT CHANNEL 1": {
                baseAddress: "/Mx/button/6211",
                hasLedFeedback: true
            },
            "EFFECT CHANNEL 2": {
                baseAddress: "/Mx/button/6221",
                hasLedFeedback: true
            },
            "EFFECT CHANNEL 3": {
                baseAddress: "/Mx/button/6231",
                hasLedFeedback: true
            },
            "EFFECT CHANNEL 4": {
                baseAddress: "/Mx/button/6241",
                hasLedFeedback: true
            },
            "TRACKFUNC P/T": {
                baseAddress: "/Mx/button/7001",
                hasLedFeedback: true
            },
            "MODE": {
                baseAddress: "/Mx/button/7004",
                hasLedFeedback: true
            },
            "NAVIGATE UP": {
                baseAddress: "/Mx/button/7301",
                hasLedFeedback: true
            },
            "NAVIGATE LEFT": {
                baseAddress: "/Mx/button/7302",
                hasLedFeedback: true
            },
            "NAVIGATE DOWN": {
                baseAddress: "/Mx/button/7303",
                hasLedFeedback: true
            },
            "NAVIGATE RIGHT": {
                baseAddress: "/Mx/button/7304",
                hasLedFeedback: true
            },
            "Device Space ID Down": {
                baseAddress: "/Mx/configuration/deviceSpace/down",
                hasLedFeedback: false
            },
            "Device Space ID Up": {
                baseAddress: "/Mx/configuration/deviceSpace/up",
                hasLedFeedback: false
            }
        }
    }

    public getButtonActionChoices() : DropdownChoice[] {
        var choices : DropdownChoice[] = []

        for (const buttonId in this.buttons) {
            choices.push({
                id: buttonId,
                label: buttonId
            })
        }

        return choices
    }

    public getButtonLedFeedbackChoices(): DropdownChoice[] {
        var choices : DropdownChoice[] = []

        for (const buttonId in this.buttons) {
            if (this.buttons[buttonId].hasLedFeedback) {
                choices.push({
                    id: buttonId,
                    label: buttonId
                })
            }
        }

        return choices
    }

    public getBaseAddress(button: string) : string {
        return this.buttons[button].baseAddress;
    }

    public getPresetDefinitions() : CompanionPresetDefinitions {
        return {
            'bla': {
                name: "SELECT",
                category: "Generic Buttons",
                type: "button",
                style: {
                    text: "SELECT",
                    size: "auto",
                    bgcolor: combineRgb(0,0,0),
                    color: combineRgb(255,255,255)
                },
                steps: [
                    {
                        down: [
                            {
                                actionId: "generic_button",
                                options: {
                                    button: "SELECT",
                                    action: "press"
                                }
                            }
                        ],
                        up: [
                            {
                                actionId: "generic_button",
                                options: {
                                    button: "SELECT",
                                    action: "release"
                                }
                            }
                        ]
                    }
                ],
                feedbacks: [
                    {
                        feedbackId: "generic_button_led",
                        options: {
                            button: "SELECT"
                        },
                        style: {
                            bgcolor: combineRgb(255, 0, 0),
                            color: combineRgb(0, 0, 0),
                        }
                    }
                ]
            }
        }
    }
}
