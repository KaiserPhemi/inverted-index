{
  const invIndex = new InvertedIndex();
  const MainController = ($scope) => {
    $scope.uploads = () => {
      invIndex.readFile();
    };
    $scope.message = 'Default';
    $scope.messageBox = getElementById('msg-box')[0];
    $scope.feedback = (args) => {     
      switch(args){
        case 1:
          message = 'Valid file. Upload successful';
          messageBox.className += ' alert-success';
        case 2:
          message = 'Invalid JSON file';
          messageBox.className += ' alert-danger';
      }

    }
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

  angular.module('mainApp', [])
  .controller('MainController', MainController)
  .directive('fileUpload', fileUpload);
}
