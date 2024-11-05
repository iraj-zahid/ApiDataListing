const userDataCheck =  require("../schema/signupSchema")

module.exports.create = async (req, res) => {

    
    try{
        await userDataCheck.insertMany([req.body])

        res.status(200).json({
            message:"ok",
            data:req.body
        })
    }
    catch(error){
        res.status(500).json({
            status: 500,
        });
    }
}


module.exports.read = async (req, res) => {
    const userDataCheckRes = await userDataCheck.find()
   
    res.send({
        status: 200,
        message: "read Api is working",
        data: userDataCheckRes
    })
}