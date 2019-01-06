import React from 'react';


class NewEntry extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            importance: ""
        }
    }

    // handleSubmit(e){
    //     e.preventDefault
    // }

    render(){
        return (
            <div>
                New Entry

                <form>
                    <input
                        value={this.state.description}
                        placeholder="Write description"
                    />
                    <label>Rating
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>
                </form>
            </div>
        )
    }

}

export default NewEntry 