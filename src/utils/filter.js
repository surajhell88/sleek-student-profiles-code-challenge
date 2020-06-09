function matchStrings(firstString, secondString) {
    return firstString.toLowerCase().indexOf(secondString.toLowerCase()) !== -1
}

function filter(listOfData, arrOfKeys, searchKey, matchClause = 'OR') {
    return listOfData.filter(dataItem => {
        let searchInData = arrOfKeys.map(key => {
            return dataItem[key]
        })
        return searchInData.reduce((didMatch, currentData) => {
            if (matchClause === 'AND') {
                return didMatch && matchStrings(currentData, searchKey)
            }
            return didMatch || matchStrings(currentData, searchKey)
        }, false)
    })
}

export default filter