import { getImageUrl } from "./utils";

export default function Profile({ personName, profession, awards, discovered, nOfAwards, imgUrl }) {
    return (
        <section className="profile">
            <h2>{personName}</h2>
            <img
                className="avatar"
                src={getImageUrl(imgUrl)}
                alt={personName}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {nOfAwards} </b>
                    {awards}
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    )
}
