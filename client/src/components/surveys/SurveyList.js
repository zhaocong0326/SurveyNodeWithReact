import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  state = { showSurveyList: false, changeColor: false};

  renderSurveys() {
    if (this.state.showSurveyList) {
      return (
        <div>
          <p>You've deleted records in the page! </p>
        </div>
      );
    }
  
      return this.props.surveys.map(survey => {
        if (this.state.changeColor) {
          return (
            <div className=" yellow card light-2" key={survey._id}>
              <div className="card-content">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <p className="right">
                  Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <a>Yes: {survey.yes}</a>
                <a>No: {survey.no}</a>
              </div>
            </div> 
          );
        }

        return (
          <div className="card dark-2" key={survey._id}>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div> 
          
        );
      
      });
    }


 

  render() {
    return (
    <div>
      <br/>
      <button
            className="yellow darken-3 white-text btn-flat"
            onClick={() => this.setState({ showSurveyList: !this.state.showSurveyList })}
          >
          Clear or Back
      </button> &nbsp;

      <button
            className="green light-3 white-text btn-flat"
            
            onClick={() => this.setState({ changeColor: !this.state.changeColor })}
          >
          Change Background
      </button>

      {this.renderSurveys()}
    </div>
    );
  }
}
function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
