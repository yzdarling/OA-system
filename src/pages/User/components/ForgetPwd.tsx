import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText, ProForm } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import React from 'react';
import { POST_API_FORGET_PASSWORD } from '../../../../types';
/**
 *  重置密码页面
 * @param props
 * @returns
 */

export default function ForgetPwd(props: any) {
  const [form] = ProForm.useForm();
  const intl = useIntl();
  const handleSubmit = async (values: POST_API_FORGET_PASSWORD) => {
    try {
      const newValues = { ...values, type: 'resetPassword' };
      const userInfo = await PutUserInfo(newValues);
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(form.getFieldsValue());
  return (
    <ProForm
      form={form}
      style={{ marginTop: 62 }}
      size="large"
      submitter={{
        searchConfig: {
          resetText: '重置',
          submitText: '提交',
        },
        submitButtonProps: {
          type: 'primary',
          style: {
            width: '100%',
            marginTop: 24,
          },
        },
        resetButtonProps: {
          style: { display: 'none' },
        },
      }}
      onFinish={handleSubmit}
    >
      <>
        <ProFormText
          name="account"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined />,
          }}
          placeholder={intl.formatMessage({
            id: 'pages.login.username.placeholder',
            defaultMessage: '用户名',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.username.required"
                  defaultMessage="请输入用户名!"
                />
              ),
            },
          ]}
        />
      </>

      <>
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder={intl.formatMessage({
            id: 'pages.login.password.placeholder',
            defaultMessage: '新密码',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.password.required"
                  defaultMessage="请输入新密码！"
                />
              ),
            },
          ]}
        />
      </>

      <span
        style={{ cursor: 'pointer', color: 'blue' }}
        onClick={() => props.handleClickType('account')}
      >
        返回登陆页面
      </span>
    </ProForm>
  );
}
