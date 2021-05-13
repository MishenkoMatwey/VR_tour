import React from 'react';
import InfoPanel from './panel/InfoPanel'
import MovePanel from './panel/MovePanel'
import {AppRegistry, NativeModules} from 'react-360';

const surfaceModule = NativeModules.SurfaceModule;
const startRootName = 'cord1'
export default class VR_tour extends React.Component {

    render() {
        surfaceModule.load_panel(startRootName)
        return null;
    }
};

AppRegistry.registerComponent('VR_tour', () => VR_tour);
AppRegistry.registerComponent('InfoPanel', () => InfoPanel);
AppRegistry.registerComponent('MovePanel', () => MovePanel);
