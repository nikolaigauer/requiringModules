// declaring a private function that can not be invoked outside of this module
var privateFunction = function() {
  console.log("This is a private function")
}

// stuffing a function into the exports object, which can be invoked if required
module.exports = {
  //the function below invokes the private function called `privateFunction`
  private: function() {
    return privateFunction();
  }

};
