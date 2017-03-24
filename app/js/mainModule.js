{ 
  /**
   * [invIndex description]
   * @type {InvertedIndex}
   */
  const invIndex = new InvertedIndex(),
    MainController = ($scope) => {
      $scope.uploads = () => {
        invIndex.readFile();
      }
    };

  angular.module('mainApp', [])
  .controller('MainController', MainController);
}
