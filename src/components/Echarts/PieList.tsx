import React from 'react';
import { Pie } from '@ant-design/charts';

type PieData = {
  name: string;
  value: number;
};
export default function PieList(props: any) {
  const config = {
    data: props?.data,
    angleField: 'value',
    colorField: 'name',
    innerRadius: props?.isRadius ? 0.6 : 0,
    label: {
      text: (d: PieData) => {
        const total = props?.total;
        if (typeof total === 'number') {
          return `${d.name}: ${((d.value / total) * 100).toFixed(2)}%`;
        } else {
          return `${d.name}: 0%`;
        }
      },
      position: 'outside',
      style: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
    tooltip: {
      title: 'name',
      items: 1,
    },
    width: 680,
    height: props?.isStar ? 460 : 280,
    paddingBottom: 4,
    legend: {
      color: {
        title: false,
        position: 'left',
        rowPadding: 10,
      },
    },
  };
  return <Pie {...config} />;
}
