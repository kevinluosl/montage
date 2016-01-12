/**
 * @module ui/tree-controller.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class TreeController
 * @extends Component
 */
exports.TreeController = Component.specialize(/** @lends TreeController# */ {
    constructor: {
        value: function TreeController() {
            this.super();
        }
    },

    tree: {
        value: {
            "label":"ds",
            region: "North America",
            size: 40,
            regions: [
                {
                    region: "Canada",
                    label:"a",
                    size: 20
                },
                {
                    label:"a",
                    region: "United States",
                    size: 20,
                    regions: [
                        {
                            region: "CA",
                            size: 40
                        },
                        {
                            region: "MN",
                            size: 30
                        }
                    ]
                }
            ]
        }
    }
});
