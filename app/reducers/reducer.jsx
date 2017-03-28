const reducer=(state={},action)=>{
	switch(action){
		case 'DDD':
			return Object.assign({},state);
		default:
			return state;	
	}
}
export default reducer