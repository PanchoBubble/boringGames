import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const GRAVITY_ACC = -.981;

function Flappy() {
    const [playing, setPlaying] = useState(true);
    const [birdH, setBirdH] = useState(50);
    const [time, setTime] = useState(0);
    const [now, setNow] = useState(null);
    const [wait, setWait] = useState(false);
    const [elevating, setElevating] = useState(false);

    useEffect(() => {
        if ( 100 > birdH && !wait && now){
            setWait(true)
            setTimeout(
                () => {
                    const d = new Date()
                    const time = (d.getTime() - now) / 1000;
                    setBirdH( currentH => {
                        return (currentH - (time * GRAVITY_ACC)).toFixed(2)
                    })
                    setWait(false)
                },
                10
            );
        }
    });

    useEffect(() => {
        const d = new Date()
        setNow(d.getTime())
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                flap()
            }
        }
    }, []);

    const flap = () => {
        setBirdH(currentH => currentH - 15)
        setNow(null)
        setWait(true)

        console.log(elevating)
        if (elevating){
            clearTimeout(elevating)
        }
        clearTimeout(elevating)
        console.log("aaa")
        setElevating(
            setTimeout(
                () => {
                    setWait(false)
                    setNow(currentNow => {
                        const d = new Date()
                        setNow(d.getTime())
                    })
                },
                400
            )
        )
    }

    return (
        <div className="flappy">
            <div style={{top: `${birdH}%`}} className="bird" />
        </div>
    );
}

Flappy.defaultProps = {};

Flappy.propTypes = {
};

export default Flappy;
