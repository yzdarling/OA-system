import React from 'react';
import { Pie } from '@ant-design/charts';

type PieData = {
  name?: string;
  value?: number;
};

type PieListProps = {
  data?: PieData[];
  total?: number;
  isRadius?: boolean;
  isStar?: boolean;
};

export default function PieList(props: PieListProps) {
  const { data, total = 0, isRadius = false, isStar = false } = props;

  const config = {
    data,
    angleField: 'value',
    colorField: 'name',
    innerRadius: isRadius ? 0.6 : 0,
    label: {
      // text: ({ name, value }: PieData) => {
      //   return `${name}: ${(((value ?? 0) / total) * 100).toFixed(2)}%`;
      // },
      text: 'name',
      position: 'outside',
      style: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
    width: 680,
    height: isStar ? 460 : 280,
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
