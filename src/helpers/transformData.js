export function mapData(masterData) {
    let popData = masterData[0][1];
    let gdpData = masterData[1][1];
    return popData.map((pop, ind) => {
       let matchedGdp = gdpData.find( gdp => (gdp.country.value === pop.country.value 
        && gdp.date === pop.date));        
        return ({
            country: matchedGdp.country.value,
            population: pop.value,
            gdp: matchedGdp.value,
            year: matchedGdp.date
        });
    });
  }