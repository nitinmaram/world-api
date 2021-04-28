export function mapData(masterData) {
    
    let popData = masterData[0] && masterData[0][1];
    let gdpData = masterData[1] && masterData[1][1];

    let transformedData = popData && popData.map((pop, ind) => {
        let matchedGdp = gdpData && gdpData.find(gdp => (gdp.country.value === pop.country.value));
        return (matchedGdp && {
            country: matchedGdp.country.value,
            population: pop.value,
            gdp: matchedGdp.value,
            gdpYear: matchedGdp.date,
            popYear: pop.date
        });
    });
    return transformedData;
}