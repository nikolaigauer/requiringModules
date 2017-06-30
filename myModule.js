//
var privateFunction = function() {
  console.log("This is a private function")
}
module.exports = {
  private: function() {
    return privateFunction();
  }

};