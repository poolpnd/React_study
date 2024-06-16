import React, {Fragment} from 'react'

const Clock = ({     
    timerDays = 10,
    timerHours = 10,
    timerMintues = 10,
    timerSeconds = 10
  }) =>{
  return (
    <Fragment>
        <section className="timer-container">
            <section className="timer">
                <div className="clock">
                    <section>
                        <p>{timerDays}
                            <small>Days</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}
                            <small>Hours</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMintues}
                            <small>Mintues</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}
                            <small>Seconds</small>
                        </p>
                    </section>
                </div>
            </section>
        </section>
    </Fragment>
  )
}

export default Clock