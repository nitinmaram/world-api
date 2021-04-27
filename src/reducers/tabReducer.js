export function tableReducer(state, action) {
  
    switch (action.type) {
      case 'CHANGE_SORT':
        if (state.column === action.column && state.direction === 'ascending') {
          return {
            ...state,
            data: state.data.slice().sort((a, b) => a[action.column] - b[action.column]),
            direction: 'descending'
          }
        }
        return {
          column: action.column,
          data: state.data.slice().sort((a, b) => b[action.column] - a[action.column]),
          direction: 'ascending',
        }
      case 'UPDATE_DATA':
        return {
          ...state,
          data: action.data,
        }
      default:
        throw new Error()
    }
  }