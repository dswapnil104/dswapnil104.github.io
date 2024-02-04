// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Swapnil',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// // Weather
	// weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	// weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	// weatherUnit: 'C', // 'F', 'C'
	// language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '19.197580',
	defaultLongitude: '77.298600',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:00',
	hourDarkThemeInactive: '06:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Telegram',
			icon: 'send',
			link: 'https://web.telegram.org/k/',
		},
		{
			id: '2',
			name: 'WhatsApp',
			icon: 'message-circle-more',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '3',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '4',
			name: 'G-Mail',
			icon: 'at-sign',
			link: 'https://mail.google.com/mail/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com/',
		},
		{
			id: '6',
			name: 'Slack',
			icon: 'slack',
			link: 'https://slack.com/get-started#/landing',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://music.youtube.com/',
		},
		{
			id: '2',
			name: 'FCC Radio',
			icon: 'audio-lines',
			link: 'https://coderadio-admin.freecodecamp.org/public/coderadio',
		},
		{
			id: '3',
			name: 'Discord',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.in/',
		},
		{
			id: '5',
			name: '10fastfingers',
			icon: 'snail',
			link: 'https://10fastfingers.com/',
		},
		{
			id: '6',
			name: 'LAN',
			icon: 'router',
			link: 'http://192.168.1.1/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

// 	// First Links Container
// 	firstlistsContainer: [
// 		{
// 			icon: 'music',
// 			id: '1',
// 			links: [
// 				{
// 					name: 'Inspirational',
// 					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
// 				},
// 				{
// 					name: 'Classic',
// 					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
// 				},
// 				{
// 					name: 'Oldies',
// 					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
// 				},
// 				{
// 					name: 'Rock',
// 					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
// 				},
// 			],
// 		},
// 		{
// 			icon: 'coffee',
// 			id: '2',
// 			links: [
// 				{
// 					name: 'Linkedin',
// 					link: 'https://www.linkedin.com',
// 				},
// 				{
// 					name: 'Dribbble',
// 					link: 'https://www.dribbble.com',
// 				},
// 				{
// 					name: 'Trello',
// 					link: 'https://www.trello.com',
// 				},
// 				{
// 					name: 'Slack',
// 					link: 'https://www.slack.com',
// 				},
// 			],
// 		},
// 	],

// 	// Second Links Container
// 	secondListsContainer: [
// 		{
// 			icon: 'binary',
// 			id: '1',
// 			links: [
// 				{
// 					name: 'Spotify',
// 					link: 'https://www.spotify.com',
// 				},
// 				{
// 					name: 'Reddit',
// 					link: 'https://www.reddit.com',
// 				},
// 				{
// 					name: 'Hashnode',
// 					link: 'https://www.hashnode.com',
// 				},
// 				{
// 					name: 'Pocket',
// 					link: 'https://www.pocket.com',
// 				},
// 			],
// 		},
// 		{
// 			icon: 'github',
// 			id: '2',
// 			links: [
// 				{
// 					name: 'Front',
// 					link: 'https://www.reddit.com/r/Frontend/',
// 				},
// 				{
// 					name: 'Rust',
// 					link: 'https://www.reddit.com/r/rust/',
// 				},
// 				{
// 					name: 'Go',
// 					link: 'https://www.reddit.com/r/golang/',
// 				},
// 				{
// 					name: 'Repos',
// 					link: 'https://github.com/migueravila',
// 				},
// 			],
// 		},
// 	],
};
