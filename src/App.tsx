import React from 'react';
import logo from './logo.svg'
import 'antd/dist/antd.css';
import './App.scss';
import {Form, Input, Button, Space, Select, Checkbox} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='form-container'>
        <Form className="form-class-list" name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
          <Form.List name="class_list">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} className='form-horz-container' align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, 'class']}
                      rules={[{ required: true, message: 'Missing class name' }]}
                    >
                      <Input placeholder="Class Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'grade']}
                      rules={[{ required: true, message: 'Missing grade' }]}
                    >
                      <Select
                        placeholder="Grade"
                        allowClear
                      >
                        <Option value="A+">A+</Option>
                        <Option value="A">A</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B">B</Option>
                        <Option value="B-">B-</Option>
                        <Option value="C+">C+</Option>
                        <Option value="C">C</Option>
                        <Option value="C-">C-</Option>
                        <Option value="D+">D+</Option>
                        <Option value="D">D</Option>
                        <Option value="D-">D-</Option>
                        <Option value="F">F</Option>
                        
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'isAP']}
                    >
                      <Checkbox>is AP?</Checkbox>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button className="add-field-button" type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default App;
