

const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting called");
  const token = "xyz"
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("unauthorized");
    return;
  }
  next();
};

const userAuth = (req, res, next) => {
  console.log("User auth is getting called");
  const token ="xyz"
  const isUserAuthorized = token === "xyz";
  if (!isUserAuthorized) {
    res.status(401).send("unauthorized");
    return;
  }
  next();
};

module.exports = { adminAuth, userAuth };