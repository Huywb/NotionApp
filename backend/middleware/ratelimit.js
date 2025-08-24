

export const ratelimit = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key")

        if (!success) {
            return res.status(429).json({success: false, message: "Too many requests"})
        }

        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: error.message})
    }
}