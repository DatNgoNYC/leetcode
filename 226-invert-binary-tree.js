/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var newLeftLeaf = root.right === null ? null : invertTree(root.right)
    var newRightLeaf = root.left === null ? null : invertTree(root.left)
    var newRootNode = new TreeNode(root.val, newLeftLeaf, newRightLeaf )
    
    return newRootNode
};

