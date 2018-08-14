import { from, getCurrentLayer } from '../../../../src'
import { HOLESTOOTH_DEPTH, HOLESTOOTH_SUBDIVIDER } from '../../constants'

const holestoothTileResolution: number = Math.pow(
	HOLESTOOTH_SUBDIVIDER,
	HOLESTOOTH_DEPTH - from.Layer(getCurrentLayer.default()),
)

export default holestoothTileResolution
