import { useState } from "react"

const useLocalStorage = (key, initialValue = []) => {

    const localStorageKey = localStorage.getItem(key)
    let parsedKey;


    if (!localStorageKey) {
        localStorage.setItem(key, JSON.stringify(initialValue))
        parsedKey = initialValue

    } else {
        parsedKey = JSON.parse(localStorageKey)
    }

    //State of content
    const [content, setContent] = useState(parsedKey)

    const saveContent = (newContent) => {

        const parsedContent = JSON.stringify(newContent)
        localStorage.setItem(key, parsedContent)
        setContent(newContent)
    }


    return [
        content,
        saveContent,
    ]
}

export { useLocalStorage }