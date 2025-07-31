// There is a light-bulb client in pxt-jacdac. Not sure if we could simply switch to that.

namespace fwdBase {
    /**
     * Controls LED lights
     **/
    //% fixedInstances blockGap=8
    export class LightbulbClient extends jacdac.Client {
        private readonly _brightness: jacdac.RegisterClient<[number]>

        constructor(role: string) {
            super(SRV_LIGHTS, role)

            this._brightness = super.addRegister<[number]>(
                LightsReg.Brightness,
                LightsRegPack.Brightness
            )
        }

        /**
         * Returns true if the light brightness is anything other than 0%.
         */
        isOn(): boolean {
            if (this._brightness.values.get(0) === 0) {
                return false
            } else {
                return true
            }
        }

        /**
         * Indicates the brightness of the light bulb. Zero means completely off and 0xffff means completely on.
         * For non-dimmable lights, the value should be clamp to 0xffff for any non-zero value.
         */
        setBrightness(value: number) {
            if (value < 0 || value > 100) {
                // If out of range, do nothing
                return
            }

            super.start()
            const values = this._brightness.values as any[]
            values[0] = value / 100
            this._brightness.values = values as [number]
        }
    }

    //% fixedInstance whenUsed
    export const lightbulb1 = new LightbulbClient("lightbulb1")
}
