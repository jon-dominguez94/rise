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
            <div className='entry-form'>
                <h1 className="session-title">Create Entry</h1>
                <form>
                    <input
                        value={this.state.description}
                        onChange={this.update()}
                        placeholder="Write description"
                        className="entry-description"
                    />
                    <div className='entry-dropdown'>  
                    <label>Rating
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>
                    </div>
                    <div className='entry-dropdown'>  
                    <label>Goal
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>
                    </div>
                    <div className='entry-dropdown'>  
                    <label>Role
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </label>
                    </div>
                    {/* <input className="post-file" type="file" onChange={this.handleFile.bind(this)} /> */}
                    <input type="submit" value="Create Entry" />
                </form>
            </div>
        )
    }

}

export default NewEntry 