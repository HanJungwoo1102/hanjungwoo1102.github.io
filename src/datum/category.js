const createCategoryNode = (name = '', postIds = [], children = []) => {
    return {
        name,
        postIds,
        children
    };
};

const getCategoryNodeByPostId = (CategoryNode, postId) => {
    let result;
    
    if (CategoryNode.postIds.findIndex(id => id === postId) !== -1) {
        result = CategoryNode;
    }

    CategoryNode.children.findIndex(childCategoryNode => {
        const node = getCategoryNodeByPostId(childCategoryNode, postId);
        if (node) {
            result = node;
            return true;
        } else {
            return false;
        }
    });

    return result;
};

const getAllPostIdsOfCategoryNode = (CategoryNode) => {
    const result = [];

    result.push(...CategoryNode.postIds);
    
    CategoryNode.children.forEach((childCategoryNode) => {
        result.push(...getAllPostIdsOfCategoryNode(childCategoryNode));
    });

    return result;
};

// Category Node
const CATEGORY = createCategoryNode('Category');
const FRONT = createCategoryNode('Front');
const WEB = createCategoryNode('Web');
const GATSBY_BLOG = createCategoryNode('Gatsby Blog', [1])
const ALGORITHM = createCategoryNode('Algorithm');
const PERSONAL = createCategoryNode('Personal');

// create tree
// 0 depth
CATEGORY.children.push(FRONT, ALGORITHM, PERSONAL);

// 1 depth
FRONT.children.push(WEB);

// 2 depth
WEB.children.push(GATSBY_BLOG);

// exports
exports.getCategoryNodeByPostId = getCategoryNodeByPostId;
exports.getAllPostIdsOfCategoryNode = getAllPostIdsOfCategoryNode;
exports.CATEGORY = CATEGORY;
