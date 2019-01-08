import React from 'react';

class ElementItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.element._id,
      title: props.element.title,
      description: props.element.description,
      msg: ''
    };

    this.label = `Update ${this.props.label}`;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.revealDesc = this.revealDesc.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
        msg: ''
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newElement = Object.assign({}, this.props.element, this.state);
    this.props.updateElement(newElement)
      .then(res => {
        if (res.errors === undefined) {
          this.setState({ msg: 'Success' });
        } else {
          this.setState({ msg: 'Please correct errors listed below' });
        }
      })
      .then(() => {
        setTimeout(() => {
          this.setState({ msg: '' });
        }, 2000);
      });
  }

  renderMsg() {
    if (this.state.msg === '') {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="msg-container on-element">
          <p>{this.state.msg}</p>
        </div>
      );
    }
  }

  revealDesc() {
    document.getElementById(`desc-${this.state.id}`).classList.toggle('hidden');
  }

  render() {
    return <div className="all-elements-container">
        <div className="input-background">
          <div className="element-form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="element-form">
                <input type="text" value={this.state.title} onClick={this.revealDesc} onChange={this.update("title")} placeholder="Title" />
                <div id={`desc-${this.state.id}`} className="elem-desc hidden">
                  <hr />
                  <textarea value={this.state.description} onChange={this.update("description")} placeholder="Description" />
                  {/* <input type="submit" value={this.label} /> */}
                  <button className="profile-submit-btn">{this.label}</button>
               </div>
              </div>
            </form>
            {this.renderMsg()}
          </div>
        </div>
      </div>;
  }
}

export default ElementItem;