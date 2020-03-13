class Node {
  constructor(value) {
    this.value = value;

    this.left = null;
    this.right = null;
  }
};

const four = new Node(4);
const two = new Node(2);
const seven = new Node(7);
const one = new Node(1);
const three = new Node(3);
const six = new Node(6);
const nine = new Node(9);

four.left = two;
four.right = seven;
two.left = one;
two.right = three;
seven.left = six;
seven.right = nine;

seven.right = nine;

let invertTree = function(root) {
if (root) {
  let tmpLeft = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmpLeft);
}
return root;
};
console.log(invertTree(four));
