import { AssignmentMode, BLACK, NamedEffect, to, TRANSPARENT, WHITE } from '../../../src'
import { HOLESTOOTH_DEPTH, HOLESTOOTH_HOLD_OFF_TO_ENJOY_THE_EFFECT } from '../constants'
import { holestoothScroll, holestoothSupertile, holestoothTileResolution, holestoothTileSize } from '../pattern'

import HOLESTOOTH_DESCRIPTION from './holestoothDescription'

const holestoothEffect: NamedEffect = {
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				assignmentMode: AssignmentMode.Supertile,
				supertile: holestoothSupertile.default,
			},
			colorSet: to.ColorSet([ BLACK, WHITE, TRANSPARENT ]),
		},
		gridSettings: {
			tileResolution: holestoothTileResolution.default,
		},
		layerSettings: {
			endLayer: to.Layer(HOLESTOOTH_DEPTH - HOLESTOOTH_HOLD_OFF_TO_ENJOY_THE_EFFECT),
		},
	},
	description: HOLESTOOTH_DESCRIPTION,
	layersPattern: {
		tileSettings: {
			tileSize: holestoothTileSize.default,
		},
		viewSettings: {
			scroll: holestoothScroll.default,
		},
	},
	name: 'holestooth',
}

export { holestoothEffect }
