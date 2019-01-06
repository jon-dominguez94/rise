import react from 'React';


class NewEntry extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            importance: ""
        }
    }

    render(){
        return (
            <div>
                New Entry
            </div>
        )
    }

}

export default NewEntry 