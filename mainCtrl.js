angular.module('quoteBook').controller('mainCtrl', function($scope, quoteService) {

    $scope.quotes = quoteService.getQuotes();

    $scope.addQuote = function(){
      var newQ = {
        text: $scope.newQuote,
        author: $scope.newAuthor
      }
      if (quoteService.addData(newQ)){
        $scope.newQuote = '';
        $scope.newAuthor = '';
      }
    }

    $scope.removeQuote = function (quoteToDelete){
      quoteService.removeData(quoteToDelete)
    }

})
