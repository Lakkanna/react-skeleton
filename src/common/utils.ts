type StringOrNumber = string | number;

/**
 * type checking of the width or size
 * @param {number|string} value width or height value
 * @returns {boolean} returns true if type of value is type of string or number
 */
const typeCheck = (value: StringOrNumber): boolean => {
  if (typeof value === "string" || typeof value === "number") {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * @param {number} width of the skeleton
 * @param {number} height of the skeleton
 * @returns {number} maximum(width, height)
 */
const getMaxSize = (width: number, height: number): number => {
  const defaultValue = 100;
  let stableWidth = width;
  let stableHeight = height;

  if (!typeCheck(width)) {
    stableWidth = defaultValue;
  }
  if (!typeCheck(height)) {
    stableHeight = defaultValue;
  }

  if (stableWidth && !stableHeight) {
    return typeof stableWidth === "number"
      ? stableWidth
      : Number.parseInt(stableWidth);
  }
  if (stableHeight && !stableWidth) {
    return typeof stableHeight === "number"
      ? stableHeight
      : Number.parseInt(stableHeight);
  }

  if (typeof stableWidth === "string" && Number.isNaN(parseInt(stableWidth))) {
    stableWidth = defaultValue;
  }
  if (
    typeof stableHeight === "string" &&
    Number.isNaN(parseInt(stableHeight))
  ) {
    stableHeight = defaultValue;
  }
  return stableWidth > stableHeight ? stableWidth : stableHeight;
};

export { typeCheck, getMaxSize };
