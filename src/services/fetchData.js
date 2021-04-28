import resourceConfig from '../config/resource-config'

export function getPopulationByMrv() {
    return fetch(`${resourceConfig.baseUrl}/SP.POP.TOTL?source=2&format=json&mrv=1`).then(response => response.json());
}

export async function getPopulationByYear(year) {
    if (year) {
        return fetch(`${resourceConfig.baseUrl}/SP.POP.TOTL?source=2&format=json&date=${year}`).then(response => response.json())
    }
    return getPopulationByMrv()

}

export async function getTotalPopulationAndGdp(year, page) {
    return await Promise.all([
        fetch(`${resourceConfig.baseUrl}/SP.POP.TOTL?source=2&format=json&date=${year}&per_page=${page}`).then(response => response.json()),
        fetch(`${resourceConfig.baseUrl}/NY.GDP.MKTP.CD?source=2&format=json&mrv=1&date=${year}&per_page=${page}`).then(response => response.json()),
    ]);
}
