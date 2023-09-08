import Profile from './Profile.jsx';

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile personName="Maria Skłodowska-Curie" profession="physicist and chemist" awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)" discovered="polonium (element)" nOfAwards="4" imgUrl="szV5sdG" />

            <Profile personName="Katsuko Saruhashi" profession="geochemist" awards="(Miyake Prize for geochemistry, Tanaka Prize)" discovered="a method for measuring carbon dioxide in seawater" nOfAwards="2" imgUrl="YfeOqp2" />
        </div>
    );
}
