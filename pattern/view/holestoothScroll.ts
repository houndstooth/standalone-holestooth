import { from, HALF, Px, to } from '../../../../src'
import { holestoothTileSize } from '../tile'

const holestoothScroll: () => Px[] =
	(): Px[] => {
		const tileSizeValue: number = from.Unit(holestoothTileSize.default())

		return [
			to.Px(-tileSizeValue * HALF),
			to.Px(-tileSizeValue * HALF),
		]
	}

export default holestoothScroll
