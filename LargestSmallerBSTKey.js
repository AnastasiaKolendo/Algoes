/*********************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/


// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
  
  // Constructor to create a new BST 
  function BinarySearchTree() {
    this.root = null;
  }
  
  BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
    // your code goes here
    return helper(this.root, num);
  }
  
  
  function helper(root, num){ 
    if(!root) return -1;
    if(num <= root.key){ 
      return helper(root.left, num);
    } else {
      return Math.max(helper(root.right, num), root.key); 
    }
  }
  
  // Creates a new node by a key and inserts it to the BST
  BinarySearchTree.prototype.insert = function(key) {
    var root = this.root;
  
    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }
  
    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert the new node
    var currentNode = root;
    var newNode = new Node(key);
  
    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
  }
  
  /*********************************************
   * Driver program to test above function     *
   *********************************************/
  
  // Create a Binary Search Tree
  var bst = new BinarySearchTree();
  bst.insert(20);
  bst.insert(9);
  bst.insert(25);
  bst.insert(5);
  bst.insert(12);
  bst.insert(11);
  bst.insert(14);
  
  var result = bst.findLargestSmallerKey(17);
  
  console.log("Largest smaller number is " + result);

//Time complexity: O(h) where h is height of BST.
//Space complexity is O(n)

//Space complexity for the tree itself is proportional to the number of nodes in the tree. Hence, O(N)
//The max amount of stack will essentially be the height of the tree from the root node to the leaf node furthest down. In the average case (and best case) - assuming a tree that's fairly well balanced, then the height would be about log₂ N. 
//Hence, space complexity would be O(log₂ N) or simply O(lg N) In a worst case scenario, where the tree is just a sorted linked list branching right with incrementing values, then O(N) as worst case.


//   function findLargestSmallerKey(rootNode, num):
//     result = -1

//     while (rootNode != null):
//         if (rootNode.key < num):
//             result = rootNode.key
//             rootNode = rootNode.right
//         else:
//             rootNode = rootNode.left

//     return result


//Time Complexity: we scan the tree once from the root to the the leaves and do a constant number of actions for each node. 
//if the tree is balanced the complexity is O(log(N)). 
//Otherwise, it could be up to O(N).

//Space Complexity: throughout the entire algorithm we used only a constant amount of space, 
//hence the space complexity is O(1).