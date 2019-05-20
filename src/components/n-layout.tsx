import React from 'react';
import {Layout} from "antd";
import './n-layout.less';
import NMenu from './n-menu';

const {Header, Content, Sider} = Layout;

export default class NLayout extends React.Component {

  render() {
    return (
      <Layout className="n-layout">
        <Sider width={256} theme="light">
          <NMenu />
        </Sider>
        <Layout>
          <Header className="n-header">
            logo
          </Header>
          <Content>
            <NPage>
              {this.props.children}
            </NPage>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const NPage: React.FC = (props) => {
  return (
    <div className="n-page">
      {props.children}
    </div>
  )
};
