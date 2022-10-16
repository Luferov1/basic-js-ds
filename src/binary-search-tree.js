const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addBranch(this.rootNode, data);

    function addBranch(node, data) {
      if (!node) return {
        data: data,
        left: null,
        right: null
      }

      if (node.data == data) return node;

      if (data < node.data) {
        node.left = addBranch(node.left, data);
      } else {
        node.right = addBranch(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchBrunch(this.rootNode, data);

    function searchBrunch(node, data) {

      if (!node) return false;

      if (node.data === data) return true;

      if (data < node.data) return searchBrunch(node.left, data);
      else return searchBrunch(node.right, data)
    }
  }

  find(data) {
    return findBrunch(this.rootNode, data);

    function findBrunch(node, data) {

      if (!node) return null;

      if (node.data === data) return node;

      if (data < node.data) return findBrunch(node.left, data);
      else return findBrunch(node.right, data);
    }
  }

  remove(data) {
    this.root = removeBranch(this.rootNode, data);

    function removeBranch(node, data) {
      if(!node) return null;

      if (data < node.data) {
        node.left = removeBranch(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeBranch(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null
        }
        
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;

        node.right = removeBranch(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    
    let node = this.rootNode;

    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    
    let node = this.rootNode;

    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};