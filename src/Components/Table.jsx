import React, { useEffect } from 'react'
import { Table } from 'semantic-ui-react'

import { tableReducer } from '../reducers/tabReducer'

function TableExampleSortable(props) {
  const { totalData } = props
  const [state, dispatch] = React.useReducer(tableReducer, {
    column: null,
    data: totalData,
    direction: null,
  })

  useEffect(() => {
    dispatch({ type: 'UPDATE_DATA', data: totalData })
  }, [totalData])

  const { column, data, direction } = state;

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'country' ? direction : null}
          >
            Country
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'population' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'population', data: totalData })}
          >
            Population ({data[0] && data[0].popYear})
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'gdp' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'gdp', data: totalData })}
          >
            GDP ({data[0] && data[0].gdpYear})
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data && data.map((obj) => obj && (
          <Table.Row key={obj.country}>
            <Table.Cell>{obj.country}</Table.Cell>
            <Table.Cell>{obj.population}</Table.Cell>
            <Table.Cell>{obj.gdp}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TableExampleSortable