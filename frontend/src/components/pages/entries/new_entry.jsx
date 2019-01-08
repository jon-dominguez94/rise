import React from 'react';
import '../../../css/entry_form.css';


class NewEntry extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            importance: 1,
            goal: this.props.goals[0],
            role: this.props.roles[0],
            project: this.props.projects[0]
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillMount() {
        this.props.fetchUserGoals(this.props.user.id);
        this.props.fetchUserProjects(this.props.user.id);
        this.props.fetchUserRoles(this.props.user.id);
        this.props.fetchUserReports(this.props.user.id).then(()=> {
            this.setState({ goal: this.props.goals[0], role: this.props.roles[0], project: this.props.projects[0]})
        });
    }

    componentDidMount(){
        // debugger
    }

    
    // componentWillReceiveProps(nextProps) {
        // debugger
        // this.setState({ newEntry: nextProps.newEntry.description });
    // }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        let entry = {
            description: this.state.description,
            importance: this.state.importance,
            user: this.props.user.id,
            report: this.props.report._id,
            goal: this.state.goal._id,
            role: this.state.role._id,
            project: this.state.project._id
        };
        // debugger

        this.props.createEntry(entry)
        // this.setState({ description: '', importance: 1 });

    }

    // handleFile(e) {
    //     this.setState({ photoFile: e.currentTarget.files[0] });
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // update1(field) {
    //     return e => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }

    render(){
        
        return (
            <div className='entry-form-container'>
                <h1 className="session-title">Create Entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder="Write description"
                        className="entry-description"
                    />
                    <div className='dropdowns'>
                    <div className='entry-dropdown1'>  
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
                            // value={this.state.goal}
                            onChange={(e)=> {this.setState({goal: this.props.goals[e.currentTarget.value]})}}>
                            { this.props.goals.map( (goal, i) => {
                            return (
                                <option key={goal._id} value={i}>{goal.title}</option>
                            )
                        })}
                        </select>
                    </label>
                    </div>

                        <div className='entry-dropdown'>
                            <label>Role
                        <select
                            // value={this.state.role}
                            onChange={(e) => { this.setState({ role: this.props.roles[e.currentTarget.value] }) }}>
                            {this.props.roles.map((role, i) => {
                                return (
                                    <option key={role._id} value={i}>{role.title}</option>
                                )
                                })}
                        </select>
                            </label>
                        </div>

                        <div className='entry-dropdown'>
                            <label>Project
                        <select
                            // value={this.state.project}
                            onChange={(e) => { this.setState({ project: this.props.projects[e.currentTarget.value] }) }}>
                            {this.props.projects.map((project, i) => {
                                return (
                                    <option key={project._id} value={i}>{project.title}</option>
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