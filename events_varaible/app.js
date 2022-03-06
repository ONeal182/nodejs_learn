const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();

const logDbConnection = () => {
	console.log('Db connect');
};

myEmmiter.addListener('connected', logDbConnection);

myEmmiter.emit('connected');

myEmmiter.removeListener('connected', logDbConnection);
// myEmmiter.removeAllListeners('connected');
// myEmmiter.off('connecnted', logDbConnection);
myEmmiter.emit('connected');

myEmmiter.on('msg', (data)=>{
	console.log(`Получил: ${data}`);
})
myEmmiter.prependOnceListener('msg', (data)=>{
	console.log(`Препенд`);

})

myEmmiter.emit('msg', 'Привет получи моё сообщение');

myEmmiter.once('off', ()=>{
	console.log('Один раз');
})
myEmmiter.emit('off');
myEmmiter.emit('off');

console.log(myEmmiter.getMaxListeners());
myEmmiter.setMaxListeners(1);
console.log(myEmmiter.getMaxListeners());

console.log(myEmmiter.listenerCount('msg'));
console.log(myEmmiter.listeners('msg'));
console.log(myEmmiter.eventNames());

myEmmiter.on('error', (err)=>{
	console.log(`Произошла ошибка: ${err.message}`);
})

myEmmiter.emit('error', new Error('Boom!'));


const target = new EventTarget();

const logTarget = () =>{
	console.log('connected to target');
}

target.addEventListener('connected', logTarget);

target.dispatchEvent(new Event('connected'));