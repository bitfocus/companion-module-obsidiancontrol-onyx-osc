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
                    default: 255,
                    min: 0,
                    max: 255,
                },
            ],
            callback: async (event : CompanionActionEvent) => {
                instance.log('debug', "playback_level " + event.options.num + " to " + event.options.level);

                if (event.options.num != null) {
                    var addressnum = instance.getPlaybackBaseAddressNum(<number>event.options.num) + 3
                    instance.send('/Mx/fader/' + addressnum, [{ type: 'f', value: event.options.level }])
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
        }
    }

}