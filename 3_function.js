function checknumber(n) {
    if (n > 0) {
        return "Positive"
    } else if (n < 0) {
        return "Negative"
    } else {
        return(`Zero`)
    }
} console.log(checknumber(-11));