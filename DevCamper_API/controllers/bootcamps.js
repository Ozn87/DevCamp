//@des    Get all bootcamps
//@route  GET /api/v1/bootcamps
//@access Public
exports.getBootcamps=(req,res,next)=>{
    res.status(200).json({success:true, msg:'this will show all bootcamps'})
}

//@des    Get single bootcamp
//@route  GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({success:true, msg:`this will get one bootcamp ${req.params.id}`})
}

//@des    Create all bootcamps
//@route  POST /api/v1/bootcamps
//@access Private
exports.createBootcamp=(req,res,next)=>{
    res.status(200).json({success:true, msg:'this will create one bootcamp'})
}

//@des    Update a single bootcamp
//@route  PUT /api/v1/bootcamps/:id
//@access Private
exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({success:true, msg:`this will update one bootcamp ${req.params.id}`})
}

//@des    Delete a single bootcamp
//@route  DELETE /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({success:true, msg:`this will delete one bootcamp ${req.params.id}`})
}









