import React from 'react';

export default function asyncComponent(importComponent: Function) {

  class AsyncComponent extends React.Component<{}, {
    component: any
  }> {

    constructor(props: any) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentWillMount() {
      let {default: component} = await importComponent();
      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;
      return (
        C ? <C {...this.props} /> : null
      )
    }
  }

  return AsyncComponent;
}
