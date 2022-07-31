import { Camera } from "react-native-vision-camera";

const cameraPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();

    if (cameraPermission === 'not-determined') {
        await Camera.requestCameraPermission()
    }
}

const microphonePermission = async () => {
    const microphonePermission = await Camera.getMicrophonePermissionStatus()

    if (microphonePermission === 'not-determined') {
        await Camera.requestMicrophonePermission()
    }
}

export {
    cameraPermission,
    microphonePermission,
}