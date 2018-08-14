import { NamedEffect } from '../../../src'
import { BLACK, RED, TRANSPARENT, to, from, getCurrentLayer } from '../../../src'
import { holestoothTileSize, holestoothScroll } from '../pattern/index'
import { AssignmentMode, WHITE } from '../../../src/pattern/color'
import { HOLESTOOTH_DEPTH } from '../constants'

const holestoothEffect: NamedEffect = {
	basePattern: {
		colorSettings: {
			colorSet: to.ColorSet([ BLACK, WHITE, TRANSPARENT ]),
			colorAssignmentSettings: {
				assignmentMode: AssignmentMode.Supertile,
				supertile: to.Supertile([
					[ [ 1 ], [ 2, 1, 2, 0 ], [ 0 ], [ 2, 0, 2, 1 ] ],
					[ [ 1, 2, 0, 2 ], [ 2 ], [ 0, 2, 1, 2 ], [ 2 ] ],
					[ [ 0 ], [ 2, 0, 2, 1 ], [ 1 ], [ 2, 1, 2, 0 ] ],
					[ [ 0, 2, 1, 2 ], [ 2 ], [ 1, 2, 0, 2 ], [ 2 ] ],
				]),
			},
		},
		gridSettings: {
			tileResolution: (HOLESTOOTH_DEPTH - from.Layer(getCurrentLayer.default())) * 100,
		},
		layerSettings: {
			endLayer: to.Layer(HOLESTOOTH_DEPTH - 1),
		},
	},
	description: 'holestooth is the coolest fractal',
	layersPattern: {
		tileSettings: {
			tileSize: holestoothTileSize.default,
		},
		viewSettings: {
			scroll: holestoothScroll.default,
		},
	},
	name: 'holesooth',
}

export { holestoothEffect }
