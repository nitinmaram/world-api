export function getPopulationAndGdpByMrv() {
    return fetch('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?source=2&format=json&mrv=1').then(response => response.json());
}

export async function getPopulationAndGdpByYear(year) {
    if (year) {
        return fetch('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?source=2&format=json&date=' + year).then(response => response.json())
    }
    return getPopulationAndGdpByMrv()

}

export async function getTotalPopulationAndGdp(year, page) {
    return await Promise.all([
        fetch('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?source=2&format=json&date=' + year + '&per_page=' + page).then(response => response.json()),
        fetch('http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?source=2&format=json&mrv=1&date=' + year + '&per_page=' + page).then(response => response.json()),
    ]);
}
