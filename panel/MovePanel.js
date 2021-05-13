import React from 'react';
import {asset, Environment, Image, NativeModules, View, VrButton} from 'react-360';

const surfaceModule = NativeModules.SurfaceModule;

export default class MovePanel extends React.Component {
    state = {
        img: {
            name: 'move1.png',
            width: 100,
            height: 100
        },
        img2: {
            name: 'move2.png',
            width: 100,
            height: 100
        }
    }

    render() {

        let img = this.props.room ? this.state.img2 : this.state.img;
        return (
            <View>
                <VrButton onClick={
                    () => {
                        Environment.setBackgroundImage(asset(this.props.id + '.jpg'))
                        surfaceModule.load_panel(this.props.id)
                    }}>
                    <Image source={asset(`${img.name}`)} style={{width: img.width, height: img.height}}/>
                </VrButton>
            </View>
        );
    }
}

