// Mock data for EduGuard MDM
// Phase 1: static data only. Later steps can replace imports with API calls.

export const OVERVIEW_STATS = [
	{ label: 'Total Enrolled', value: 47, trend: '+6 this month', trendDir: 'up', colorClass: 'stat--green', icon: 'devices' },
	{ label: 'Online Now', value: 32, trend: '+4 since sync', trendDir: 'up', colorClass: 'stat--teal', icon: 'online' },
	{ label: 'Policy Violations', value: 4, trend: '-2 since last week', trendDir: 'down', colorClass: 'stat--amber', icon: 'warning' },
	{ label: 'Pending Syncs', value: 3, trend: 'Waiting on LAN', trendDir: 'flat', colorClass: 'stat--slate', icon: 'sync' }
];

export const COMPLIANCE_BY_CLASS = [
	{ label: 'S.1', value: 96 },
	{ label: 'S.2', value: 92 },
	{ label: 'S.3', value: 88 },
	{ label: 'S.4', value: 84 },
	{ label: 'S.5', value: 98 },
	{ label: 'S.6', value: 90 }
];

export const RECENT_VIOLATIONS = [
	{
		severity: 'HIGH',
		device: 'Tecno Spark 8C - EDG-014',
		violationType: 'Unauthorized app launch',
		policyViolated: 'Exam Kiosk',
		timestamp: '2026-05-28T08:14:00Z',
		status: 'Open'
	},
	{
		severity: 'MED',
		device: 'Samsung A14 - EDG-022',
		violationType: 'Session started late',
		policyViolated: 'Session Schedule',
		timestamp: '2026-05-28T07:48:00Z',
		status: 'Pending'
	},
	{
		severity: 'LOW',
		device: 'Itel A58 - EDG-031',
		violationType: 'Battery below threshold',
		policyViolated: 'Low Battery Protocol',
		timestamp: '2026-05-27T16:12:00Z',
		status: 'Resolved'
	},
	{
		severity: 'MED',
		device: 'Tecno Camon 19 - EDG-008',
		violationType: 'Policy refresh delayed',
		policyViolated: 'App Whitelist',
		timestamp: '2026-05-27T13:35:00Z',
		status: 'Open'
	}
];

export const RECENT_AUDIT_LOG = [
	{
		eventType: 'Policy Applied',
		description: 'Exam Kiosk policy enforced for S.4 devices',
		hash: 'a3f9c1d9b6e8f4c2d1e0a9f8b7c6d5e4a3b2c1d0',
		timestamp: '2026-05-28T08:10:00Z'
	},
	{
		eventType: 'Sync',
		description: 'Local LAN sync completed with 12 pending devices',
		hash: 'b4c1d2e3f5061728394a5b6c7d8e9f0a1b2c3d4e',
		timestamp: '2026-05-28T08:03:00Z'
	},
	{
		eventType: 'Violation',
		description: 'Unauthorized app detected on Tecno Spark 8C',
		hash: 'c5d2e3f4061728394a5b6c7d8e9f0a1b2c3d4e5f',
		timestamp: '2026-05-28T07:55:00Z'
	},
	{
		eventType: 'Admin Action',
		description: 'Super Admin rotated policy signing keys',
		hash: 'd6e3f40718293a4b5c6d7e8f901a2b3c4d5e6f70',
		timestamp: '2026-05-27T17:20:00Z'
	}
];

export const DASHBOARD_SUMMARY = {
	schoolName: 'Kampala Secondary School',
	district: 'Kampala',
	adminName: 'Super Admin',
	verifiedChainLabel: 'Chain Verified ✓'
};

export const DEVICE_STATUS_OPTIONS = ['All Statuses', 'Online', 'Offline', 'Syncing'];
export const DEVICE_CLASS_OPTIONS = ['All Classes', 'S.1', 'S.2', 'S.3', 'S.4', 'S.5', 'S.6'];

