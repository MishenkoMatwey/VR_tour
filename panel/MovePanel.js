import React from 'react';
import {asset, Environment, Image, NativeModules, View, VrButton} from 'react-360';

const surfaceModule = NativeModules.SurfaceModule;

export default class MovePanel extends React.Component {
    state = {
        img: {
            name: 'rec.png',
            width: 60,
            height: 60
        }
    }

    render() {
        let {img} = this.state;

        return (
            <View>
                <VrButton onClick={
                    () => {
                        surfaceModule.load_panel(this.props.id)
                        Environment.setBackgroundImage(asset(this.props.id + '.jpg'))
                    }}>
                    <Image source={asset(`${img.name}`)} style={{width: img.width, height: img.height}}/>
                </VrButton>
            </View>
        );
    }
}

