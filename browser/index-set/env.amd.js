define(
  ["exports"],
  function(__exports__) {
    "use strict";
    var ENV = {
      // The size of the space where we mark hints
      // to increase the performance of `rangeStartForIndex`.
      HINT_SIZE: 256,

      // A constant indicating the end of the IndexSet
      END_OF_SET: 0
    };


    __exports__.ENV = ENV;
  });
