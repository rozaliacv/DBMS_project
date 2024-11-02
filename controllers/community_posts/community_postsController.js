import posts from "../../models/community_posts/community_posts.js";

export const getAllPosts = async(req,res) => {
    try{
        const postsList = await posts.getAll();
        res.json(postsList);
    }catch(error){
        res.status(500).json({error:"Error retrieving posts"});
    }
};

export const getPost = async(req,res) => {
    try{
            const post = await posts.get({
            post_id: req.params?.id,
            posted_by: req.params?.name,
            });
            res.json(post);
    }catch(error){
        if(error.status===404){
            res.status(404).json({error: error.message});
        }else{
            res.status(500).json({error:"Error retrieving post"});
        }
    }
};

export const addPost = async(req,res) => {
    try{
        const result = await posts.add(req.body);
        if(!result.success){
            return res.status(400).json({message: result.message});
        }

        const{post_id,posted_by,title,content,is_fulfilled}=result.createPost
        res.status(201).json({post_id,posted_by,title,content,is_fulfilled})
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const updatePost = async(req,res) => {
    const {post_id} = req.params
    try{
            await posts.update(post_id,req.body);
            const updatedPost = await posts.get({post_id});
            res.json({updatedPost});
    }catch(error){
        if(error.status === 404) {
            res.status(404).json({error: error.message});
        }else{
            res.status(500).json({error: "Error updating post"});
        }
    }
};


export const deletePost = async(req,res) => {
    try{
        await posts.remove(req.params.post_id);
        res.status(204).end();
    }catch (error) {
        if(error.status === 404) {
            res.status(404).json({error: error.message});
        }else{
            res.status(500).json({error: "Error deleting post"});
        }       
    }
};