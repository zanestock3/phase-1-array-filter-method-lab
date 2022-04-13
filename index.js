// Code your solution here
function findMatching(drivers, query) {
return drivers.filter(function(driver) {
    return driver.toLowerCase() === query.toLowerCase();
}
)}

function fuzzyMatch(drivers, query) {
    const lengthOfQuery = query.length
    return drivers.filter(function(driver) {
        return driver.slice(0, lengthOfQuery) === query
    })
}

function matchName(drivers, query) {
    const result = drivers.filter(driver => driver.name === query)
    return result
}