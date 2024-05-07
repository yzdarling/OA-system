import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import PieList from '@/components/Echarts/PieList';

interface PieData {
  name: string;
  value: number;
}

interface PropsTypes {
  educationPie: PieData[];
  genderPie: PieData[];
  total: number;
}
export default function DashEducationAndGender(props: PropsTypes) {
  return (
    <ProCard key="DashEducationAndGender" ghost={true} gutter={6} style={{ marginBlockStart: 16 }}>
      <ProCard
        key="dashEducation"
        title="学历情况"
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
        <PieList data={props?.educationPie} total={props?.total} />
      </ProCard>
      <ProCard
        key="dashGender"
        title="员工性别占比"
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
        <PieList data={props?.genderPie} total={props?.total} />
      </ProCard>
    </ProCard>
  );
}
