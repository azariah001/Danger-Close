/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home.pug', {
    title: 'Home'
  });
};
