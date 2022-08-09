
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (matrix == undefined) {
        return [];
    } else {
        return(
            matrix.reduce((arr, current, i) => {
                return arr.concat((i % 2) ? current.reverse() : current );
            }, [])
        );
    }
}
