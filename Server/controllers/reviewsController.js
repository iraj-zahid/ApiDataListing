const reviewCheck =  require("../schema/reviewsSchema")

module.exports.create = async (req, res) => {
    console.log("req body", req.body)

    
    try{
        await reviewCheck.insertMany([req.body])

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
    const reviewsCheck = await reviewCheck.find()

    res.send({
        status: 200,
        message: "read Api is working",
        data: reviewsCheck
    })
}