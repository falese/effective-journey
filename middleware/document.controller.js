const upload = require("../middleware/storage");

const uploadFile = async (req,res) => {
    try{
        await upload(req, res);
      
    
        if (req.file == undefined){
            return res.send('No file attached')
        }
        return res.json({success: true, message: 'File uploaded.fdfd', data: req.file});
       
    } catch (error) {
        console.log(error);
        return res.send(`Error Uploading Image${error}`);
    }

};
module.exports={
    uploadFile: uploadFile
};