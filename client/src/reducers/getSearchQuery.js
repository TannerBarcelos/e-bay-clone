//check the action type and create store: remember that actions are automatically passed to all reducers with the dispatch

const getSearchQuery = (itemResults = [], action) => {
  //repopulate the curent state with the spread operator
  if (action.type === 'POPULATE_STORE') {
    return [...action.payload];
  }
  //not action we wanted: return default state
  return itemResults;
};

export default getSearchQuery;
