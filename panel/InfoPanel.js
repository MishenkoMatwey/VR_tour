import React from 'react';
import {asset, Image, NativeModules, StyleSheet, Text, View, VrButton} from 'react-360';
import {Rows, Table} from "react-native-table-component";

const filePath: string = '../data/information.json';
const surfaceModule = NativeModules.SurfaceModule;

export default class InfoPanel extends React.Component {

    state = {
        html: (
            <VrButton onClick={() => this.changePanel(this.props.id)}>
                <Image source={asset('info.png')} style={{width: 100, height: 100}}/>
            </VrButton>
        )
    }

    changePanel(id) {
        let info = this.readFileAndSearchName(id);
        let table = []
        if (info.mass.length === 0) return
        table.push([id])
        info.mass.forEach(obj => {
            let tmp = []
            if (obj.title) tmp.push(obj.title)
            if (obj.data) tmp.push(obj.data)
            if (obj.author) tmp.push(obj.author)
            if (obj.time) tmp.push(obj.time)
            table.push(tmp)
        })
        let html = (
            <View>
                <VrButton onClick={() => this.resetPanel(this.props.id)}>
                    <Text style={styles.headline}>
                        &times;
                    </Text>
                </VrButton>
                <Table>
                    <Rows data={table} textStyle={styles.tableText} style={styles.rows}/>
                </Table>
            </View>
        )
        this._changeSurfaceDimensions(500, 500, id)
        this.setState({html: html})
    }

    resetPanel(id) {
        this._changeSurfaceDimensions(60, 60, id)
        this.setState({
            html: (
                <VrButton onClick={() => this.changePanel(this.props.id)}>
                    <Image source={asset('info.png')} style={{width: 60, height: 60}}/>
                </VrButton>
            ),
            table: []
        })
    }

    _changeSurfaceDimensions(width, height, id) {
        surfaceModule.resizeSurface(width, height, id);
    }

    render() {
        return (
            <View>
                {this.state.html}
            </View>
        );
    }

    readFileAndSearchName(name: string) {
        let mass = require(filePath);
        return mass.find(obj => obj.name === name)
    }
}

const styles = StyleSheet.create({
    tableText: {
        alignContent: "center",
        margin: 10,
        color: '#dcdfe3'
    },
    headline: {
        color: 'white', // <-- The magic
        textAlign: 'left', // <-- The magic
        fontWeight: 'bold',
        fontSize: 50
    },
    rows: {
        backgroundColor: '#206c92',
        borderWidth: 3,
        borderColor: '#080809'
    }
});