export const DEVICES = [
	{ id: 'EDG-001', model: 'Tecno Spark 8C', classGroup: 'S.1', status: 'Online', compliance: 'Compliant', battery: 94, lastSync: '2026-05-28T07:58:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Kampala' },
	{ id: 'EDG-002', model: 'Itel A58', classGroup: 'S.1', status: 'Online', compliance: 'Compliant', battery: 86, lastSync: '2026-05-28T07:51:00Z', policy: 'Session Schedule', enrolledBy: 'Super Admin', district: 'Wakiso' },
	{ id: 'EDG-003', model: 'Samsung A14', classGroup: 'S.2', status: 'Syncing', compliance: 'Pending', battery: 79, lastSync: '2026-05-28T07:43:00Z', policy: 'App Whitelist', enrolledBy: 'ICT Teacher', district: 'Mukono' },
	{ id: 'EDG-004', model: 'Tecno Camon 19', classGroup: 'S.2', status: 'Online', compliance: 'Compliant', battery: 91, lastSync: '2026-05-28T07:39:00Z', policy: 'Exam Kiosk', enrolledBy: 'Super Admin', district: 'Jinja' },
	{ id: 'EDG-005', model: 'Itel A60', classGroup: 'S.3', status: 'Offline', compliance: 'Violation', battery: 42, lastSync: '2026-05-27T18:14:00Z', policy: 'Low Battery Protocol', enrolledBy: 'Class Teacher', district: 'Mbarara' },
	{ id: 'EDG-006', model: 'Samsung A24', classGroup: 'S.3', status: 'Online', compliance: 'Compliant', battery: 88, lastSync: '2026-05-28T07:28:00Z', policy: 'Session Schedule', enrolledBy: 'ICT Teacher', district: 'Kampala' },
	{ id: 'EDG-007', model: 'Tecno Pop 7', classGroup: 'S.4', status: 'Online', compliance: 'Compliant', battery: 73, lastSync: '2026-05-28T07:21:00Z', policy: 'Exam Kiosk', enrolledBy: 'Super Admin', district: 'Wakiso' },
	{ id: 'EDG-008', model: 'Tecno Camon 19', classGroup: 'S.4', status: 'Syncing', compliance: 'Violation', battery: 64, lastSync: '2026-05-28T07:15:00Z', policy: 'App Whitelist', enrolledBy: 'ICT Teacher', district: 'Mukono' },
	{ id: 'EDG-009', model: 'Itel A70', classGroup: 'S.5', status: 'Online', compliance: 'Compliant', battery: 97, lastSync: '2026-05-28T07:08:00Z', policy: 'Session Schedule', enrolledBy: 'Super Admin', district: 'Jinja' },
	{ id: 'EDG-010', model: 'Samsung A13', classGroup: 'S.5', status: 'Offline', compliance: 'Pending', battery: 58, lastSync: '2026-05-27T17:48:00Z', policy: 'Exam Kiosk', enrolledBy: 'Class Teacher', district: 'Mbarara' },
	{ id: 'EDG-011', model: 'Tecno Spark 10C', classGroup: 'S.6', status: 'Online', compliance: 'Compliant', battery: 84, lastSync: '2026-05-28T06:59:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Kampala' },
	{ id: 'EDG-012', model: 'Itel A56', classGroup: 'S.6', status: 'Syncing', compliance: 'Compliant', battery: 69, lastSync: '2026-05-28T06:41:00Z', policy: 'Session Schedule', enrolledBy: 'ICT Teacher', district: 'Wakiso' },
	{ id: 'EDG-013', model: 'Samsung A05', classGroup: 'S.1', status: 'Online', compliance: 'Compliant', battery: 90, lastSync: '2026-05-28T06:35:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Mukono' },
	{ id: 'EDG-014', model: 'Tecno Spark 8C', classGroup: 'S.2', status: 'Offline', compliance: 'Violation', battery: 33, lastSync: '2026-05-27T17:02:00Z', policy: 'Exam Kiosk', enrolledBy: 'ICT Teacher', district: 'Jinja' },
	{ id: 'EDG-015', model: 'Itel A58', classGroup: 'S.2', status: 'Online', compliance: 'Compliant', battery: 83, lastSync: '2026-05-28T06:18:00Z', policy: 'Session Schedule', enrolledBy: 'Class Teacher', district: 'Mbarara' },
	{ id: 'EDG-016', model: 'Samsung A14', classGroup: 'S.3', status: 'Syncing', compliance: 'Pending', battery: 76, lastSync: '2026-05-28T06:08:00Z', policy: 'Low Battery Protocol', enrolledBy: 'Super Admin', district: 'Kampala' },
	{ id: 'EDG-017', model: 'Tecno Camon 18', classGroup: 'S.3', status: 'Online', compliance: 'Compliant', battery: 92, lastSync: '2026-05-28T05:52:00Z', policy: 'Exam Kiosk', enrolledBy: 'ICT Teacher', district: 'Wakiso' },
	{ id: 'EDG-018', model: 'Itel A70', classGroup: 'S.4', status: 'Online', compliance: 'Compliant', battery: 88, lastSync: '2026-05-28T05:46:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Mukono' },
	{ id: 'EDG-019', model: 'Samsung A24', classGroup: 'S.4', status: 'Offline', compliance: 'Violation', battery: 47, lastSync: '2026-05-27T16:27:00Z', policy: 'Session Schedule', enrolledBy: 'Class Teacher', district: 'Jinja' },
	{ id: 'EDG-020', model: 'Tecno Spark 10C', classGroup: 'S.5', status: 'Online', compliance: 'Compliant', battery: 91, lastSync: '2026-05-28T05:31:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Mbarara' },
	{ id: 'EDG-021', model: 'Itel A56', classGroup: 'S.5', status: 'Syncing', compliance: 'Pending', battery: 62, lastSync: '2026-05-28T05:19:00Z', policy: 'Exam Kiosk', enrolledBy: 'ICT Teacher', district: 'Kampala' },
	{ id: 'EDG-022', model: 'Samsung A14', classGroup: 'S.6', status: 'Online', compliance: 'Compliant', battery: 85, lastSync: '2026-05-28T05:08:00Z', policy: 'Session Schedule', enrolledBy: 'Super Admin', district: 'Wakiso' },
	{ id: 'EDG-023', model: 'Tecno Pop 7', classGroup: 'S.1', status: 'Offline', compliance: 'Pending', battery: 39, lastSync: '2026-05-27T15:58:00Z', policy: 'Low Battery Protocol', enrolledBy: 'Class Teacher', district: 'Mukono' },
	{ id: 'EDG-024', model: 'Itel A60', classGroup: 'S.1', status: 'Online', compliance: 'Compliant', battery: 89, lastSync: '2026-05-28T04:50:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Jinja' },
	{ id: 'EDG-025', model: 'Samsung A13', classGroup: 'S.2', status: 'Online', compliance: 'Compliant', battery: 93, lastSync: '2026-05-28T04:42:00Z', policy: 'Session Schedule', enrolledBy: 'ICT Teacher', district: 'Mbarara' },
	{ id: 'EDG-026', model: 'Tecno Spark 8C', classGroup: 'S.2', status: 'Syncing', compliance: 'Pending', battery: 72, lastSync: '2026-05-28T04:33:00Z', policy: 'Exam Kiosk', enrolledBy: 'Super Admin', district: 'Kampala' },
	{ id: 'EDG-027', model: 'Itel A58', classGroup: 'S.3', status: 'Online', compliance: 'Compliant', battery: 80, lastSync: '2026-05-28T04:19:00Z', policy: 'Low Battery Protocol', enrolledBy: 'Class Teacher', district: 'Wakiso' },
	{ id: 'EDG-028', model: 'Samsung A14', classGroup: 'S.3', status: 'Offline', compliance: 'Violation', battery: 41, lastSync: '2026-05-27T14:48:00Z', policy: 'App Whitelist', enrolledBy: 'ICT Teacher', district: 'Mukono' },
	{ id: 'EDG-029', model: 'Tecno Camon 19', classGroup: 'S.4', status: 'Online', compliance: 'Compliant', battery: 95, lastSync: '2026-05-28T04:04:00Z', policy: 'Exam Kiosk', enrolledBy: 'Super Admin', district: 'Jinja' },
	{ id: 'EDG-030', model: 'Itel A70', classGroup: 'S.4', status: 'Syncing', compliance: 'Pending', battery: 67, lastSync: '2026-05-28T03:54:00Z', policy: 'Session Schedule', enrolledBy: 'ICT Teacher', district: 'Mbarara' },
	{ id: 'EDG-031', model: 'Samsung A24', classGroup: 'S.5', status: 'Online', compliance: 'Compliant', battery: 87, lastSync: '2026-05-28T03:41:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Kampala' },
	{ id: 'EDG-032', model: 'Tecno Spark 10C', classGroup: 'S.5', status: 'Offline', compliance: 'Violation', battery: 44, lastSync: '2026-05-27T13:55:00Z', policy: 'Exam Kiosk', enrolledBy: 'Class Teacher', district: 'Wakiso' },
	{ id: 'EDG-033', model: 'Itel A56', classGroup: 'S.6', status: 'Online', compliance: 'Compliant', battery: 90, lastSync: '2026-05-28T03:22:00Z', policy: 'Session Schedule', enrolledBy: 'ICT Teacher', district: 'Mukono' },
	{ id: 'EDG-034', model: 'Samsung A05', classGroup: 'S.6', status: 'Syncing', compliance: 'Pending', battery: 71, lastSync: '2026-05-28T03:15:00Z', policy: 'Low Battery Protocol', enrolledBy: 'Super Admin', district: 'Jinja' },
	{ id: 'EDG-035', model: 'Tecno Pop 7', classGroup: 'S.1', status: 'Online', compliance: 'Compliant', battery: 88, lastSync: '2026-05-28T02:59:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Mbarara' },
	{ id: 'EDG-036', model: 'Itel A60', classGroup: 'S.1', status: 'Offline', compliance: 'Pending', battery: 36, lastSync: '2026-05-27T13:02:00Z', policy: 'Session Schedule', enrolledBy: 'Class Teacher', district: 'Kampala' },
	{ id: 'EDG-037', model: 'Samsung A13', classGroup: 'S.2', status: 'Online', compliance: 'Compliant', battery: 94, lastSync: '2026-05-28T02:42:00Z', policy: 'Exam Kiosk', enrolledBy: 'ICT Teacher', district: 'Wakiso' },
	{ id: 'EDG-038', model: 'Tecno Spark 8C', classGroup: 'S.2', status: 'Syncing', compliance: 'Pending', battery: 63, lastSync: '2026-05-28T02:34:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Mukono' },
	{ id: 'EDG-039', model: 'Itel A58', classGroup: 'S.3', status: 'Online', compliance: 'Compliant', battery: 79, lastSync: '2026-05-28T02:21:00Z', policy: 'Low Battery Protocol', enrolledBy: 'Class Teacher', district: 'Jinja' },
	{ id: 'EDG-040', model: 'Samsung A14', classGroup: 'S.3', status: 'Offline', compliance: 'Violation', battery: 49, lastSync: '2026-05-27T12:18:00Z', policy: 'Session Schedule', enrolledBy: 'ICT Teacher', district: 'Mbarara' },
	{ id: 'EDG-041', model: 'Tecno Camon 18', classGroup: 'S.4', status: 'Online', compliance: 'Compliant', battery: 90, lastSync: '2026-05-28T02:05:00Z', policy: 'Exam Kiosk', enrolledBy: 'Super Admin', district: 'Kampala' },
	{ id: 'EDG-042', model: 'Itel A70', classGroup: 'S.4', status: 'Syncing', compliance: 'Pending', battery: 68, lastSync: '2026-05-28T01:54:00Z', policy: 'App Whitelist', enrolledBy: 'ICT Teacher', district: 'Wakiso' },
	{ id: 'EDG-043', model: 'Samsung A24', classGroup: 'S.5', status: 'Online', compliance: 'Compliant', battery: 92, lastSync: '2026-05-28T01:42:00Z', policy: 'Session Schedule', enrolledBy: 'Super Admin', district: 'Mukono' },
	{ id: 'EDG-044', model: 'Tecno Spark 10C', classGroup: 'S.5', status: 'Offline', compliance: 'Violation', battery: 38, lastSync: '2026-05-27T11:40:00Z', policy: 'Exam Kiosk', enrolledBy: 'Class Teacher', district: 'Jinja' },
	{ id: 'EDG-045', model: 'Itel A56', classGroup: 'S.6', status: 'Online', compliance: 'Compliant', battery: 96, lastSync: '2026-05-28T01:17:00Z', policy: 'App Whitelist', enrolledBy: 'Super Admin', district: 'Mbarara' },
	{ id: 'EDG-046', model: 'Samsung A05', classGroup: 'S.6', status: 'Syncing', compliance: 'Pending', battery: 74, lastSync: '2026-05-28T01:04:00Z', policy: 'Session Schedule', enrolledBy: 'ICT Teacher', district: 'Kampala' },
	{ id: 'EDG-047', model: 'Tecno Pop 7', classGroup: 'S.6', status: 'Online', compliance: 'Compliant', battery: 81, lastSync: '2026-05-28T00:55:00Z', policy: 'Low Battery Protocol', enrolledBy: 'Super Admin', district: 'Wakiso' }
];

