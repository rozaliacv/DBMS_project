export const errorHandler = (err, req, res, next) => {
    
    if (res.headersSent) {
      return next(err);
    }
  
    console.error(err.stack);
  
    
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    }
  
    
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  };