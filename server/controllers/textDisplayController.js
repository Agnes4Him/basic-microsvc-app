exports.displayText = (req, res) => {
    if (req) {
        res.status(200).json({message:"This text is coming from the backend..."})
    }
}