{
  const MainController = ($scope) => {
    const invIndex = new InvertedIndex();
    $scope.uploads = () => {
      invIndex.readFile();
    };
  };

  angular.module('mainApp', [])
  .controller('MainController', MainController);
}
