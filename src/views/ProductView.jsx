import { useParams } from "react-router-dom"

export default function ProductView() {
    const params = useParams();
    return (
        <div>ProductView number : {params.productId}</div>
    )
}
