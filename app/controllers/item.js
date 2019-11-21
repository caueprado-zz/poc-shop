module.exports.item = function(application, req, res){
	var connection = application.config.dbConnection();
	var productModel = new application.app.models.ProductDAO(connection);

	productModel.getAll(function(error, result){
		res.render("itens/itens", {item : result});
	});	
}

module.exports.product = function(application, req, res){
	var connection = application.config.dbConnection();
	var productModel = new application.app.models.ProductDAO(connection);

	var idItem = req.query;

	productModel.getProduct(idItem, function(error, result){
		res.render("itens/item", {product : result});
	});	
}

module.exports.addProduct = function(application, req, res) {
	const request = require('request');

	var product = req.query;
	
	var url = "https://picpay.me/"+product.user+"/"+product.value;
	var payload = { qr_code_url: url };
	console.log(payload);
	request.post('http://192.168.43.252/addProduct', { body: url }, (err, res, body) => {
		if (err) { return console.log(err); }
		console.log("request completed");
		console.log(body);
	});
}