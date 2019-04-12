var data = {
	"@context": "http://schema.org",
	"@type": "Product",
	

	"name": "Auto Mute",
	"description": "Small software utility to make PC or MAC silent when it's turning on or is waking up. The sound is automatically muted when the computer is turning off or is going to suspend mode. The next system start is absolutely silent even if you forgot to turn the sound off in previous session. After that you can enable sound effects manually, using a shortcut combination. Moreover, you may use this keyboard shortcut to quickly switch the sound on and off.",
	"url": "https://auto-mute.com",
	"image": [
		"https://auto-mute.com/images/icon-256x256.png",
		"https://auto-mute.com/images/screenshot.png",
		"https://auto-mute.com/images/tray-menu.png",
		"https://auto-mute.com/images/screenshot_mac.png",
		"https://auto-mute.com/images/tray-menu_mac.png"
	],
	"category": "Software",
	"mpn": "1",
	"sku": "am4x",
			
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "5.0",
		"ratingCount": "65535"
	},
 	
	"brand": {
		"@type": "Organization",
		"url": "https://karpolan.com",
		"email": "software@karpolan.com",
		"name": "KARPOLAN"
	},

	"offers": [
		{
			"@type": "Offer",
			"name" : "Download",
			"url": "https://auto-mute.com/download/",
			"seller": {
				"@type": "Organization",
				"url": "https://auto-mute.com",
				"name": "Auto Mute"
			},
			"availability": "OnlineOnly",
			"priceCurrency": "USD",
			"price": "0"
		},
		{
			"@type": "Offer",
			"name" : "Download for PC",
			"url": "https://auto-mute.com/download/",
			"itemOffered": {
				"@type": "SoftwareApplication",
				"applicationCategory": "UtilitiesApplication",
				"operatingSystem": "Windows",
				"screenshot": "https://auto-mute.com/images/screenshot.png",
				"downloadUrl": "https://auto-mute.com/files/auto-mute.exe",
				"url": "https://auto-mute.com",
				"name": "Auto Mute for PC"
			},
			"availability": "OnlineOnly",
			"priceCurrency": "USD",
			"price": "0"
		},
		{
			"@type": "Offer",
			"name" : "Download for MAC",
			"url": "https://auto-mute.com/download/",
			"itemOffered": {
				"@type": "SoftwareApplication",
				"applicationCategory": "UtilitiesApplication",
				"operatingSystem": "Mac OS X",
				"screenshot": "https://auto-mute.com/images/screenshot_mac.png",
				"downloadUrl": "https://auto-mute.com/files/auto-mute.dmg",
				"url": "https://auto-mute.com",
				"name": "Auto Mute for MAC"
			},
			"availability": "OnlineOnly",
			"priceCurrency": "USD",
			"price": "0"
		}
	]
}
