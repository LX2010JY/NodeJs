/**
 * Created by yuan on 2017/3/3.
 * bst 二叉排序树， 左节点 < 父节点 < 右节点
 */

var insertNode = function (node,newNode) {
    if(newNode.key<node.key) {
        if(node.left===null) {
            node.left = newNode;
        } else {
            insertNode(node.left,newNode);
        }
    } else {
        if(node.right===null) {
            node.right = newNode;
        } else {
            insertNode(node.right,newNode);
        }
    }
};

function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    this.root = null;
    this.insert = function (key) {
        var newNode = new Node(key);
        if(this.root==null) {
            this.root = newNode;
        } else {
            insertNode(this.root,newNode);
        }
    };

    this.MIN = function () {
        return minNode(this.root);
    };
    this.MAX = function () {
        return maxNode(this.root);
    };
    //获取最小值，也就是排序二叉树最左边的节点
    var minNode = function (node) {
        if(node) {
            while(node&&node.left!==null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    var maxNode = function (node) {
        if(node) {
            while(node&&node.right!==null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    //查找节点 目前返回该节点全部信息
    this.search = function (val,node=this.root) {
        while(node) {
            if(node.key==val) {
                break;
            } else if(node.key>val) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        if(node===null) return '没有查找到：'+val;
        return node;
    };
    //先序遍历
    this.preOrderTraverse = function (node) {
        if(node !== null) {
            console.log(node.key);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);

        }
    };
    //中序遍历
    this.inOrderTraverse = function (node) {
        if(node !== null) {
            this.inOrderTraverse(node.left);
            console.log(node.key);
            this.inOrderTraverse(node.right);
        }
    };
    //后序遍历
    this.postOrderTraverse = function (node) {
        if(node !== null) {
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            console.log(node.key);
        }
    };
}
var bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(9);
bst.insert(13);
bst.insert(20);
bst.insert(3);
bst.insert(6);
bst.insert(8);
bst.insert(10);
bst.insert(12);
bst.insert(14);
bst.insert(18);
bst.insert(25);
// bst.inOrderTraverse(bst.root);
// bst.preOrderTraverse(bst.root);
// bst.postOrderTraverse(bst.root);
console.log('BST二叉树最小值:'+bst.MIN());
console.log('BST二叉树最大值:'+bst.MAX());
console.log(bst.search(25));