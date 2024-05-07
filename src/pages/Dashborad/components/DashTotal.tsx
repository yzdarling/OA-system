import React from 'react';
import { ProCard } from '@ant-design/pro-components';

type PropsTypes = {
  total: number;
};
export default function DashTotal(props: PropsTypes) {
  return (
    <ProCard
      bordered
      colSpan={24}
      title="员工总人数"
      key="dashTop"
      layout="center"
      style={{ height: 150, fontSize: 40, fontWeight: 'bold' }}
    >
      {props?.total}人
    </ProCard>
  );
}
