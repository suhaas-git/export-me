import serial from '@shared/assets/images/Serail_Number.jpg';
import paint from '@shared/assets/images/Paint.jpg';
import sheetMetal from '@shared/assets/images/Sheet_Metal.jpg';
import handRails from '@shared/assets/images/Hand_Rails.jpg';
import exteriorLights from '@shared/assets/images/Exterior_Lights.jpg';
import seatArmrest from '@shared/assets/images/seats_armrests.jpg';
import steeringControls from '@shared/assets/images/steering_controls.jpg';
import hydraulicControls from '@shared/assets/images/Hydraulic_Control.jpg';
import auxiliaryHydraulicControl from '@shared/assets/images/Auxillary_Hydraulic_control.jpg';
import drivetrainControls from '@shared/assets/images/Drive_Train_Controls.jpg';
import dashConsole from '@shared/assets/images/Dash_Console.jpg';
import emissionLabel from '@shared/assets/images/Emission_Label.jpg';
import exhaustSystem from '@shared/assets/images/Exhaust_System.jpg';
import engineLeftSide from '@shared/assets/images/Engine_Left_Side.jpg';
import engineRightSide from '@shared/assets/images/Engine_Right_Side.jpg';
import leftDriveMotor from '@shared/assets/images/Left_Drive_Motor.jpg';
import rightDriveMotor from '@shared/assets/images/Right_Drive_Motor.jpg';
import leftFinalDrive from '@shared/assets/images/Left_Final_Drive.jpg';
import rightFinalDrive from '@shared/assets/images/Right_Final_Drive.jpg';
import pumpsHydraulics from '@shared/assets/images/Pumps_hYDRAULICS.jpg';
import valves from '@shared/assets/images/Valve.jpg';
import hydraulicTank from '@shared/assets/images/Hydraulic_Tank.jpg';
import hosesHydraulics from '@shared/assets/images/Hoses_[Hydraulics].jpg';
import auxiliaryHydraulicPlumbing from '@shared/assets/images/Auxillary_Hydrauic_Plumbing.jpg';
import boomLiftCylinder from '@shared/assets/images/Boom LIft Cylinder.jpg';
import stickCylinder from '@shared/assets/images/Stick_Cylinder.jpg';
import bucketCylinder from '@shared/assets/images/Bucket_Cylinder.jpg';
import bladeLiftCylinder from '@shared/assets/images/Blade_Lift_Cylinder.jpg';
import boomCondition from '@shared/assets/images/Boom_Condition.jpg';
import stickCondition from '@shared/assets/images/Stick_Condition.jpg';
import boomBasePinBushings from '@shared/assets/images/Boom_Base_pin_and_BUSHINGS.jpg';
import pinBushingsBoomStick from '@shared/assets/images/PIn_and_bushing_boom_to_stick.jpg';
import pinBushingsStickBucket from '@shared/assets/images/PIn_and_bushing_boom_to_stick.jpg';
import turntableBearing from '@shared/assets/images/Turntable_Bearing.jpg';
import bottomCovers from '@shared/assets/images/Bottom_Covers.jpg';
import leftRollerFrame from '@shared/assets/images/Left_roller_frame.jpg';
import leftTrackPadBeltCondition from '@shared/assets/images/Left_Track_pad_Bed_Condition.jpg';
import leftRubberBeltDriveLugs from '@shared/assets/images/Left_rubber_belt_drive_lugs.jpg';
import leftGrouserHeight from '@shared/assets/images/Left_grouser_height.jpg';
import leftTrackRollers from '@shared/assets/images/Left_track_rollers.jpg';
import leftFrontIdler from '@shared/assets/images/Left_Front_Idler.jpg';
import leftSprocket from '@shared/assets/images/Left_Sprocket.jpg';
import rightRollerFrame from '@shared/assets/images/Right_Roller_Frame.jpg';
import rightTrackBeltCondition from '@shared/assets/images/Right_Track_belt_Condition.jpg';
import rightRubberBeltDriveLugs from '@shared/assets/images/Right_Rubber_Belt_Drive_Lugs.jpg';
import rightGrouserHeight from '@shared/assets/images/Right_Grouser_Heights.jpg';
import rightTrackRollers from '@shared/assets/images/Right Track Rollers.jpg';
import rightFrontIdler from '@shared/assets/images/Right_Front_Idler.jpg';
import rightSprocket from '@shared/assets/images/Right_Sprocket.jpg';
import safetyLock from '@shared/assets/images/safety.jpg';
import type { Gallery, Inventory } from '@shared/types/inventory';
import dayjs from 'dayjs';

