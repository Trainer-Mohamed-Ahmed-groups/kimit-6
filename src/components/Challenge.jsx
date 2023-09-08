function Drink({ name }) {
    var showItem;
    if (name === 'tea') {
        showItem = <dl>
            <dt>Part of plant</dt>
            <dd>leaf</dd>
            <dt>Caffeine content</dt>
            <dd>15–70 mg/cup</dd>
            <dt>Age</dt>
            <dd>4,000+ years</dd>
        </dl>
    }
    else {
        showItem = <dl>
            <dt>Part of plant</dt>
            <dd>bean</dd>
            <dt>Caffeine content</dt>
            <dd>80–185 mg/cup</dd>
            <dt>Age</dt>
            <dd>1,000+ years</dd>
        </dl>
    }
    return (
        <section>
            <h1>{name}</h1>
            {showItem}
        </section>
    );
}


export default function DrinkList() {
    return (
        <div>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    );
}
