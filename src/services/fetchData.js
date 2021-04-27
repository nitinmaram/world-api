export async function getPopulation(year, page) {
    if (year) {
        if(page){
            return await Promise.all([
                fetch('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?source=2&format=json&date='+year+'&page='+page).
                then(response => response.json()),
                fetch('http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?source=2&format=json&date='+year+'&page='+page).then(response => response.json()),
            ]);
        }
        return await Promise.all([
            fetch('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?source=2&format=json&date='+year).
            then(response => response.json()),
            fetch('http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?source=2&format=json&date='+year).then(response => response.json()),
        ]);
    }
    return await Promise.all([
        fetch('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?source=2&format=json&mrv=1').
        then(response => response.json()),
        fetch('http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?source=2&format=json&mrv=1').then(response => response.json()),
    ]);
  }