export const generalAppearance = {
	label: 'General Appearance',
	serial: {
		label: 'Serial Number / VIN',
		srcId: '1',
		type: 'image',
		value: '423111979'
	},
	'ce-mark': {
		label: 'CE Mark',
		type: 'image',
		srcId: '2',
		value: 'CE Marked'
	},
	'exterior-lights': {
		label: 'Exterior Lights',
		type: 'image',
		srcId: '6',
		value: 'Operational'
	}
};

export const safety = {
	label: 'Safety',
	horn: {
		label: 'Horn',
		type: 'image',
		srcId: null,
		value: 'Operational'
	},
	'seat-belts': {
		label: 'Seat Belts',
		type: 'image',
		srcId: null,
		value: 'Operational'
	},
	'safety-lock-out-stop': {
		label: 'Safety Lock Out/Stop',
		type: 'image',
		srcId: '55',
		value: 'Operational'
	},
	'current-safety-manual': {
		label: 'Current Safety Manual',
		type: 'image',
		srcId: null,
		value: 'Available'
	},
	'current-operator-maintenance-manual': {
		label: 'Current Operator/Maintenance Manual',
		type: 'image',
		srcId: null,
		value: 'Available'
	}
};

export const controlStation = {
	label: 'Control Station',
	'seats-armrests': {
		label: 'Seats/Armrests',
		type: 'image',
		srcId: '7',
		value: null
	},
	'steering-controls': {
		label: 'Steering Controls',
		type: 'image',
		srcId: '8',
		value: null
	},
	'hydraulic-controls': {
		label: 'Hydraulic Controls',
		type: 'image',
		srcId: '10',
		value: null
	},
	'auxiliary-hydraulic-control': {
		label: 'Auxiliary Hydraulic Control',
		type: 'image',
		srcId: '11',
		value: null
	},
	'drivetrain-controls': {
		label: 'Drivetrain Controls',
		type: 'image',
		srcId: '12',
		value: null
	},
	'dash-console': {
		label: 'Dash Console',
		type: 'image',
		srcId: '13',
		value: null
	},
	'engine-oil-pressure': {
		label: 'Engine Oil Pressure',
		type: 'image',
		srcId: null,
		value: 'No oil pressure indicator'
	},
	'limited-function-check': {
		label: 'Limited Function Check',
		type: 'video',
		srcId: '18',
		value: 'The main components are in place and operational as noted'
	}
};

export const engine = {
	label: 'Engine',
	'emission-label': {
		label: 'Emission Label',
		type: 'image',
		srcId: '14',
		value: null
	},
	starter: {
		label: 'Starter',
		type: 'image',
		srcId: null,
		value: 'Operational'
	},
	'exhaust-system': {
		label: 'Exhaust System',
		type: 'image',
		srcId: '15',
		value: null
	},
	'engine-left-side': {
		label: 'Engine - Left Side',
		type: 'image',
		srcId: '16',
		value: null
	},
	'engine-right-side': {
		label: 'Engine - Right Side',
		type: 'image',
		srcId: '17',
		value: null
	}
};

export const drivetrain = {
	label: 'Drivetrain',
	'left-drive-motor': {
		label: 'Left Drive Motor',
		type: 'image',
		srcId: '19',
		value: null
	},
	'right-drive-motor': {
		label: 'Right Drive Motor',
		type: 'image',
		srcId: '20',
		value: null
	},
	'left-final-drive': {
		label: 'Left Final Drive',
		type: 'image',
		srcId: '21',
		value: null
	},
	'right-final-drive': {
		label: 'Right Final Drive',
		type: 'image',
		srcId: '22',
		value: null
	},
	'limited-function-check': {
		label: 'Limited Function Check',
		type: 'video',
		srcId: '23',
		value: 'The main components are in place and operational as noted'
	}
};

