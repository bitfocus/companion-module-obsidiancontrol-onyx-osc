import {CompanionVariableDefinition} from "@companion-module/base";
import OnyxOscInstance from "./index";

export function getVariables(instance: OnyxOscInstance): CompanionVariableDefinition[] {
    var vars : CompanionVariableDefinition[] = []

    for (var i = 1; i <= 20; i++) {
        vars.push({
            variableId: 'playback_' + String(i).padStart(2, '0') + '_name',
            name: 'Main Playback ' + i + ' Name'
        }, {
            variableId: 'playback_' + String(i).padStart(2, '0') + '_level',
            name: 'Main Playback ' + i + ' Level'
        })
    }

    vars.push(
        {
            variableId: 'device_space_id',
            name: 'Device Space ID'
        },
        {
            variableId: 'playback_bank_number',
            name: 'Playback Bank Number'
        },
        {
            variableId: 'commandline_status',
            name: 'Command Line Status'
        },
        {
            variableId: 'commandline_command',
            name: 'Command Line Command'
        }
    )

    vars.push(...instance.buttons.getVariableDefinitions())

    instance.log('debug', JSON.stringify(vars))

    return vars
}