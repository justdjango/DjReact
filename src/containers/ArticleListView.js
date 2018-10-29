import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Articles from "../components/Article";
import CustomForm from "../components/Form";

class ArticleList extends React.Component {
  state = {
    articles: []
  };

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token
      };
      axios.get("http://127.0.0.1:8000/api/").then(res => {
        this.setState({
          articles: res.data
        });
      });
    }
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} /> <br />
        <h2> Create an article </h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(ArticleList);
