const productCheck =  require("../schema/productSchema")

module.exports.create = async (req, res) => {
    console.log("req body", req.body)

    
    try{
        await productCheck.insertMany([req.body])

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
    const productCheckRes = await productCheck.find()
   
    console.log("res", productCheckRes)

    res.send({
        status: 200,
        message: "read Api is working",
        data: productCheckRes
    })
}