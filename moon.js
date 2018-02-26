(function(window){

	function Moon(opts){
		//el is a node
		var el = document.querySelector(opts.el),
			model = opts.model,
			children = el.childNodes;
			log(children);
	}

	var opts = {
		el:"div"
	}
	Moon(opts);

})(window);

function log(e){
	console.log(e);
}