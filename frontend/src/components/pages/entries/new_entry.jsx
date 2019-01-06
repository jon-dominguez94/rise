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

    // handleFile(e) {
    //     this.setState({ photoFile: e.currentTarget.files[0] });
    // }

    update(){
        return e => this.setState({
            description: e.currentTarget.value
        })
    }

    render(){
        return (
            <div>
                New Entry

                <form>
                    <input
                        value={this.state.description}
                        onChange={this.update()}
                        placeholder="Write description"
                    />
                    <label>Rating
                    <select className='entry-dropdown'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>

                    <label>Goal
                    <select className='entry-dropdown'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>

                    <label>Role
                    <select className='entry-dropdown'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>

                    {/* <input className="post-file" type="file" onChange={this.handleFile.bind(this)} /> */}


                    <input type="submit" value="Create Entry" />

                </form>
            </div>
        )
    }

}

export default NewEntry 