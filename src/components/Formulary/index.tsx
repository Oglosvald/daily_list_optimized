import React from 'react';
import Button from '../Button';
class Formulary extends React.Component<any, any> {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="task">
                        Add one new task
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What's your taks?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="23:59:59"
                        required
                    />
                </div>
                <Button/>
            </form>
        )
    }
}

export default Formulary;