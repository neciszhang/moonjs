(function(window) {

	function Moon(opts) {
		//el is a node
		var el = document.querySelector(opts.el),
			model = opts.model,
			start = opts.start || "{{",
			end = opts.end || "}}";
		log(model);

		//one way data binding
		for (var key in model) {
			if (model.hasOwnProperty(key)) {
				var obj = {};
				Object.defineProperty(obj, key, {
					get: function() {
						return model[key]
					},
					set: function(val) {
						model[key] = val;
						update(start, end, key, model[key], el);
					}
				});
				update(start, end, key, model[key], el);
			}
		}

		//two way data binding
		console.log(el.childNodes);
		console.log(el.children);
		// for (var i = 0; i < el.childNodes.length; i++) {
		// 	if (el.childNodes[i].hasAttribute('m-model')) {
		// 		var modelval = el.childNodes[i].value;
		// 		update(start, end);
		// 	}
		// }

		for (var i = 0; i < el.children.length; i++) {
			var child=el.children[i];
			if(child.hasAttribute('m-model')){
				console.log(child);
				var modelVal = child.value;
				var modelName=child.getAttribute('m-model');
				model[modelName]=modelVal;

				console.log(modelName);
				console.log(modelVal);

				// update(start,end,modelName,modelVal,el);
				child.addEventListener(['keyup','blur'],function(e){
					var name =e.target.getAttribute('m-model');
					console.log(name);
					if(name){
						if(e.target.value!=model[name]){
							this.model[name]=e.target.value;
						}
					}
				})
			}
		}


	}

	var update = function(start, end, key, replace, el) {
		var pattern = start + key + end;
		el.innerHTML = el.innerHTML.replace(new RegExp(pattern, 'g'), replace);
	};

	window.Moon = Moon;

	var opts = {
		el: "div",
		model: {
			'a': 1,
			'b': 3,
			'c':333
		}

	}
	Moon(opts);

})(window);

function log(e) {
	console.log(e);
}