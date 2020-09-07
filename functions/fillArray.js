const fillArray = (Array, dataArray) => {
    for (i = 0; i < 1000; i++) {

        if (!Array.includes(dataArray[i].resource.language_id))
            Array.push(dataArray[i].resource.language_id)
    };
    return Array
}

export default fillArray;