export const hydraulics = {
	label: 'Hydraulics',
	'pumps-hydraulics': {
		label: 'Pumps (Hydraulics)',
		type: 'image',
		srcId: '24',
		value: null
	},
	valves: {
		label: 'Valves',
		type: 'image',
		srcId: '25',
		value: null
	},
	'hydraulic-tank': {
		label: 'Hydraulic Tank',
		type: 'image',
		srcId: '26',
		value: null
	},
	'hoses-hydraulics': {
		label: 'Hoses (Hydraulics)',
		type: 'image',
		srcId: '27',
		value: null
	},
	'auxiliary-hydraulic-plumbing': {
		label: 'Auxiliary Hydraulic Plumbing',
		type: 'image',
		srcId: '28',
		value: null
	},
	'swing-motor': {
		label: 'Swing Motor',
		type: 'image',
		srcId: null,
		value: 'Operational'
	},
	'hydraulic-center-swivel': {
		label: 'Hydraulic Center Swivel',
		type: 'image',
		srcId: null,
		value: 'Operational'
	},
	'boom-lift-cylinder': {
		label: 'Boom Lift Cylinder(s)',
		type: 'image',
		srcId: '20',
		value: null
	},
	'stick-cylinder': {
		label: 'Stick Cylinder',
		type: 'image',
		srcId: '31',
		value: null
	},
	'bucket-cylinder': {
		label: 'Bucket Cylinder',
		type: 'image',
		srcId: '32',
		value: null
	},
	'blade-lift-cylinder': {
		label: 'Blade Lift Cylinder',
		type: 'image',
		srcId: '33',
		value: null
	},
	'limited-function-check': {
		label: 'Limited Function Check',
		type: 'video',
		srcId: '34',
		value: 'The main components are in place and operational as noted'
	}
};

export const chasis = {
	label: 'Chasis',
	'boom-condition': {
		label: 'Boom Condition',
		type: 'image',
		srcId: '35',
		value: null
	},
	'stick-condition': {
		label: 'Stick Condition',
		type: 'image',
		srcId: '36',
		value: null
	},
	'boom-base-pin-and-bushings': {
		label: 'Boom Base Pin and Bushings',
		type: 'image',
		srcId: '37',
		value: null
	},
	'pin-and-bushings-boom-to-stick': {
		label: 'Pin and Bushings Boom to Stick',
		type: 'image',
		srcId: '38',
		value: null
	},
	'pin-and-bushings-stick-to-bucket': {
		label: 'Pin and Bushings Stick to Bucket',
		type: 'image',
		srcId: '39',
		value: null
	},
	'turntable-bearing': {
		label: 'Turntable Bearing',
		type: 'image',
		srcId: '40',
		value: null
	},
	'bottom-covers': {
		label: 'Bottom Covers',
		type: 'image',
		srcId: '41',
		value: null
	},
	'limited-function-check': {
		label: 'Limited Function Check',
		type: 'video',
		srcId: '34',
		value: 'The main components are in place and operational as noted'
	}
};

