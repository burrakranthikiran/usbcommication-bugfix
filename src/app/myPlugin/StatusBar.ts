import { registerPlugin } from "@capacitor/core";
export interface StatusBarPlugin{
    getHeight(): Promise<{height : number}>;
    getVibration() : Promise<{height : number}>;
    getMobileSettings() : Promise<{height : number}>;
    getUSBPrinter() : Promise<{height : number}>;
    getPermission() : Promise<{height : number}>;
}
const myStatusBar = registerPlugin<StatusBarPlugin>('MyStatusBar');
export default myStatusBar;