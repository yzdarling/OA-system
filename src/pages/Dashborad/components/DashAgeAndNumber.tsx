import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import ColumnList from '@/components/Echarts/ColumnList';

type PropsTypes = {
  ageMap: API.PieData[];
  departmentList: API.CloumnData[];
};
export default function DashAgeAndNumber(props: PropsTypes) {
  return (
    <ProCard key="DashAgeAndNumber" ghost={true} gutter={6} style={{ marginBlockStart: 16 }}>
      <ProCard
        key="dashAge"
        title="员工年龄段"
        layout="center"
        bordered
        colSpan={{
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
        }}
        gutter={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        <ColumnList data={props?.ageMap} />
      </ProCard>
      <ProCard
        key="dashNumber"
        title="员工部门数量"
        layout="center"
        bordered
        colSpan={{
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
        }}
        gutter={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      >
        <ColumnList data={props?.departmentList} />
      </ProCard>
    </ProCard>
  );
}
