// import {charactres, greet} from './charactres.mjs';

// for (const c of charactres){
// 	greet(c);
// }

// import * as char from './charactres.mjs';

// for (const c of char.charactres){
// 	char.greet(c);
// }

// import log, * as char from './charactres.mjs';
// for (const c of char.charactres){
// 	char.greet(c);
// }
// log();

// import {charactres, greet as hello} from './charactres.mjs';

// for (const c of charactres){
// 	hello(c);
// }

async function main() {
	try {
		const { charactres, greet } = await import('./charactres.mjs')
		for (const c of charactres) {
			greet(c);
		}
	} catch (e) {
		console.log('ошибка')
	}

}

main();