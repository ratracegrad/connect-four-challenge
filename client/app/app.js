const controllerFunc = function($scope) {
  $scope.formData = {};
  $scope.player1 = true;
  $scope.showGame = false;
  $scope.modalShown = false;
  $scope.game = {
    board: {
      'c11': 0, 'c12': 0, 'c13': 0, 'c14': 0, 'c15': 0, 'c16': 0,
      'c21': 0, 'c22': 0, 'c23': 0, 'c24': 0, 'c25': 0, 'c26': 0,
      'c31': 0, 'c32': 0, 'c33': 0, 'c34': 0, 'c35': 0, 'c36': 0,
      'c41': 0, 'c42': 0, 'c43': 0, 'c44': 0, 'c45': 0, 'c46': 0,
      'c51': 0, 'c52': 0, 'c53': 0, 'c54': 0, 'c55': 0, 'c56': 0,
      'c61': 0, 'c62': 0, 'c63': 0, 'c64': 0, 'c65': 0, 'c66': 0,
      'c71': 0, 'c72': 0, 'c73': 0, 'c74': 0, 'c75': 0, 'c76': 0
    },
    nextSlot: {
      c1: 1, c2: 1, c3: 1, c4: 1, c5: 1, c6: 1, c7: 1
    },
    numMoves: 0,
    winner: null
  };

  /* controller functions  */
  $scope.toggleInstructionsModal = () => {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.startGame = () => {
    $scope.showGame = !$scope.showGame;
  };

  $scope.dropChip = (btn) => {
    $scope.game.numMoves++;
    if ($scope.game.nextSlot[btn] === 7) {
      // TODO play sound
    } else {
      $scope.game.board[btn+$scope.game.nextSlot[btn]] = ($scope.player1) ? 1 : 2;
      $scope.game.nextSlot[btn] = ($scope.game.nextSlot[btn] + 1);
      if ($scope.game.numMoves > 7 ) {
        $scope.checkWinner(btn, $scope.player1);
      }
    }

    $scope.player1 = !$scope.player1;
  };

  $scope.getSlotClass = (pos) => {
    if ($scope.game.board[pos] === 0) {
      return 'slot';
    } else if ($scope.game.board[pos] === 1) {
      return 'player1';
    } else {
      return 'player2';
    }
  };

  $scope.checkWinner = (btn, player) => {
    if ( $scope.checkHorizontal(btn, player) || $scope.checkVertical(btn, player) || $scope.checkDiagonal(btn, player) ) {
      $scope.game.winner === ($scope.player1) ? 1 : 2;
      return true;
    }
    return false;
  };

  $scope.checkHorizontal = (btn, player) => {

    return false;
  };

  $scope.checkVertical = (btn, player) => {
    return false;
  };

  $scope.checkDiagonal = (btn, player) => {
    return false;
  };


};
const directiveFunc = function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: `
        <div class='ng-modal' ng-show='show'>
            <div class='ng-modal-overlay' ng-click='hideModal()'></div>
            <div class='ng-modal-dialog' ng-style='dialogStyle'>
                <div class='ng-modal-close' ng-click='hideModal()'>X</div>
                <div class='ng-modal-dialog-content' ng-transclude></div>
            </div>
        </div>`
  };
};

angular.module('app', [])
  .controller('mainController', ['$scope', controllerFunc])
  .directive('modalDialog', directiveFunc);