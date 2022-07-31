import { useTheme } from '@/Hooks';
import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const CameraContainer = () => {
    const devices = useCameraDevices('wide-angle-camera');
    const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>('back');
    const device = devices[cameraPosition];
    const camera = useRef<Camera>(null);

    const { Layout } = useTheme();

    console.log(devices);

    return (device ? (
        <Camera
            device={device}
            ref={camera}
            isActive={true}
            style={[Layout.fill]}
            // photo={}
        >

        </Camera>
    ): (
        <></>
    ));
}

export default CameraContainer
