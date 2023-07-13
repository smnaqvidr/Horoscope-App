// SignButtons.js
import { useState } from 'react';

import HoroscopeResults from "./HoroscopeResults";
// import DayOptions from './DayOptios';



function SignButtons(props) {
    const [userChoice, setUserChoice] = useState(false);
    const handleSignSelection = (event) => {
        props.handleSignSelection(event.target.id)
        setUserChoice(true)
    }
    return (
        <section>
            <div className='buttons'>
                <button className="aries" id="aries" onClick={handleSignSelection}>Aries
                    <span>MAR 21 - APR 20</span>
                </button>
                <button className="taurus" id="taurus" onClick={handleSignSelection}>Taurus
                    <span>APR 21 - MAY 20</span>
                </button>
                <button className="gemini" id="gemini" onClick={handleSignSelection}>Gemini
                    <span>MAY 21 - JUNE 21</span>
                </button>
                <button className="cancer" id="cancer" onClick={handleSignSelection}>Cancer
                    <span>JUN 22 - JUL 22</span>
                </button>
                <button className="leo" id="leo" onClick={handleSignSelection}>Leo
                    <span>JUL23 - AUG 22</span>
                    </button>
                <button className="virgo" id="virgo" onClick={handleSignSelection}>Virgo
                    <span>AUG 23 - SEP 22</span>
                </button>
                <button className="libra" id="libra" onClick={handleSignSelection}>Libra
                    <span>SEP 23 - OCT 22</span>
                </button>
                <button className="scorpio" id="scorpio" onClick={handleSignSelection}>Scorpio
                    <span>OCT 23 - NOV 22</span>
                </button>
                <button className="sagittarius" id="sagittarius" onClick={handleSignSelection}>Sagittarius
                    <span>NOV 23 - DEC 21</span>
                </button>
                <button className="capricorn" id="capricorn" onClick={handleSignSelection}>Capricorn
                    <span>DEC 22 - JAN 19</span>
                </button>
                <button className="aquarius" id="aquarius" onClick={handleSignSelection}>Aquarius
                    <span>JAN 20 - FEB 18</span>
                </button>
                <button className="pisces" id="pisces" onClick={handleSignSelection}>Pisces
                    <span>FEB 19 - MAR 20</span>
                </button>
            </div>
            <div className="results">
                <HoroscopeResults signChosen={userChoice}/>
            </div>
        </section>
    )
}

export default SignButtons;