const jwt = require("jsonwebtoken");
const { user } = require("pg/lib/defaults");
const JWT_KEY =
  "oeiwurgb[0wugh0824ht0[gh23-t-u=j23=j[hqg[erigbrfibonhireogh0rewgh";
function getEncodedToken(username) {
  const token_data = {
    userid: username,
    date: Date(),
  };
  const token = jwt.sign(token_data, JWT_KEY, { expiresIn: "1D" });
  return token;
}

function verifyJWTToken(token) {
  try {
    const token_data = jwt.decode(token);
    const { exp } = token_data;
    const currentUnixTime = Math.floor(Date.now() / 1000);
    if (currentUnixTime < exp) {
      if (jwt.verify(token, JWT_KEY)) {
        return true;
      }
      return false;
    }
    console.log("JWT token is expired");
    return false;
  } catch (err) {
    console.log("JWT Verification Error : ", err.message);
    return false;
  }
  return false;
}

const testJWT = () => {
  console.log(getEncodedToken("dhoni"));
  console.log(verifyJWTToken(getEncodedToken("dhoni")));
  const sample =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJkaG9uaWRmc2RmIiwiZGF0ZSI6IlN1biBKdWwgMTQgMjAyNCAxNjoyMzoyOCBHTVQtMDQwMCAoRWFzdGVybiBEYXlsaWdodCBUaW1lKSIsImlhdCI6MTcyMDk4ODYwOCwiZXhwIjoxNzIxMDc1MDA4fQ.3P7mtloy6LjIoQBYJqsgZgOorGI7J6d35ORyfCPmGhU";
  console.log(verifyJWTToken(sample));
};

module.exports = {
    'getEncodedToken' : getEncodedToken,
    'verifyJWTToken' : verifyJWTToken
}