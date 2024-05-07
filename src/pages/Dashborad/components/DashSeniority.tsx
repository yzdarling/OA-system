import React from 'react';
import { ProCard } from '@ant-design/pro-components';
type Amount = {
  title: string;
  amount: number;
  id: number;
};

type PropsTypes = {
  amountDataList: Amount[];
};
export default function DashSeniority(props: PropsTypes) {
  const amountRender = props?.amountDataList.map((amount: Amount) => (
    <ProCard
      key={amount?.id}
      layout="center"
      title={amount?.title}
      bordered
      colSpan={{
        xs: 8,
        sm: 8,
        md: 8,
        lg: 8,
      }}
      gutter={{ xs: 8, sm: 8, md: 8 }}
      style={{ fontSize: 24, fontWeight: 'bold' }}
    >
      <div>{amount?.amount}人</div>
    </ProCard>
  ));
  return (
    <ProCard
      ghost={true}
      style={{ marginBlockStart: 16 }}
      colSpan={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      gutter={6}
    >
      {amountRender}
    </ProCard>
  );
}
