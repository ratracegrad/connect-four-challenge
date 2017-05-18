const controllerFunc = function($scope) {
  /* ------------------
       scope variables
     ------------------*/
  $scope.player1 = true; // used to determine who is current player
  $scope.showGame = false; // show game board be shown
  $scope.modalShown = false; // should modal be shown
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
    winner: null,
    animate: {
      c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false
    }
  }; // the contains game model

  /* ------------------------
      controller functions
     ------------------------*/

  /* displays modal when user clicks on instructions button */
  $scope.toggleInstructionsModal = () => {
    $scope.modalShown = !$scope.modalShown;
  };

  /* starts game when user clicks on start game button */
  $scope.startGame = () => {
    $scope.showGame = !$scope.showGame;
  };

  /* user plays chips so display it on the board */
  $scope.dropChip = (btn) => {
    $scope.game.numMoves++; // increment number of moves made

    /* exception: user tries to play in column that is full */
    if ($scope.game.nextSlot[btn] === 7) {
      $scope.game.animate[btn] = true; // shake column
      $scope.playBuzzer(); // play buzzer sound to let user know that can't play here
    } else {
      $scope.game.board[btn+$scope.game.nextSlot[btn]] = ($scope.player1) ? 1 : 2; // set which player chip is in this spot
      $scope.game.nextSlot[btn] = ($scope.game.nextSlot[btn] + 1); // set next available slot in this column

      /* after play check if we have a winner but only start after the 7th move */
      if ($scope.game.numMoves > 7 ) {
        $scope.checkWinner(btn, $scope.player1);
      }
    }

    /* alternate between the two players */
    $scope.player1 = !$scope.player1;
  };

  /* used to determine what color chip is placed in the slot */
  $scope.getSlotClass = (pos) => {
    if ($scope.game.board[pos] === 0) {
      return 'slot'; // display empty slot
    } else if ($scope.game.board[pos] === 1) {
      return 'player1'; // show player 1 chip color
    }
    return 'player2'; // show player 2 chip color
  };

  /* set class that will animate (shake) column if player tries to make invalid move */
  $scope.getShakeClass = (pos) => {
    return ($scope.game.animate[pos] === true) ? 'shakeColumn' : '';
  };

  /* play buzzer sound if player tries to make invalid move */
  $scope.playBuzzer = function() {
    const audio = new Audio('audio/buzzer.mp3');
    audio.play();
  };

  /* sets column to true which toggles class which shakes column for invalid move */
  $scope.shakeColumn = function(pos) {
    $scope.game.animate[pos] = !$scope.game.animate[pos];
  };

  /* checks to see if play made by user results in a winning move */
  $scope.checkWinner = (pos, player) => {
    if ( $scope.checkHorizontal(pos, player) || $scope.checkVertical(pos, player) || $scope.checkDiagonal(pos, player) ) {
      $scope.game.winner = ($scope.player1) ? 1 : 2;
      return true;
    }
    return false;
  };

  /* checks horizontal for winning strategy */
  $scope.checkHorizontal = (pos, player) => {
    console.log('horizontal', pos, player);
    return false;
  };

  /* checks vertical for winning strategy */
  $scope.checkVertical = (pos, player) => {
    console.log('horizontal', pos, player);
    return false;
  };

  /* checks diagonal for winning strategy */
  $scope.checkDiagonal = (pos, player) => {
    console.log('horizontal', pos, player);
    return false;
  };


};
const instructionsDirectiveFunc = function() {
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
const resultsDirectiveFunc = function() {
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

angular.module('app', ['ngAnimate'])
  .controller('mainController', ['$scope', controllerFunc])
  .directive('instructionsModal', instructionsDirectiveFunc)
  .directive('resultsModal', resultsDirectiveFunc);