const {Cart, User, Product} = require('../util/models')

module.exports = {
    addToCart: async (req,res) => {
        try{
            const {userId, productId} = req.body
            await Cart.create({userId, productId})
            res.status(200).send("Added to cart :)")
        }
        catch(err){
            res.status(400).send("Couldn't add to cart")
        }
    },
    checkOut: async (req,res) => {
        try{
            const {userId} = req.params
            let cart = await Cart.findAll(
                {
                    where: {userId: +userId},
                    include: [
                        {
                            model: Product,
                            attributes: ['name', 'price']
                        },
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ],
                    attributes: ["id"]
                }
            )
            const total = cart.reduce((acc, curr) => {
                return acc + curr.price
            },0)
            res.status(200).send(cart)
        }
        catch(err){
            res.status(400).send("Couldn't check out")

        }
    }
}