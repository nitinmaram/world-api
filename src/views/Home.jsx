import React, { useEffect, useState } from "react";

import { Container, Header } from 'semantic-ui-react'

import Table from '../components/Table';
import Year from '../components/Year';

import {
  getPopulationAndGdpByMrv,
  getPopulationAndGdpByYear,
  getTotalPopulationAndGdp
} from '../services/fetchData';
import { mapData } from '../helpers/transformData';

const Home = () => {

  const [tableData, setTableData] = useState("");
  const [totalData, setTotalData] = useState("");
  const [yearInput, setYearInput] = useState("2019");

  useEffect(() => {
    getPopulationAndGdpByMrv().then(res => {
      setTableData(res[0]);
    })
  }, []);

  useEffect(() => {
    if (tableData) {
      getTotalPopulationAndGdp(yearInput, tableData.total).then(res => {
        setTotalData(mapData(res))
      })
    }
  }, [tableData]);

  const handleChange = (e) => {
    setYearInput(e.target.value)
  }

  const onButtonClick = () => {
    getPopulationAndGdpByYear(yearInput).then(res => {
      setTableData(res[0])
    })
  };

  return (
    <Container>
      <Header data-testid="test" as='h1'>World's Key Metrics</Header>
      <Year
        handleChange={handleChange}
        yearInput={yearInput}
        onButtonClick={onButtonClick}
      />
      {totalData &&
        <Table totalData={totalData} />
      }
    </Container>
  )
}


export default Home