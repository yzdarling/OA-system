import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Bar } from '@ant-design/charts';
import PieList from '@/components/Echarts/PieList';

type PropsTypes = {
  genderPie: API.PieData[];
  marriageList: API.PieData[];
  total: number;
};
export default function DashAgeAndMarriage(props: PropsTypes) {
  const config = {
    data: props?.genderPie,
    xField: 'name',
    yField: 'value',
    colorField: 'name',
    label: {
      text: 'age',
    },
    legend: {
      color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 },
    },
    width: 680,
    height: 280,
  };
  return (
    <ProCard key="DashAgeAndMarriage" ghost={true} gutter={6} style={{ marginBlockStart: 16 }}>
      <ProCard
        key="dashAverAge"
        title="平均年龄"
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
        <Bar {...config} />
      </ProCard>
      <ProCard
        key="dashMarriage"
        title="员工婚姻状况"
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
        <PieList data={props?.marriageList} total={props?.total} isRadius={true} />
      </ProCard>
    </ProCard>
  );
}
