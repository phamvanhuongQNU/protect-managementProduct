module.exports = (pagination,query) =>{
  
    
    if (query.limit ){
        pagination.limit = query.limit;
        
    }
    if( query.page){
        pagination.skip =  (query.page - 1) * query.limit
    }
    return pagination
}