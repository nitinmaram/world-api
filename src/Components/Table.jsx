import _ from 'lodash'
import React, {useEffect} from 'react'
import { Table } from 'semantic-ui-react'

let tableData = [
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Other' },
  { name: 'Ben', age: 70, gender: 'Male' },
]

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function TableExampleSortable() {
  let res1, res2 = [];
  useEffect(() => {
    async function fetchData(){
       [res1, res2] = await Promise.all([
        fetch('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?source=2&format=json&mrv=1').
        then(response => response.json()),
        fetch('http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?source=2&format=json&mrv=1').then(response => response.json()),
    ]);
    res1.shift();
    res2.shift();
    console.log(dispatch);
    
    dispatch.call(state, { type: 'CHANGE_SORT', column: 'name' })
  console.log(res1);
  console.log(res2);
    
    }
    fetchData()
    
  }, []);
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: res1,
    direction: null,
  })
  const { column, data, direction } = state
  

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'name' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
          >
            Population
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'age' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'age' })}
          >
            GDP
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'gender' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'gender' })}
          >
            Year
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data && data.map((obj) => (
          <Table.Row key={obj.country.id}>
            <Table.Cell>{obj.indicator.value  }</Table.Cell>
            <Table.Cell>{obj.indicator.value}</Table.Cell>
            <Table.Cell>{obj.indicator.value}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TableExampleSortable