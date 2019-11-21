function ProductDAO(connection){
	this._connection = connection;
}

ProductDAO.prototype.getAll = function(callback){
	this._connection.query('select * from Product', callback);
}

ProductDAO.prototype.getProduct = function(idProduct, callback){
	console.log(idProduct.idProduct);
	this._connection.query('select * from Product where id = ' + idProduct.idProduct, callback);
}

ProductDAO.prototype.create = function(product, callback){
	this._connection.query('insert into Product set ? ', product, callback)
}

ProductDAO.prototype.get5UTopItem = function(callback){
	this._connection.query('select * from Product order by user desc limit 5', callback);
}

module.exports = function(){
	return ProductDAO;
}