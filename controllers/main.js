module.exports.get_recommendation_page = function(req,res){
  res.render('hotel.hbs', {currentYear: new Date().getFullYear()});
}
