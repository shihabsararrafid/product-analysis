import { useEffect, useState } from "react";
//custom HOOK
const ShowReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    return [review, setReview];
}
export default ShowReview;