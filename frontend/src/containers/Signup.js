import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { Form, Spin, Icon, Input, Button } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const FormItem = Form.Item;

class Signup extends React.Component {

    state = {
        confirmDirty: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onAuth(
                    values.username, 
                    values.email, 
                    values.password,
                    values.confirm,
                );
            }
        });
        this.props.history.push('/');
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Your passwords must match!');
        } else {
            callback();
        }
    }
    
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?

                    <Spin indicator={antIcon} />

                    :

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{
                                    required: true, message: 'Please input your username!',
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true, message: 'Please input your email!',
                                }],
                            })(
                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{
                                required: true, message: 'Please input your password!',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                            
                        <FormItem>
                            {getFieldDecorator('confirm', {
                                rules: [{
                                required: true, message: 'Please confirm your password!',
                                }, {
                                validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input onBlur={this.handleConfirmBlur} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
                            )}
                        </FormItem>

                        <FormItem>
                            <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                                Signup
                            </Button>
                            Or 
                            <NavLink 
                                style={{marginRight: '10px'}} 
                                to="/login"> login
                            </NavLink>
                        </FormItem>

                    </Form>
                }
            </div>
        );
    }
}

const WrappedAuth = Form.create()(Signup);

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedAuth);