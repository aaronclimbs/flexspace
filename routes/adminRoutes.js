// module.exports = function(app) {
//   app.get("/admin", (req, res, next) => {
//     const ejsObj = {
//       pageTitle: "Admin Home",
//       user: req.user,
//       script: "admin"
//     };
//     if (req.user.isAdmin) {
//       res.render("admin", ejsObj);
//     }
//     req.flash("");
//     res.redirect("home");
//   });
// };
