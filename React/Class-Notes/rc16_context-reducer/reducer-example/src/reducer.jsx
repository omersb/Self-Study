export const initialState = {
  loading: false,
  dog: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, dog: "", error: "", loading: true };

    default:
      break;
  }
};
