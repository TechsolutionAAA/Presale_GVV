export const pixelToNumber = (pixelString: string) => {
    if (pixelString.length > 2) {
      return +pixelString.replace("px", "");
    }
    else return 0;
  };
  