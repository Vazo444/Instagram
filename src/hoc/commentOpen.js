import { useCallback, useState } from "react"

export const commentOpen = (Component) => {
    return (props) => {
        const [comment, setComment] = useState(false)
        
        const open = useCallback(() => {
            setComment(true)
        }, [])

        return <Component {...props} {...{comment, open}}/>
    }
}