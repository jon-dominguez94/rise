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
                </form>
            </div>
        )
    }

}

export default NewEntry 