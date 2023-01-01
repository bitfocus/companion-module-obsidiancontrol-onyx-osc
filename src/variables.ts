import {CompanionVariableDefinition} from "@companion-module/base";
import OnyxOscInstance from "./index";

export function getVariables(instance: OnyxOscInstance): CompanionVariableDefinition[] {
    var vars : CompanionVariableDefinition[] = []
    vars.push(
        {
            variableId: 'playback_01_name',
            name: 'Main Playback 1 Name'
        },
        {
            variableId: 'playback_02_name',
            name: 'Main Playback 2 Name'
        },
        {
            variableId: 'playback_03_name',
            name: 'Main Playback 3 Name'
        },
        {
            variableId: 'playback_04_name',
            name: 'Main Playback 4 Name'
        },
        {
            variableId: 'playback_05_name',
            name: 'Main Playback 5 Name'
        },
        {
            variableId: 'playback_06_name',
            name: 'Main Playback 6 Name'
        },
        {
            variableId: 'playback_07_name',
            name: 'Main Playback 7 Name'
        },
        {
            variableId: 'playback_08_name',
            name: 'Main Playback 8 Name'
        },
        {
            variableId: 'playback_09_name',
            name: 'Main Playback 9 Name'
        },
        {
            variableId: 'playback_10_name',
            name: 'Main Playback 10 Name'
        },
        {
            variableId: 'playback_11_name',
            name: 'Main Playback 11 Name'
        },
        {
            variableId: 'playback_12_name',
            name: 'Main Playback 12 Name'
        },
        {
            variableId: 'playback_13_name',
            name: 'Main Playback 13 Name'
        },
        {
            variableId: 'playback_14_name',
            name: 'Main Playback 14 Name'
        },
        {
            variableId: 'playback_15_name',
            name: 'Main Playback 15 Name'
        },
        {
            variableId: 'playback_16_name',
            name: 'Main Playback 16 Name'
        },
        {
            variableId: 'playback_17_name',
            name: 'Main Playback 17 Name'
        },
        {
            variableId: 'playback_18_name',
            name: 'Main Playback 18 Name'
        },
        {
            variableId: 'playback_19_name',
            name: 'Main Playback 19 Name'
        },
        {
            variableId: 'playback_20_name',
            name: 'Main Playback 20 Name'
        },
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