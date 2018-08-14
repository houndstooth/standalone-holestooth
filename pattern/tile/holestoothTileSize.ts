import { CANVAS_SIZE, from, getCurrentLayer, to, Unit } from '../../../../src'
import { HOLESTOOTH_DEPTH } from '../../constants'

const holestoothTileSize: () => Unit =
	(): Unit => {
		return to.Unit((from.Px(CANVAS_SIZE) / 2) * Math.pow(3, from.Layer(getCurrentLayer.default()) - HOLESTOOTH_DEPTH))
	}

export default holestoothTileSize
