
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Cloudant Boiler Plate' });
};
//implemented by Danny 
//GET database 
exports.database = function(req, res){
  res.render('database.html', { title: 'Cloudant Boiler Plate' });
};
//GET chatbot
exports.chatbot = function(req, res){
  res.render('chatbot.html', { title: 'Cloudant Boiler Plate' });
};
//GET FACTS
exports.facts = function(req, res){
  res.render('facts.html', { title: 'Cloudant Boiler Plate' });
};