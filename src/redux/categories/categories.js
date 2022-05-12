const STATUS = 'STATUS';

export const status = () => ({
  type: STATUS,
});

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
