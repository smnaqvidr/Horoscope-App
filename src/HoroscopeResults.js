// displaying results on the page


function HoroscopeResults({getHoroscope}) {
    console.log(getHoroscope);
    return (
        <div className="resultsSection">
            <div className="wrapper">
            {getHoroscope ? <p> {getHoroscope.description} </p> : null}
            { getHoroscope? <p>Lucky colour: {getHoroscope.color} </p> : null}
            {getHoroscope ? <p>Compatibility: {getHoroscope.compatibility} </p> : null}
            {getHoroscope ? <p>Your mood: {getHoroscope.mood} </p> : null}
            {getHoroscope ? <p>Lucky number: {getHoroscope.lucky_number} </p> : null}
            {getHoroscope ? <p>Lucky time: {getHoroscope.lucky_time} </p> : null}
            </div>
       
       </div>
    );
};
export default HoroscopeResults;