import { CANVAS_SIZE, from, getCurrentLayer, to, Unit } from '../../../../src'
import { HOLESTOOTH_DEPTH, HOLESTOOTH_SUBDIVIDER } from '../../constants'

const holestoothTileSize: () => Unit =
	(): Unit => {
		const sizePower: number = from.Layer(getCurrentLayer.default()) - HOLESTOOTH_DEPTH

		return to.Unit(from.Px(CANVAS_SIZE) * Math.pow(HOLESTOOTH_SUBDIVIDER, sizePower))
	}

export default holestoothTileSize
