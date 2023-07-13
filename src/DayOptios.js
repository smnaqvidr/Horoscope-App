// getting data depending on user's choice

function DayOptions(props){

    const handleDateSelection = (event) => {
        console.log(event);
        props.handleDateSelection(event.target.id)
        props.horoscopeOption();
    }
    return(
        <div className="dayOptions">
            <div className="wrapper">
            <button className="yesterday" id="yesterday" onClick={handleDateSelection}>Yesterday</button>
            <button className="today" id="today" onClick={handleDateSelection}>Today</button>
            <button className="tomorrow" id="tomorrow" onClick={handleDateSelection}>Tomorrow</button>
            </div>
        </div>
    )
}
export default DayOptions;