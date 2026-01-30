export default class Introspector {
	constructor(oObject){
		this.object = oObject;
	}
	static getApi(oObject){
		const mResult = new Map();
		let instance = oObject;
		for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(instance))) {
			if (typeof instance[key] === 'function' && instance[key].constructor.name === 'AsyncFunction') {
				mResult.set(key, "AsyncFunction");
				console.log(`Async method: ${key}`);
			} else {
				if (typeof instance[key] === 'function') {
				mResult.set(key, "Function"));
				console.log(`Regular method: ${key}`);
			}
		}
		return mResult;
	}
}