import {
    combineRgb,
    CompanionFeedbackBooleanEvent,
    CompanionFeedbackDefinitions
} from "@companion-module/base";
import OnyxOscInstance from "./index";


export function getFeedbacks(instance: OnyxOscInstance) : CompanionFeedbackDefinitions {
    return {
        'playback_button_led' : {
            type: 'boolean',
            name: 'Main Playback Button LED',
            defaultStyle: {
                // The default style change for a boolean feedback
                // The user will be able to customise these values as well as the fields that will be changed
                bgcolor: combineRgb(255, 0, 0),
                color: combineRgb(0, 0, 0),
            },
            // options is how the user can choose the condition the feedback activates for
            options: [{
                id: 'num',
                type: 'number',
                label: 'Playback Number',
                default: 1,
                min: 1,
                max: 20,
            },{
                id: 'button',
                type: 'dropdown',
                label: 'Button',
                choices: [
                    { id: '1', label: 'Up Up'},
                    { id: '2', label: 'Up'},
                    { id: '4', label: 'Down (does not provide feedback)'}, // Note: 3rd button never provides feedback
                    { id: '5', label: 'Down Down'},
                ],
                default: '1',
            }],
            callback: (feedback : CompanionFeedbackBooleanEvent) => {
                // This callback will be called whenever companion wants to check if this feedback is 'active' and should affect the button style

                var addressnum = instance.getPlaybackBaseAddressNum(<number>feedback.options.num) + parseInt(<string>feedback.options.button)
                //instance.log('debug', 'Address: ' + '/Mx/button/' + addressnum + '/led statusMap: ' + instance.statusMap.get('/Mx/button/' + addressnum + '/led'))

                return instance.statusMap.get('/Mx/button/' + addressnum + '/led') == 1;
            }
        },
        'generic_button_led' : {
            type: 'boolean',
            name: 'Generic Button LED',
            defaultStyle: {
                // The default style change for a boolean feedback
                // The user will be able to customise these values as well as the fields that will be changed
                bgcolor: combineRgb(255, 0, 0),
                color: combineRgb(0, 0, 0),
            },
            // options is how the user can choose the condition the feedback activates for
            options: [{
                id: 'button',
                type: 'dropdown',
                label: 'Button',
                choices: instance.buttons.getButtonLedFeedbackChoices(),
                default: 'SELECT',
            }],
            callback: (feedback : CompanionFeedbackBooleanEvent) => {
                // This callback will be called whenever companion wants to check if this feedback is 'active' and should affect the button style
                const button = instance.buttons.getById(<string>feedback.options.button)

                if (button.hasLedFeedback) {
                    var feedbackAddress = instance.buttons.getBaseAddress(<string>feedback.options.button) + "/led"
                    //instance.log('debug', 'Button: ' + <string>feedback.options.button + ' Address: ' + feedbackAddress + ' statusMap: ' + instance.statusMap.get(feedbackAddress))

                    return instance.statusMap.get(feedbackAddress) == 1;
                } else if (button.hasText) {
                    var feedbackAddress = instance.buttons.getBaseAddress(<string>feedback.options.button) + "/text/color"
                    return instance.statusMap.get(feedbackAddress) == "green";
                }
                return false
            }
        }
    }
}