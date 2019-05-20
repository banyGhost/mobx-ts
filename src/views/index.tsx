import React from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react";
import {Button, Popconfirm, Table} from "antd";
import request from '../utils/request';
import {AxiosResponse} from "axios";
import {message} from "antd/es";

interface Post {
  id: number;
  userId: number;
  body: string;
  title: string;
}

const {Column} = Table;

class PostColumn extends Column<Post> {
}

@observer
class IndexPage extends React.Component {

  @observable
  todos: Array<Post> = [];

  async componentWillMount() {
    let o: AxiosResponse<Array<Post>> = await request.get('/posts');
    this.todos = o.data;
  }

   deleteRow = async (id:number) => {
    let o: AxiosResponse<any> = await request.delete(`/posts/${id}`);
    if (o.status === 200) {
      this.todos = this.todos.filter(post => post.id !== id);
      message.success('删除成功');
    }
  };

  render() {
    return (
      <Table dataSource={this.todos} rowKey="id">
        <PostColumn title="id" dataIndex="id"/>
        <PostColumn title="title" dataIndex="title"/>
        <PostColumn title="body" dataIndex="body"/>
        <PostColumn title="operation" render={post => (
          <Popconfirm placement="topLeft" title="Are you sure?"
                      onConfirm={this.deleteRow.bind(this, post.id)} okText="Yes" cancelText="No">
            <Button type="danger">delete</Button>
          </Popconfirm>
        )}/>
      </Table>
    );
  }
}

export default IndexPage;
