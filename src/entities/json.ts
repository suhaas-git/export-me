import serial from '@shared/assets/images/Serail_Number.jpg';
import paint from '@shared/assets/images/Paint.jpg';
import sheetMetal from '@shared/assets/images/Sheet_Metal.jpg';
import handRails from '@shared/assets/images/Hand_Rails.jpg';
import exteriorLights from '@shared/assets/images/Exterior_Lights.jpg';

export const generalAppearance = {
	serial: {
		label: 'Serial Number / VIN',
		srcId: '1',
		type: 'image',
		value: '123456'
	},
	'ce-mark': {
		label: 'CE Mark',
		type: 'image',
		srcId: '2',
		value: 'Yes'
	},
	paint: {
		label: 'Paint',
		type: 'image',
		srcId: '3',
		value: 'Good'
	},
	'sheet-metal': {
		label: 'Sheet Metal (fiberglass) Condition',
		type: 'image',
		srcId: '4',
		value: 'Good'
	},
	'hand-rails': {
		label: 'Hand Rails',
		type: 'image',
		srcId: '5',
		value: 'Good'
	},
	'exterior-lights': {
		label: 'Exterior Lights',
		type: 'image',
		srcId: '6',
		value: 'Good'
	},
	// 'running-video': {
	// 	label: 'Running Video'
	// },
	'left-side-pic': {
		label: 'Left Side Pic',
		type: 'image',
		srcId: '7',
		value: 'Good'
	},
	'right-pic': {
		label: 'Right Pic',
		type: 'image',
		srcId: '8',
		value: 'Good'
	},
	'front-back': {
		label: 'Front and Back Pic',
		type: 'image',
		srcId: '9',
		value: 'Good'
	},
	'360-degree-view': {
		label: '360 Degree View',
		type: 'image',
		srcId: '10',
		value: 'Good'
	}
};

export const gallery = [
	{
		id: '1',
		src: serial,
		type: 'image',
		name: 'Serial Number / VIN'
	},
	{
		id: '2',
		src: null,
		name: 'CE Mark'
	},
	{
		id: '3',
		src: paint,
		type: 'image',
		name: 'Paint'
	},
	{
		id: '4',
		src: sheetMetal,
		type: 'image',
		name: 'Sheet Metal (fiberglass) Condition'
	},
	{
		id: '5',
		src: handRails,
		type: 'image',
		name: 'Hand Rails'
	},
	{
		id: '6',
		src: exteriorLights,
		type: 'image',
		name: 'Exterior Lights'
	},
	{
		id: '7',
		src: null,
		name: 'Left Side Pic'
	},
	{
		id: '8',
		src: null,
		name: 'Right Pic'
	},
	{
		id: '9',
		src: null,
		name: 'Front and Back Pic'
	},
	{
		id: '10',
		src: null,
		name: '360 Degree View'
	}
];

export const basicInfo = {
	id: 'qwe123',
	item: '2024 FF Industrial FF-15 Mini Excavator - Unused',
	itemDescription: 'Excavator 210D',
	type: 'Excavator',
	meter: '5,589 hrs',
	manufacturer: 'Volvo',
	createdAt: '2024-01-01',
	location: 'Dubai, ARE',
	serial: '123456',
	features: [
		'Auxiliary Hydraulic Plumbing',
		'Backfill Blade',
		'Rubber Tracks',
		'44 in Digging Bucket',
		'Manual Thumb'
	]
};
