/**
 * @module ui/long-action.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class LongAction
 * @extends Component
 */
exports.LongAction = Component.specialize(/** @lends LongAction# */ {
    constructor: {
        value: function LongAction() {
            this.super();
        }
    },

    prepareForActivationEvents: {
        value: function() {
            this.templateObjects.button.addEventListener("longAction", this, false);
        }
    },

    handleLongAction:{
        value:function(){
            var date = new Date(),
                minutes = date.getMinutes(),
                second = date.getSeconds();
            this.templateObjects.text.value = date.getHours() + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (second < 10 ? "0" : "") + second;
        }
    }
});