export const undercarriage = {
	label: 'Undercarriage',
	'left-roller-frame': {
		label: 'Left Roller Frame',
		type: 'image',
		srcId: '42',
		value: null
	},
	'left-track-pad-belt-condition': {
		label: 'Left Track Pad/Belt Condition',
		type: 'image',
		srcId: '43',
		value: null
	},
	'left-rubber-belt-drive-lugs': {
		label: 'Left Rubber Belt Drive Lugs',
		type: 'image',
		srcId: '44',
		value: null
	},
	'left-grouser-height': {
		label: 'Left Grouser Height',
		type: 'image',
		srcId: '45',
		value: null
	},
	'left-track-rollers': {
		label: 'Left Track Rollers',
		type: 'image',
		srcId: '46',
		value: null
	},
	'left-front-idler': {
		label: 'Left Front Idler',
		type: 'image',
		srcId: '47',
		value: null
	},
	'left-sprocket': {
		label: 'Left Sprocket',
		type: 'image',
		srcId: '48',
		value: null
	},
	'right-roller-frame': {
		label: 'Right Roller Frame',
		type: 'image',
		srcId: '49',
		value: null
	},
	'right-track-belt-condition': {
		label: 'Right Track Belt Condition',
		type: 'image',
		srcId: '50',
		value: null
	},
	'right-rubber-belt-drive-lugs': {
		label: 'Right Rubber Belt Drive Lugs',
		type: 'image',
		srcId: '51',
		value: null
	},
	'right-grouser-height': {
		label: 'Right Grouser Height',
		type: 'image',
		srcId: '52',
		value: null
	},
	'right-track-rollers': {
		label: 'Right Track Rollers',
		type: 'image',
		srcId: '53',
		value: null
	},
	'right-front-idler': {
		label: 'Right Front Idler',
		type: 'image',
		srcId: '54',
		value: null
	}
};

