import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { getPopulation } from '../services/fetchData';
import { mapData } from '../helpers/transformData';
import { tableReducer } from '../reducers/tabReducer'

function TableExampleSortable() {
  const [state, dispatch] = React.useReducer(tableReducer, {
    column: null,
    data: [],
    direction: null,
  })
  useEffect(() => {
    let mounted = true;
    getPopulation().then(res => {
      if (mounted) {
        let transformedData = mapData(res);
        dispatch({ type: 'UPDATE_DATA', data: transformedData });
      }
    })
    return () => mounted = false;
  }, []);

  const { column, data, direction } = state

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'country' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'country' })}
          >
            Country
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'population' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'population' })}
          >
            Population
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'gdp' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'gdp' })}
          >
            GDP
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'year' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'year' })}
          >
            Year
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data && data.map((obj) => (
          <Table.Row key={obj.country}>
            <Table.Cell>{obj.country}</Table.Cell>
            <Table.Cell>{obj.population}</Table.Cell>
            <Table.Cell>{obj.gdp}</Table.Cell>
            <Table.Cell>{obj.year}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TableExampleSortable