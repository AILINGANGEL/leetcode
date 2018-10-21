let result = 0;
var longestUnivaluePath = function(root) {
	result = 0;
	heloper(root);
	return result;
};

var heloper = function(root) {
	if (root == null) return 0;
	let left = heloper(root.left);
	let right = heloper(root.right);
	let arrowLeft = 0;
	let arrowRight = 0;
	if(root.left && root.left.val === root.val) {
		arrowLeft = left + 1;
	}

	if(root.right && root.right.val === root.val) {
		arrowRight = right + 1;
	}

	result = Math.max(result, arrowLeft + arrowRight);
	return Math.max(arrowLeft, arrowRight);
}


var test = {
	val: 1,
	left: {
		val: 4,
		left: {
			val: 4,
			left: null,
			right: null
		},
		right: {
			val: 4,
			left: null,
			right: null
		}
	},
	right: {
		val: 5,
		left: null,
		right: {
			val: 5,
			left: null,
			right: null
		}
	}
}


longestUnivaluePath(test);

console.log(result)