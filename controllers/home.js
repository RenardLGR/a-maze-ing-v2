module.exports = {
    getLandingPage: (req, res) => {
      res.render("landingpage.ejs");
    },

    getHomePage: (req, res) => {
        res.render("homepage.ejs");
    },

    getProfile: (req, res) => {
        res.render("profile.ejs");
    },
  };