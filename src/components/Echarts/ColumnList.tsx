import React from 'react';
import { Column } from '@ant-design/charts';

export default function ColumnList(props: any) {
  const config = {
    data: props?.data,
    xField: 'type',
    yField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      textBaseline: 'bottom',
    },
  };

  return <Column {...config} />;
}
