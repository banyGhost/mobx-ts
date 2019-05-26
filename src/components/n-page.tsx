import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export const nPage = (PageComponent: any): any => {
  @observer
  class NPage extends React.Component {
    @observable isLoading = false;

    render() {
      return this.isLoading ? <PageLoading /> : <PageComponent {...this.props} />;
    }
  }
  return NPage;
};

const PageLoading = () => {
  return <div>loading state</div>;
};
