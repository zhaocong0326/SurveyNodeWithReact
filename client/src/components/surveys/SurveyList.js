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
          <button
            className="green darken-3 white-text btn-flat"
            onClick={() => this.setState({ showSurveyList: false })}
          >
           Get Datas Back
          </button>
        </div>
      );
    }
  
      return this.props.surveys.map(survey => {
        if (this.state.changeColor) {
          return (
            <div className="card darken-2" key={survey._id}>
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
          <div className=" yellow card dark-2" key={survey._id}>
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
       <button
            className="yellow darken-3 white-text btn-flat"
            onClick={() => this.setState({ showSurveyList: true })}
          >
           Clear All Records
      </button>
      <button
            className="green light-3 white-text btn-flat"
            onClick={() => this.setState({ changeColor: true })}
          >
          White Background
      </button>
      <button
            className="yellow darken-3 white-text btn-flat"
            onClick={() => this.setState({ changeColor: false })}
          >
          Yellow Background
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
