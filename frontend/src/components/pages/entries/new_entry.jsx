import React from 'react';
import '../../../css/entry_form.css';


class NewEntry extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            importance: 1,
            goal: "",
            role: "",
            project: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillMount() {
        this.props.fetchUserGoals(this.props.user.id);
        this.props.fetchUserProjects(this.props.user.id);
        this.props.fetchUserRoles(this.props.user.id);
        this.props.fetchUserReports(this.props.user.id);
    }

    
    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newEntry: nextProps.newEntry.description });
    // }

    handleSubmit(e) {
        e.preventDefault();

        let entry = {
            description: this.state.description,
            importance: this.state.importance,
            user: this.props.user.id,
            report: this.props.report.id,
            goal: this.props.goal.id,
            role: this.props.role.id,
            project: this.props.project.id
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
                        <select
                            value={this.state.goal}
                            onChange={this.update('goal')}>
                            { this.props.goals.map( goal => {
                            return (
                                <option key={goal.id} value={goal.title}>{goal.title}</option>
                            )
                        })}
                        </select>
                    </label>
                    </div>

                        <div className='entry-dropdown'>
                            <label>Role
                        <select
                            value={this.state.role}
                            onChange={this.update('role')}>
                            {this.props.roles.map(role => {
                                return (
                                    <option key={role.id} value={role.title}>{role.title}</option>
                                )
                                })}
                        </select>
                            </label>
                        </div>

                        <div className='entry-dropdown'>
                            <label>Project
                        <select
                            value={this.state.project}
                            onChange={this.update('project')}>
                            {this.props.projects.map(project => {
                                return (
                                    <option key={project.id} value={project.title}>{project.title}</option>
                                )
                            })}
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

export default NewEntry;