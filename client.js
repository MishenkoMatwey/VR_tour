// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import SurfaceModule from './module/SurfaceModule'

function init(bundle, parent, options = {}) {
    r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        nativeModules: [
            new SurfaceModule()
        ],
        ...options,
    });

    r360.renderToSurface(
        r360.createRoot('VR_tour', { /* initial props */}),
        r360.getDefaultSurface()
    );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('cord1.jpg'));
}

window.React360 = {init};
