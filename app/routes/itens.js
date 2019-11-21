module.exports = function(application) {
	
	application.get('/itens', function(req, res){
		application.app.controllers.item.item(application, req, res);		
	});

	application.get('/item', function(req, res){
		application.app.controllers.item.product(application, req, res);
	});

	application.get('/buy', function(req, res){
		application.app.controllers.item.addProduct(application, req, res);
	});

};