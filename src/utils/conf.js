export const getOptions = () => {
    return {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }
}

export const postOptions = (body = {}) => {
    return {
        method: "POST",
        // cache: "no-cache",
        // credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json",
        },
        body: body
    }
}

export const deleteOptions = () => {
    return {
        method: "DELETE",
        // cache: "no-cache",
        // credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
      
    }
}