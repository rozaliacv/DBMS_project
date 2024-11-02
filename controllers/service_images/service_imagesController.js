
import service_images from "../../models/service_images/service_images.js"



export const getImage = async(req,res) => {
    try{
            const image = await service_images.get({
            image_id: req.params?.image_id,
            service_id: req.params?.service_id,
            });
            res.json(image);
    }catch(error){
        if(error.status===404){
            res.status(404).json({error: error.message});
        }else{
            res.status(500).json({error:"Error retrieving image"});
        }
    }
};



export const addImage = async(req,res) => {
    try{
        const result = await service_images.add(req.body);
        if(!result.success){
            return res.status(400).json({message: result.message});
        }

        const{image_id,service_id,path}=result.createImage
        res.status(201).json({image_id,service_id,path})
    }catch(error){
        res.status(500).json({message: error.message});
    }
};


export const deleteImage = async(req,res) => {
    try{
        await service_images.remove(req.params.image_id);
        res.status(204).end();
    }catch (error) {
        if(error.status === 404) {
            res.status(404).json({error: error.message});
        }else{
            res.status(500).json({error: "Error deleting image"});
        }       
    }
};