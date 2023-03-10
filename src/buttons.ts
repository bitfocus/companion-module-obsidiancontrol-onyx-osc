import {
    combineRgb,
    CompanionPresetDefinitions,
    CompanionVariableDefinition,
    DropdownChoice
} from "@companion-module/base";

export interface ButtonDefinition {
    baseAddress: string
    hasLedFeedback: boolean
    hasText?: boolean
}

export class Buttons {
    private buttons : { [buttonId : string]: ButtonDefinition }
    private addressToVariable: { [address: string]: string } = {}

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
            "Playback Bank 1": {
                baseAddress: "/Mx/button/4421",
                hasLedFeedback: false,
                hasText: true
            },
            "Playback Bank 2": {
                baseAddress: "/Mx/button/4422",
                hasLedFeedback: false,
                hasText: true
            },
            "Playback Bank 3": {
                baseAddress: "/Mx/button/4423",
                hasLedFeedback: false,
                hasText: true
            },
            "Playback Bank 4": {
                baseAddress: "/Mx/button/4424",
                hasLedFeedback: false,
                hasText: true
            },
            "Playback Bank 5": {
                baseAddress: "/Mx/button/4425",
                hasLedFeedback: false,
                hasText: true
            },
            "Bank Scroll Up": {
                baseAddress: "/Mx/scroll/4110/up",
                hasLedFeedback: false
            },
            "Bank Scroll Down": {
                baseAddress: "/Mx/scroll/4110/down",
                hasLedFeedback: false
            },
            "Bank Page Scroll Up": {
                baseAddress: "/Mx/scroll/4111/up",
                hasLedFeedback: false
            },
            "Bank Page Scroll Down": {
                baseAddress: "/Mx/scroll/4111/down",
                hasLedFeedback: false
            },
            "Fader Swap": {
                baseAddress: "/Mx/button/4600",
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
            "PF Group 1": {
                baseAddress: "/Mx/button/5701",
                hasLedFeedback: false,
                hasText: true
            },
            "PF Group 2": {
                baseAddress: "/Mx/button/5702",
                hasLedFeedback: false,
                hasText: true
            },
            "PF Group 3": {
                baseAddress: "/Mx/button/5703",
                hasLedFeedback: false,
                hasText: true
            },
            "PF Group 4": {
                baseAddress: "/Mx/button/5704",
                hasLedFeedback: false,
                hasText: true
            },
            "PF Group 5": {
                baseAddress: "/Mx/button/5705",
                hasLedFeedback: false,
                hasText: true
            },
            "PF Group Scroll Up": {
                baseAddress: "/Mx/scroll/5706/up",
                hasLedFeedback: false
            },
            "PF Group Scroll Down": {
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
            "Base Channel Group 1": {
                baseAddress: "/Mx/button/6101",
                hasLedFeedback: false,
                hasText: true
            },
            "Base Channel Group 2": {
                baseAddress: "/Mx/button/6102",
                hasLedFeedback: false,
                hasText: true
            },
            "Base Channel Group 3": {
                baseAddress: "/Mx/button/6103",
                hasLedFeedback: false,
                hasText: true
            },
            "Base Channel Group 4": {
                baseAddress: "/Mx/button/6104",
                hasLedFeedback: false,
                hasText: true
            },
            "Base Channel Group 5": {
                baseAddress: "/Mx/button/6105",
                hasLedFeedback: false,
                hasText: true
            },
            "Effect Channel Group 1": {
                baseAddress: "/Mx/button/6201",
                hasLedFeedback: false,
                hasText: true
            },
            "Effect Channel Group 2": {
                baseAddress: "/Mx/button/6202",
                hasLedFeedback: false,
                hasText: true
            },
            "Effect Channel Group 3": {
                baseAddress: "/Mx/button/6203",
                hasLedFeedback: false,
                hasText: true
            },
            "Effect Channel Group 4": {
                baseAddress: "/Mx/button/6204",
                hasLedFeedback: false,
                hasText: true
            },
            "Effect Channel Group 5": {
                baseAddress: "/Mx/button/6205",
                hasLedFeedback: false,
                hasText: true
            },
            "Base Channel 1": {
                baseAddress: "/Mx/button/6111",
                hasLedFeedback: true
            },
            "Base Channel 2": {
                baseAddress: "/Mx/button/6121",
                hasLedFeedback: true
            },
            "Base Channel 3": {
                baseAddress: "/Mx/button/6131",
                hasLedFeedback: true
            },
            "Base Channel 4": {
                baseAddress: "/Mx/button/6141",
                hasLedFeedback: true
            },
            "Effect Channel 1": {
                baseAddress: "/Mx/button/6211",
                hasLedFeedback: true
            },
            "Effect Channel 2": {
                baseAddress: "/Mx/button/6221",
                hasLedFeedback: true
            },
            "Effect Channel 3": {
                baseAddress: "/Mx/button/6231",
                hasLedFeedback: true
            },
            "Effect Channel 4": {
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

        for (const buttonId in this.buttons) {
            var btn = this.buttons[buttonId]

            if (btn.hasText) {
                this.addressToVariable[btn.baseAddress + "/text"] = this.sanitizeVariableName(buttonId)
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
            if (this.buttons[buttonId].hasLedFeedback || this.buttons[buttonId].hasText) {
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
        var presets : CompanionPresetDefinitions = {}

        for (const buttonId in this.buttons) {
            var btn = this.buttons[buttonId]
            let text = buttonId
            if (btn.hasText) {
                text = "$(onyx-osc:" + this.sanitizeVariableName(buttonId) + ")"
            }

            presets[buttonId] = {
                name: buttonId,
                category: "Generic Buttons",
                type: "button",
                style: {
                    text: text,
                    size: "14",
                    bgcolor: combineRgb(0,0,0),
                    color: combineRgb(255,255,255)
                },
                steps: [
                    {
                        down: [
                            {
                                actionId: "generic_button",
                                options: {
                                    button: buttonId,
                                    action: "press"
                                }
                            }
                        ],
                        up: [
                            {
                                actionId: "generic_button",
                                options: {
                                    button: buttonId,
                                    action: "release"
                                }
                            }
                        ]
                    }
                ],
                feedbacks: []
            }

            if (btn.hasLedFeedback || btn.hasText) {
                // @ts-ignore
                presets[buttonId].feedbacks.push(
                    {
                        feedbackId: "generic_button_led",
                        options: {
                            button: buttonId
                        },
                        style: {
                            bgcolor: combineRgb(255, 0, 0),
                            color: combineRgb(0, 0, 0),
                        }
                    }
                )
            }
        }

        return presets
    }

    public getVariableDefinitions() : CompanionVariableDefinition[] {
        var vars : CompanionVariableDefinition[] = []

        for (const buttonId in this.buttons) {
            var btn = this.buttons[buttonId]

            if (btn.hasText) {
                vars.push({
                    variableId: this.sanitizeVariableName(buttonId),
                    name: buttonId + " Name"
                })
            }
        }

        return vars
    }

    public getVariableForAddress(address: string): string {
        return this.addressToVariable[address]
    }

    public getById(buttonId: string): ButtonDefinition {
        return this.buttons[buttonId]
    }

    private sanitizeVariableName(name: string): string {
        return name.replaceAll(" ", "_").toLowerCase()
    }
}