export const POLICY_TYPES = [
	'App Whitelist',
	'Web Filter',
	'Exam Kiosk',
	'Session Schedule',
	'Emergency Lockdown',
	'Low Battery Protocol'
];

export const POLICIES = [
	{
		id: 'POL-001',
		title: 'Exam Kiosk',
		status: 'Active',
		scope: 'S.4',
		type: 'Exam Kiosk',
		encryption: 'AES-256',
		summary: 'Locks the device to approved exam applications during UNEB sessions.',
		details: ['Approved apps only', 'Disable notifications', 'Auto-lock after 30 seconds', 'USB transfer blocked'],
		updatedAt: '2026-05-28T07:30:00Z'
	},
	{
		id: 'POL-002',
		title: 'S.1 Learning Suite',
		status: 'Scheduled',
		scope: 'S.1',
		type: 'App Whitelist',
		encryption: 'AES-256',
		summary: 'Restricts devices to educational apps used in lower secondary classes.',
		details: ['Khan Academy', 'Google Classroom', 'PDF reader', 'Offline notes'],
		updatedAt: '2026-05-28T06:48:00Z'
	},
	{
		id: 'POL-003',
		title: 'Session Schedule',
		status: 'Draft',
		scope: 'S.2',
		type: 'Session Schedule',
		encryption: 'AES-256',
		summary: 'Defines classroom time windows for supervised device use.',
		details: ['08:00 start', '12:30 lock', 'Afternoon teacher override', 'Weekend disabled'],
		updatedAt: '2026-05-27T17:05:00Z'
	},
	{
		id: 'POL-004',
		title: 'Emergency Lockdown',
		status: 'Inactive',
		scope: 'All Classes',
		type: 'Emergency Lockdown',
		encryption: 'AES-256',
		summary: 'Turns all enrolled devices into a restricted evidence-preserving mode.',
		details: ['Disable non-essential apps', 'Force silent mode', 'Show admin notice', 'Preserve logs'],
		updatedAt: '2026-05-26T14:21:00Z'
	},
	{
		id: 'POL-005',
		title: 'Low Battery Protocol',
		status: 'Active',
		scope: 'All Classes',
		type: 'Low Battery Protocol',
		encryption: 'AES-256',
		summary: 'Protects devices when power is low and charging is unavailable.',
		details: ['Battery warning at 20%', 'Save state automatically', 'Suspend heavy apps', 'Notify teacher'],
		updatedAt: '2026-05-28T05:12:00Z'
	},
	{
		id: 'POL-006',
		title: 'Web Filter - Restricted Sites',
		status: 'Scheduled',
		scope: 'S.5',
		type: 'Web Filter',
		encryption: 'AES-256',
		summary: 'Blocks social media and non-instructional content during study time.',
		details: ['Block social media', 'Allow UNBS/UNEB resources', 'Log blocked requests', 'Teacher override'],
		updatedAt: '2026-05-27T19:44:00Z'
	}
];

export const MOCK_PLACEHOLDER = false;
