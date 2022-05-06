// Write some authentication for the login
const withAuth = (req,res,next) => {
    // missing functionality 
    //if (con) - if youre not logged in
    // then redirect to login page
    // else move on to your dashboard
    if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
        // We call next() if the user is authenticated
        next();
      }
};

module.exports = withAuth;