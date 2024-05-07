
function Food () {

    const food1 = "nasi lemak";
    const food2 = "nasi kandar";

    return(
        <ul>
            <li>Cendol</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
        </ul>

    );

}

export default Food

