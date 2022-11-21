// file from yoga/javascript/tests/tools.js

export const getMeasureCounter = function (Yoga, cb, staticWidth, staticHeight) {
  var counter = 0;

  return {
    inc: function (width, widthMode, height, heightMode) {
      counter += 1;

      return cb
        ? cb(width, widthMode, height, heightMode)
        : { width: staticWidth, height: staticHeight };
    },

    get: function () {
      return counter;
    },
  };
};

export const getMeasureCounterMax = function (Yoga) {
  return getMeasureCounter(
    Yoga,
    function (width, widthMode, height, heightMode) {
      var measuredWidth =
        widthMode === Yoga.MEASURE_MODE_UNDEFINED ? 10 : width;
      var measuredHeight =
        heightMode === Yoga.MEASURE_MODE_UNDEFINED ? 10 : height;

      return { width: measuredWidth, height: measuredHeight };
    }
  );
};

export const getMeasureCounterMin = function (Yoga) {
  return getMeasureCounter(
    Yoga,
    function (width, widthMode, height, heightMode) {
      var measuredWidth =
        widthMode === Yoga.MEASURE_MODE_UNDEFINED ||
        (widthMode == Yoga.MEASURE_MODE_AT_MOST && width > 10)
          ? 10
          : width;
      var measuredHeight =
        heightMode === Yoga.MEASURE_MODE_UNDEFINED ||
        (heightMode == Yoga.MEASURE_MODE_AT_MOST && height > 10)
          ? 10
          : height;

      return { width: measuredWidth, height: measuredHeight };
    }
  );
};
