import {Module, Surface} from "react-360-web";

const filePath: string = '../data/cord_panels.json';
const rootNameMove: string = 'MovePanel';
const rootNameInfo: string = 'InfoPanel';

export default class SurfaceModule extends Module {
    info_panels = [];
    panel_numbers = [];

    constructor() {
        super('SurfaceModule');
    }

    resizeSurface(width, height, id) {
        let panel = this.info_panels.find(obj => obj.name === id)
        panel.resize(width, height);
    }

    load_panel(name: string) {
        if (this.panel_numbers.length !== 0) {
            this.panel_numbers.forEach(pnl => r360.detachRoot(pnl))
            this.panel_numbers = []
            this.info_panels = []
        }

        let cord_panels = this.readFileAndSearchName(name)
        if (cord_panels) {
            cord_panels.mass.forEach(obj => {
                let tmp = {}
                tmp[obj.name] = new Surface(
                    60,
                    60,
                    Surface.SurfaceShape.Flat
                )

                let num = r360.renderToSurface(
                    r360.createRoot(obj.info ? rootNameInfo : rootNameMove,
                        {id: obj.name}),
                    tmp[obj.name]
                );

                tmp[obj.name].setAngle(
                    obj.yaw, /* yaw angle */
                    obj.pitch, /* pitch angle */
                );

                this.panel_numbers.push(num)

                if (obj.info) {
                    tmp[obj.name].name = obj.name
                    this.info_panels.push(tmp[obj.name])
                }
            })
        }
    }

    readFileAndSearchName(name: string) {
        let mass = require(filePath);
        return mass.find(obj => obj.name === name)
    }

}
