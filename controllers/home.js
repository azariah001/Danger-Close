/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('index.ejs', {
    title: 'Home'
  });
};

/*exports.myApp = (req, res) => {
  res.render('components/my-app.js');
};

exports.myIcons = (req, res) => {
  res.render('components/my-icons.js');
};

exports.myView1 = (req, res) => {
  res.render('components/my-view1.js');
};

exports.myView2 = (req, res) => {
  res.render('components/my-view2.js');
};

exports.myView3 = (req, res) => {
  res.render('components/my-view3.js');
};

exports.myView404 = (req, res) => {
  res.render('components/my-view404.js');
};

exports.sharedStyles = (req, res) => {
  res.render('components/shared-styles.js');
};*/
