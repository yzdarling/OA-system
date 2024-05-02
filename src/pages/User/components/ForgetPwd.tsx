import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText, ProForm } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import React from 'react';
import { updateUserInfo } from '@/services/ant-design-pro/api';
import { message } from 'antd';
/**
 *  重置密码页面
 * @param props
 * @returns
 */

export default function ForgetPwd(props: any) {
  const [form] = ProForm.useForm();
  const intl = useIntl();
  const [messageApi, contextHolder] = message.useMessage();
  const handleSubmit = async (values: API.ResetResult) => {
    try {
      const reset = await updateUserInfo(values);
      if (reset.status === 'ok') {
        const resetSuccessMessage = intl.formatMessage({
          id: 'pages.reset.success',
          defaultMessage: '修改密码成功,返回继续登录!',
        });
        messageApi.open({ key: 1, type: 'success', content: resetSuccessMessage });
      }
    } catch (error) {
      const resetFailureMessage = intl.formatMessage({
        id: 'pages.reset.failure',
        defaultMessage: '修改密码失败，请重试!',
      });
      messageApi.open({ key: 2, type: 'error', content: resetFailureMessage });
      console.log(error);
    }
  };

  return (
    <>
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
        onFinish={async (values) => await handleSubmit(values as API.ResetResult)}
      >
        {contextHolder}

        <ProFormText
          name="username"
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

        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder={intl.formatMessage({
            id: 'pages.login.password.placeholder',
            defaultMessage: '密码',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.password.required"
                  defaultMessage="请输入旧密码!"
                />
              ),
            },
          ]}
        />

        <ProFormText.Password
          name="newPassword"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder={intl.formatMessage({
            id: 'pages.login.newPassword.placeholder',
            defaultMessage: '新密码',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.login.password.required"
                  defaultMessage="请输入新密码!"
                />
              ),
            },
          ]}
        />

        <span
          style={{ cursor: 'pointer', color: 'blue' }}
          onClick={() => props?.handleClickType('account')}
        >
          返回登陆页面
        </span>
      </ProForm>
    </>
  );
}
