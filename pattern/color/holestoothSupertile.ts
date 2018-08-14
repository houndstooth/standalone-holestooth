import { Supertile, to } from '../../../../src'

// tslint:disable:no-magic-numbers

const holestoothSupertile: Supertile = to.Supertile([
	[ [ 1 ], [ 2, 1, 2, 0 ], [ 0 ], [ 2, 0, 2, 1 ] ],
	[ [ 1, 2, 0, 2 ], [ 2 ], [ 0, 2, 1, 2 ], [ 2 ] ],
	[ [ 0 ], [ 2, 0, 2, 1 ], [ 1 ], [ 2, 1, 2, 0 ] ],
	[ [ 0, 2, 1, 2 ], [ 2 ], [ 1, 2, 0, 2 ], [ 2 ] ],
])

export default holestoothSupertile
