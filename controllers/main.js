module.exports.get_home_page = function(req,res){
  res.render('home.hbs', {currentYear: new Date().getFullYear()});
}
