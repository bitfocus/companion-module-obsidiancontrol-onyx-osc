import {CompanionActionDefinitions, CompanionActionEvent} from "@companion-module/base";
import OnyxOscInstance from "./index";

export function getActions(instance: OnyxOscInstance): CompanionActionDefinitions {
    return {
        playback_level: {
            name: 'Main Playback Level',
            options: [
                {
                    id: 'num',
                    type: 'number',
                    label: 'Playback Number',
                    default: 1,
                    min: 1,
                    max: 20,
                },
                {
                    id: 'level',
                    type: 'number',
                    label: 'Level',
                    default: 100,
                    min: 0,
                    max: 100,
                },
            ],
            callback: async (event : CompanionActionEvent) => {
                // @ts-ignore
                let targetLevel = Math.round(event.options.level / 100.0 * 255.0)

                instance.log('debug', "playback_level " + event.options.num + " to " + targetLevel);

                if (event.options.num != null) {
                    var addressnum = instance.getPlaybackBaseAddressNum(<number>event.options.num) + 3
                    instance.send('/Mx/fader/' + addressnum, [{ type: 'f', value: targetLevel }])
                }
            },
        },
        playback_level_relative: {
            name: 'Main Playback Level Increment/Decrement',
            options: [
                {
                    id: 'num',
                    type: 'number',
                    label: 'Playback Number',
                    default: 1,
                    min: 1,
                    max: 20,
                },
                {
                    id: 'direction',
                    type: 'dropdown',
                    label: 'Direction',
                    choices: [
                        { id: 'inc', label: 'Increase'},
                        { id: 'dec', label: 'Decrease'},
                    ],
                    default: 'inc',
                },
                {
                    id: 'amount',
                    type: 'number',
                    label: 'Amount',
                    default: 5,
                    min: 0,
                    max: 100,
                },
            ],
            callback: async (event : CompanionActionEvent) => {
                instance.log('debug', "playback_level_relative " + event.options.num + " direction " + event.options.direction + " amount " + event.options.amount);

                if (event.options.num != null) {
                    let targetLevel : number = (instance.getVariableValue('playback_' + String(event.options.num).padStart(2, '0') + '_level') as number)

                    if (targetLevel == undefined) {
                        targetLevel = 0
                    }

                    if (event.options.direction == 'inc') {
                        targetLevel += (event.options.amount as number)
                        if (targetLevel > 100) targetLevel = 100
                    } else {
                        targetLevel -= (event.options.amount as number)
                        if (targetLevel < 0) targetLevel = 0
                    }

                    targetLevel = Math.round(targetLevel / 100.0 * 255.0)

                    var addressnum = instance.getPlaybackBaseAddressNum(<number>event.options.num) + 3
                    instance.send('/Mx/fader/' + addressnum, [{ type: 'f', value: targetLevel }])
                }
            },
        },
        playback_button: {
            name: 'Main Playback Button',
            options: [
                {
                    id: 'num',
                    type: 'number',
                    label: 'Playback Number',
                    default: 1,
                    min: 1,
                    max: 20,
                },
                {
                    id: 'button',
                    type: 'dropdown',
                    label: 'Button',
                    choices: [
                        { id: '1', label: 'Up Up'},
                        { id: '2', label: 'Up'},
                        { id: '4', label: 'Down'},
                        { id: '5', label: 'Down Down'},
                    ],
                    default: '1',
                },
                {
                    id: 'action',
                    type: 'dropdown',
                    label: 'Action',
                    choices: [
                        { id: 'press', label: 'Press'},
                        { id: 'release', label: 'Release'},
                    ],
                    default: 'press',
                },
            ],
            callback: async (event : CompanionActionEvent) => {
                instance.log('debug', "playback_button " + event.options.num + " button " + event.options.button + " to " + event.options.action);

                if (event.options.num != null) {
                    var addressnum = instance.getPlaybackBaseAddressNum(<number>event.options.num) + parseInt(<string>event.options.button)

                    if (event.options.action == "press") {
                        instance.send('/Mx/button/' + addressnum, [{ type: 'i', value: 1 }])
                    } else {
                        instance.send('/Mx/button/' + addressnum, [{ type: 'i', value: 0 }])
                    }
                }
            },
        },
        'generic_button': {
            name: "Generic Button",
            options: [
                {
                    id: 'button',
                    type: 'dropdown',
                    label: 'Button',
                    choices: instance.buttons.getButtonActionChoices(),
                    default: 'SELECT',
                },
                {
                    id: 'action',
                    type: 'dropdown',
                    label: 'Action',
                    choices: [
                        { id: 'press', label: 'Press'},
                        { id: 'release', label: 'Release'},
                    ],
                    default: 'press',
                },
            ],
            callback: async (event : CompanionActionEvent) => {
                instance.log('debug', "generic_button " + event.options.button + " action: " + event.options.action);

                var baseAddress = instance.buttons.getBaseAddress(<string>event.options.button)

                if (event.options.action == "press") {
                    instance.send(baseAddress, [{ type: 'i', value: 1 }])
                } else {
                    instance.send(baseAddress, [{ type: 'i', value: 0 }])
                }
            }
        },
        playback_page_button: {
            name: 'Playback Page Button',
            options: [
                {
                    id: 'pagenum',
                    type: 'number',
                    label: 'Page Number',
                    default: 1,
                    min: 1,
                    max: 100,
                },
                {
                    id: 'buttonnum',
                    type: 'number',
                    label: 'Button Number',
                    default: 1,
                    min: 1,
                    max: 100,
                },
                {
                    id: 'action',
                    type: 'dropdown',
                    label: 'Action',
                    choices: [
                        { id: 'Go', label: 'Go'},
                        { id: 'Pause', label: 'Pause'},
                        { id: 'Release', label: 'Release'},
                        { id: 'Select', label: 'Select'},
                        { id: 'SnapGo', label: 'SnapGo'},
                        { id: 'Toggle', label: 'Toggle'},
                        { id: 'Back', label: 'Back'},
                    ],
                    default: 'Go',
                },
            ],
            callback: async (event : CompanionActionEvent) => {
                instance.log('debug', "playback_page_button page: " + event.options.pagenum + " button: " + event.options.buttonnum + " action: " + event.options.action);

                // @ts-ignore
                var address = "/Mx/playback/page" + event.options.pagenum + "/" + (event.options.buttonnum - 1) + "/" + event.options.action
                instance.send(address, [{ type: 'i', value: 1 }])
            },
        },
    }

}