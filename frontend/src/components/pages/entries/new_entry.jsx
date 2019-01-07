import React from 'react';
import '../../../css/entry_form.css';
import { withRouter } from 'react-router-dom';


class NewEntry extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            importance: 1,
            newEntry: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newEntry: nextProps.newEntry.description });
    // }

    handleSubmit(e) {
        e.preventDefault();

        let entry = {
            description: this.state.description,
            importance: this.state.importance
        };

        this.props.createEntry(entry);
        this.setState({ description: '', importance: 1 });

    }

    // handleFile(e) {
    //     this.setState({ photoFile: e.currentTarget.files[0] });
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){
        // debugger
        return (
            <div className='entry-form-container'>
                <h1 className="session-title">Create Entry</h1>
                <form>
                    <textarea
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder="Write description"
                        className="entry-description"
                    />
                    <div className='dropdowns'>
                    <div className='entry-dropdown'>  
                    <label>Importance
                    <select
                        value={this.state.importance}
                        onChange={this.update('importance')}>
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
                        <div className="entry-submit-button">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default withRouter(NewEntry)