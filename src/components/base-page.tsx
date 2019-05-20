import React from 'react';
import request from '../utils/request';
import {AxiosInstance} from "axios";


class BasePage extends React.Component {
  request: AxiosInstance = request;

  fetchData() {

  }

  componentWillMount() {
    this.fetchData();
  }

}

export default BasePage;
