export default function SingleProduct({ productDetails }) {
    return (
        <div className="m-4">
            <h3>{productDetails.title}</h3>
            <p>{productDetails.description}</p>
            <hr />
        </div>
    )
}