export const gallery: Gallery[] = [
	{
		id: '1',
		src: serial,
		type: 'image',
		name: 'Serial Number / VIN'
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
		src: seatArmrest,
		type: 'image',
		name: 'Seats/Armrests'
	},
	{
		id: '8',
		src: steeringControls,
		type: 'image',
		name: 'Steering Controls'
	},
	{
		id: '9',
		src: steeringControls,
		type: 'image',
		name: 'Steering Controls'
	},
	{
		id: '10',
		src: hydraulicControls,
		type: 'image',
		name: 'Hydraulic Controls'
	},
	{
		id: '11',
		src: auxiliaryHydraulicControl,
		type: 'image',
		name: 'Auxiliary Hydraulic Control'
	},
	{
		id: '12',
		src: drivetrainControls,
		type: 'image',
		name: 'Drivetrain Controls'
	},
	{
		id: '13',
		src: dashConsole,
		type: 'image',
		name: 'Dash Console'
	},
	{
		id: '14',
		src: emissionLabel,
		type: 'image',
		name: 'Emission Label'
	},
	{
		id: '15',
		src: exhaustSystem,
		type: 'image',
		name: 'Exhaust System'
	},
	{
		id: '16',
		src: engineLeftSide,
		type: 'image',
		name: 'Engine - Left Side'
	},
	{
		id: '17',
		src: engineRightSide,
		type: 'image',
		name: 'Engine - Right Side'
	},
	{
		id: '18',
		src: seatArmrest,
		type: 'video',
		name: 'Limited Function Check'
	},
	{
		id: '19',
		src: leftDriveMotor,
		type: 'image',
		name: 'Left Drive Motor'
	},
	{
		id: '20',
		src: rightDriveMotor,
		type: 'image',
		name: 'Right Drive Motor'
	},
	{
		id: '21',
		src: leftFinalDrive,
		type: 'image',
		name: 'Left Final Drive'
	},
	{
		id: '22',
		src: rightFinalDrive,
		type: 'image',
		name: 'Right Final Drive'
	},
	{
		id: '23',
		src: seatArmrest,
		type: 'video',
		name: 'Limited Function Check'
	},
	{
		id: '24',
		src: pumpsHydraulics,
		type: 'image',
		name: 'Pumps (Hydraulics)'
	},
	{
		id: '25',
		src: valves,
		type: 'image',
		name: 'Valves'
	},
	{
		id: '26',
		src: hydraulicTank,
		type: 'image',
		name: 'Hydraulic Tank'
	},
	{
		id: '27',
		src: hosesHydraulics,
		type: 'image',
		name: 'Hoses (Hydraulics)'
	},
	{
		id: '28',
		src: auxiliaryHydraulicPlumbing,
		type: 'image',
		name: 'Auxiliary Hydraulic Plumbing'
	},
	{
		id: '20',
		src: boomLiftCylinder,
		type: 'image',
		name: 'Boom Lift Cylinder(s)'
	},
	{
		id: '31',
		src: stickCylinder,
		type: 'image',
		name: 'Stick Cylinder'
	},
	{
		id: '32',
		src: bucketCylinder,
		type: 'image',
		name: 'Bucket Cylinder'
	},
	{
		id: '33',
		src: bladeLiftCylinder,
		type: 'image',
		name: 'Blade Lift Cylinder'
	},
	{
		id: '34',
		src: seatArmrest,
		type: 'image',
		name: 'Limited Function Check'
	},
	{
		id: '35',
		src: boomCondition,
		type: 'image',
		name: 'Boom Condition'
	},
	{
		id: '36',
		src: stickCondition,
		type: 'image',
		name: 'Stick Condition'
	},
	{
		id: '37',
		src: boomBasePinBushings,
		type: 'image',
		name: 'Boom Base Pin and Bushings'
	},
	{
		id: '38',
		src: pinBushingsBoomStick,
		type: 'image',
		name: 'Pin and Bushings Boom to Stick'
	},
	{
		id: '39',
		src: pinBushingsStickBucket,
		type: 'image',
		name: 'Pin and Bushings Stick to Bucket'
	},
	{
		id: '40',
		src: turntableBearing,
		type: 'image',
		name: 'Turntable Bearing'
	},
	{
		id: '41',
		src: bottomCovers,
		type: 'image',
		name: 'Bottom Covers'
	},
	{
		id: '42',
		src: leftRollerFrame,
		type: 'image',
		name: 'Left Roller Frame'
	},
	{
		id: '43',
		src: leftTrackPadBeltCondition,
		type: 'image',
		name: 'Left Track Pad/Belt Condition'
	},
	{
		id: '44',
		src: leftRubberBeltDriveLugs,
		type: 'image',
		name: 'Left Rubber Belt Drive Lugs'
	},
	{
		id: '45',
		src: leftGrouserHeight,
		type: 'image',
		name: 'Left Grouser Height'
	},
	{
		id: '46',
		src: leftTrackRollers,
		type: 'image',
		name: 'Left Track Rollers'
	},
	{
		id: '47',
		src: leftFrontIdler,
		type: 'image',
		name: 'Left Front Idler'
	},
	{
		id: '48',
		src: leftSprocket,
		type: 'image',
		name: 'Left Sprocket'
	},
	{
		id: '49',
		src: rightRollerFrame,
		type: 'image',
		name: 'Right Roller Frame'
	},
	{
		id: '50',
		src: rightTrackBeltCondition,
		type: 'image',
		name: 'Right Track Belt Condition'
	},
	{
		id: '51',
		src: rightRubberBeltDriveLugs,
		type: 'image',
		name: 'Right Rubber Belt Drive Lugs'
	},
	{
		id: '52',
		src: rightGrouserHeight,
		type: 'image',
		name: 'Right Grouser Height'
	},
	{
		id: '53',
		src: rightTrackRollers,
		type: 'image',
		name: 'Right Track Rollers'
	},
	{
		id: '54',
		src: rightFrontIdler,
		type: 'image',
		name: 'Right Front Idler'
	},
	{
		id: '55',
		src: rightSprocket,
		type: 'image',
		name: 'Right Sprocket'
	},
	{
		id: '55',
		src: safetyLock,
		type: 'image',
		name: 'Safety Lock Out/Stop'
	}
];

export const basicInfo: Inventory = {
	category: 'heavy-machines',
	sellerId: 'ar',
	id: 'cat-escavator',
	item: '2024 FF Industrial FF-15 Mini Excavator - Unused',
	itemDescription: 'Excavator 210D',
	type: ['escavator'],
	createdAt: dayjs().toISOString(),
	others: {
		Manufacturer: 'Volvo',
		Model: 'EC210D',
		Year: '2024',
		Serial: '123456',
		Location: 'Dubai, ARE',
		Meter: '5,589 hrs'
	},
	features: [
		'Auxiliary Hydraulic Plumbing',
		'Backfill Blade',
		'Rubber Tracks',
		'44 in Digging Bucket',
		'Manual Thumb'
	]
};

export const escavatorData = {
	basicInfo,
	gallery,
	details: [
		generalAppearance,
		chasis,
		controlStation,
		drivetrain,
		engine,
		hydraulics,
		safety,
		undercarriage
	]
};
