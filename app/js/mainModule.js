{ 
  
  const MainController = ($scope) => {
    const invIndex = new InvertedIndex();
    $scope.uploads = () => {
      invIndex.readFile();
    };
    $scope.message = '';
    $scope.searchResult =

   
  };

  const fileUpload = () => {
    return {
        scope: true,        //create a new scope
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var files = event.target.files;
                //iterate files since 'multiple' may be specified on the element
                for (var i = 0;i <files.length;i++) {
                    //emit event upward
                    scope.$emit("fileSelected", { file: files[i] });
                }                                       
            });
        }
    };
};

// Document ready.
document.addEventListener('DOMContentLoaded', () => {
  // Attach file upload listener
  document.getElementById('json-file')
    .addEventListener('change', function createFile() {
      if (this.files[0]) {
        angular.element(this).scope().createIndex(this.files[0]);
      }
    });
});
  angular.module('mainApp', [])
  .controller('MainController', MainController);
}
