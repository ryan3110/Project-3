
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Cloudant Boiler Plate' });
};
//implemented by Danny 
//GET database 
//added some things for the database itself
exports.database = function(req, res){
  var user = req.user;
  console.log(req);
  res.render('database.html', {u: user, title: 'Database'});
};
//GET chatbot
exports.chatbot = function(req, res){
  res.render('chatbot.html', { title: 'Cloudant Boiler Plate' });
};
//GET FACTS
exports.facts = function(req, res){
  res.render('facts.html', { title: 'Cloudant Boiler Plate' });
};
