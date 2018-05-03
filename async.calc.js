const add = (a,b) => {
	return new Promise((resolve, reject) =>{
		try {
		resolve(a+b);
		} catch (e) {
			reject(new Error(e));
		}
	}); 
}
module.exports = { add };
