/* global monogatari */

// ゲーム内で使用されるメッセージを定義
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// ゲーム内で使用される通知を定義
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// ゲーム内で使用される Particles JS の設定を定義
monogatari.action ('particles').particles ({

});

// ゲーム内で使用されるキャンバスオブジェクトを定義
monogatari.action ('canvas').objects ({

});

// この素晴らしいゲームの制作に関わった人々のクレジット
monogatari.configuration ('credits', {

});


// ゲームの画像ギャラリーで利用可能になる画像を定義
monogatari.assets ('gallery', {

});

// ゲーム内で使用される BGM（音楽）を定義
monogatari.assets ('music', {

});

// ゲーム内で使用されるボイスファイルを定義
monogatari.assets ('voices', {

});

// ゲーム内で使用される効果音を定義
monogatari.assets ('sounds', {

});

// ゲーム内で使用される動画を定義
monogatari.assets ('videos', {

});

// ゲーム内で使用される画像を定義
monogatari.assets ('images', {

});

// 各シーンの背景画像を定義
monogatari.assets ('scenes', {

});


// 登場人物（キャラクター）を定義
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	}
});

// スタート
monogatari.script ({
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});