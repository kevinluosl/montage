/**
 * @module ui/input-button.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class InputButton
 * @extends Component
 */
exports.InputButton = Component.specialize(/** @lends InputButton# */ {
    constructor: {
        value: function InputButton() {
            this.super();
        }
    },

    handleAction:{
        value:function(){
            var date = new Date(),
                minutes = date.getMinutes(),
                second = date.getSeconds();
            this.templateObjects.text.value = date.getHours() + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (second < 10 ? "0" : "") + second;
        }
    }
});
