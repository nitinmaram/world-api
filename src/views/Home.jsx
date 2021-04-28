import React, { useEffect, useState } from "react";

import { Container, Header } from 'semantic-ui-react'

import Table from '../components/Table';
import Year from '../components/Year';

import {
  getPopulationByMrv,
  getPopulationByYear,
  getTotalPopulationAndGdp
} from '../services/fetchData';
import { mapData } from '../helpers/transformData';

const Home = () => {

  const [pageData, setPageData] = useState("");
  const [totalData, setTotalData] = useState("");
  const [yearInput, setYearInput] = useState("2019");

  useEffect(() => {
    getPopulationByMrv().then(res => {
      setPageData(res[0]);
    })
  }, []);

  useEffect(() => {
    if (pageData) {
      getTotalPopulationAndGdp(yearInput, pageData.total).then(res => {
        setTotalData(mapData(res))
      })
    }
  }, [pageData]);

  const handleChange = (e) => {
    setYearInput(e.target.value)
  }

  const onButtonClick = () => {
    getPopulationByYear(yearInput).then(res => {
      setPageData(res[0])
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