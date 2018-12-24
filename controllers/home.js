/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('index.ejs', {
    title: 'Home'
  });
};
