export default function ConditionExample() {

    var x = 5;

    console.log(0 && "test")

    return (
        <div>
            <h2>ConditionExample</h2>
            <div>This is {x === 5 ? "Template" : "Not"}</div>
            {x === 5 && <div>This is true</div>}
        </div>
    )
}
