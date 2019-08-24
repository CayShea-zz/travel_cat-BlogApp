import createDataContext  from './createDataContext';


//reducer
const blogReducer = (blogPosts, action) => {
    switch(action.type) {
        case 'addBlogPosts':
                console.log('added');
            return [
                ...blogPosts, 
                { 
                    title: action.payload.title, 
                    content: action.payload.content,
                    id: Math.floor(Math.random()*999)
                }
            ];
            
        case 'deleteBlogPosts':
            return blogPosts.filter((blog) => blog.id !== action.payload);
        // case: 'updateBlog':
        //     return
        default:
            return state;
    }
}

//helper function
const addBlogPosts = (dispatch) => {
    return (title, content, callback) => {
        dispatch ({ type: 'addBlogPosts', payload: { title: title, content: content }})
        callback();
    }
}

const deleteBlogPosts = dispatch => {
    return (id) => {
        dispatch ({ type: 'deleteBlogPosts', payload: id})
    }
}


export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPosts, deleteBlogPosts }, 
    []
    );




