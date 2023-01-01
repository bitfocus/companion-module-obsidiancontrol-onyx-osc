import {
    CompanionVariableValues,
    InstanceBase,
    InstanceStatus,
    runEntrypoint,
    SomeCompanionConfigField
} from "@companion-module/base";
import {GetConfigFields, OnyxOscConfig} from "./config.js";
import osc from "osc"
import {getActions} from "./actions.js";
import {getVariables} from "./variables.js";
import {getFeedbacks} from "./feedbacks.js";
import {Buttons} from "./buttons.js";

class OnyxOscInstance extends InstanceBase<OnyxOscConfig> {
    public config: OnyxOscConfig = {}
    private udpPort: any
    statusMap: Map<string, any> = new Map
    buttons: Buttons = new Buttons()

    public async init(config: OnyxOscConfig): Promise<void> {
        this.updateStatus(InstanceStatus.Disconnected)
        await this.configUpdated(config)
    }

    configUpdated(config: OnyxOscConfig): Promise<void> {
        this.log('debug', "configUpdated")
        this.config = config

        this.updateStatus(InstanceStatus.Disconnected)
        this.udpPort?.close()

        var me = this
        this.udpPort = new osc.UDPPort({
            localAddress: "0.0.0.0",
            localPort: me.config.listenport
        });

        this.udpPort.on("ready", function() {
            me.log('debug', "listening on port " + me.config.listenport)
            me.updateStatus(InstanceStatus.Ok)
        })

        this.udpPort.on("message", function (oscMessage : any) {
            me.log('debug', JSON.stringify(oscMessage));

            // save to status map
            me.statusMap.set(oscMessage.address, oscMessage.args[0])
            me.checkFeedbacks('playback_button_led', 'generic_button_led')        // TODO: Make more fine-grained (i.e. only check LED if led update received)

            switch(oscMessage.address) {
                case '/Mx/button/4204/text':
                    me.setVariableValues({
                        'playback_01_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4214/text':
                    me.setVariableValues({
                        'playback_02_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4224/text':
                    me.setVariableValues({
                        'playback_03_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4234/text':
                    me.setVariableValues({
                        'playback_04_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4244/text':
                    me.setVariableValues({
                        'playback_05_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4254/text':
                    me.setVariableValues({
                        'playback_06_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4264/text':
                    me.setVariableValues({
                        'playback_07_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4274/text':
                    me.setVariableValues({
                        'playback_08_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4284/text':
                    me.setVariableValues({
                        'playback_09_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4294/text':
                    me.setVariableValues({
                        'playback_10_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4604/text':
                    me.setVariableValues({
                        'playback_11_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4614/text':
                    me.setVariableValues({
                        'playback_12_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4624/text':
                    me.setVariableValues({
                        'playback_13_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4634/text':
                    me.setVariableValues({
                        'playback_14_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4644/text':
                    me.setVariableValues({
                        'playback_15_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4654/text':
                    me.setVariableValues({
                        'playback_16_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4664/text':
                    me.setVariableValues({
                        'playback_17_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4674/text':
                    me.setVariableValues({
                        'playback_18_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4684/text':
                    me.setVariableValues({
                        'playback_19_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/button/4694/text':
                    me.setVariableValues({
                        'playback_20_name': oscMessage.args[0]
                    })
                    break;
                case '/Mx/commandLine/0001/text':
                    me.setVariableValues({
                        'commandline_status': oscMessage.args[0]
                    })
                    break;
                case '/Mx/commandLine/0002/text':
                    me.setVariableValues({
                        'commandline_command': oscMessage.args[0]
                    })
                    break;
                case '/Mx/label/4401/text':
                    me.setVariableValues({
                        'playback_bank_number': oscMessage.args[0]
                    })
                    break;
                case '/Mx/configuration/deviceSpace':
                    me.setVariableValues({
                        'device_space_id': oscMessage.args[0]
                    })
                    break;
                default:
                    // Update texts defined in buttons
                    let varname = me.buttons.getVariableForAddress(oscMessage.address);
                    if (varname != undefined) {
                        let vals : CompanionVariableValues = {}
                        vals[varname] = oscMessage.args[0]
                        me.setVariableValues(vals)
                    }
            }
        });

        this.udpPort.on("error", function (err: any) {
            me.log('error', JSON.stringify(err));
        });

        this.udpPort.open()



        // export actions
        const actions = getActions(this)
        this.setActionDefinitions(actions)

        // export variables
        const variables = getVariables(this)
        this.setVariableDefinitions(variables)

        // export feedbacks
        const feedbacks = getFeedbacks(this)
        this.setFeedbackDefinitions(feedbacks)

        // export templates
        const presets = this.buttons.getPresetDefinitions()
        this.setPresetDefinitions(presets)


        return Promise.resolve()
    }

    destroy(): Promise<void> {
        return Promise.resolve();
    }

    public getConfigFields(): SomeCompanionConfigField[] {
        return GetConfigFields(this)
    }

    async send(address : string, args : any) {
        if (this.config.host != null && this.config.port != null) {
            this.log('debug', "send to " + address + " args: " + JSON.stringify(args) + " host: " + this.config.host + " port: " + this.config.port)
            this.oscSend(this.config.host, this.config.port, address, args)
        }
    }

    getPlaybackBaseAddressNum(num: number) : number {
        var addressnum = (4200 + ((num - 1) * 10))
        if (num > 10) {
            addressnum = (4600 + ((num - 11) * 10))
        }

        return addressnum
    }
}

export default OnyxOscInstance

runEntrypoint(OnyxOscInstance, [])