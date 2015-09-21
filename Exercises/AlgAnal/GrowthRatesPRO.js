/*global JSAV, window, katex */
(function() {
  "use strict";
  var av,           // The JSAV object
      answerIndex = [], // The current order for the user's functions
      cloneArr = [],    // The display functions, in original order
      cloneIndex = [],  // Original order of the indices for the functions
      functions = [],   // The list of functions to choose from
      jsavArr,          // The array that the user manipulates (JSAV object)
      selected_index;   // Position that has been selected by user for swap

  var growthRatesPRO = {
    userInput: null,      // Boolean: Tells us if user ever did anything

    // Click event handler on the array
    clickHandler: function(index) {
      if (selected_index === -1) { // if nothing currently selected
        jsavArr.css(index, {"font-size": "130%"});
        selected_index = index;
      } else {
        jsavArr.swap(selected_index, index);
        jsavArr.css(index, {"font-size": "100%"});
        jsavArr.css(selected_index, {"font-size": "100%"});
        growthRatesPRO.swap(answerIndex, selected_index, index);
        selected_index = -1;  // Reset to nothing selected
      }
      growthRatesPRO.userInput = true;
    },

    // swap two values in array
    swap: function(arr, i, j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    },

    // reset function definition
    reset: function() {
      if (jsavArr) { jsavArr.clear(); }
      jsavArr = av.ds.array(cloneArr, {indexed: false, center: false, left: -5});
      // Bind the clickHandler to handle click events on the array
      jsavArr.click(growthRatesPRO.clickHandler); // Rebind click handler after reset
      answerIndex = cloneIndex.slice(0);
      growthRatesPRO.userInput = false;
      selected_index = -1;         // Reset to nothing selected
    },

    // Initialise the exercise
    initJSAV: function(arr_size) {
      functions = [
        "5 \\log \\log n",
        "2 \\log n",
        "\\log^2 n",
        "2 \\log^3 n",
        "7 \\sqrt{n}",
        "\\sqrt{n} \\log n",
        "n \\log \\log n",
        "9 n \\log n",
        "n \\log^2 n",
        "n^{4/3}",
        "n^2",
        "n^4",
        "2^{\\log n}",
        "2^{\\sqrt{n}}",
        "2^n",
        "2^{n^2}"
      ];

      // Out with the old
      cloneIndex.length = 0;
      cloneArr.length = 0;

      av = new JSAV("GrowthRatesPRO");
      av.recorded();

      growthRatesPRO.randomize(arr_size, functions.length);
      growthRatesPRO.reset();

      // Set up handler for reset button
      $("#reset").click(function() { growthRatesPRO.reset(); });
    },

    // Check student's answer for correctness: User's array must match answer
    checkAnswer: function(arr_size) {
      var i;
      for (i = 0; i < (arr_size - 1); i++) {
        if (answerIndex[i] > answerIndex[i + 1]) {
          return false;
        }
      }
      return true;
    },

    randomize: function(arr_size, numfuncs) {
      var count = 0;
      var randomIndex;
      while (count < arr_size) {
        randomIndex = Math.floor(Math.random() * numfuncs);
        if (functions[randomIndex] !== "") {
          cloneArr.push(katex.renderToString(functions[randomIndex]));
          cloneIndex.push(randomIndex);
          functions[randomIndex] = "";
          count++;
        }
      }
    }
  };

  window.growthRatesPRO = window.growthRatesPRO || growthRatesPRO;
}());