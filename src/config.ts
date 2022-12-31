import {Regex, SomeCompanionConfigField} from "@companion-module/base";
import {InstanceBaseExt} from "./util.js";

export interface OnyxOscConfig {
    host?: string
    port?: number
    listenport?: number
}

export function GetConfigFields(_self: InstanceBaseExt<OnyxOscConfig>): SomeCompanionConfigField[] {
    return [
        {
            type: 'textinput',
            id: 'host',
            label: 'Target IP',
            width: 8,
            regex: Regex.IP,
        },
        {
            type: 'textinput',
            id: 'port',
            label: 'Target Port',
            width: 4,
            regex: Regex.PORT,
        },
        {
            type: 'textinput',
            id: 'listenport',
            label: 'Listen Port',
            width: 4,
            regex: Regex.PORT,
        }
    ]
}