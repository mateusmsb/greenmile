const fillArrayModule = (Array, dataArray) => {
    for (i = 0; i < dataArray.length; i++) {

        if (!Array.includes(dataArray[i].resource.module_id))
            Array.push(dataArray[i].resource.module_id)
    };
    return Array
}

export default fillArrayModule;