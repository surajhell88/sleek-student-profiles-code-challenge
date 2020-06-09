function matchStrings(firstString, secondString) {
    return firstString.toLowerCase().indexOf(secondString.toLowerCase()) !== -1
}

function filter(listOfData, arrOfKeys, searchKey, searchClause = 'OR') {
    return listOfData.filter(dataItem => {
        let searchInData = arrOfKeys.map(key => {
            return dataItem[key]
        })
        return searchInData.reduce((didMatch, currentData) => {
            if (searchClause === 'AND') {
                return didMatch && matchStrings(currentData, searchKey)
            }
            return didMatch || matchStrings(currentData, searchKey)
        }, false)
    })
}

export {
    matchStrings,
    filter
}