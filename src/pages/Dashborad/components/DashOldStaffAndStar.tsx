import React from 'react';
import { ProCard, ProList } from '@ant-design/pro-components';
import PieList from '@/components/Echarts/PieList';
type PropsTypes = {
  wordingYearsMaps?: API.WordingYears[];
  constellationList?: API.PieData[];
  total?: number;
};

export default function DashOldStaffAndStar(props: PropsTypes) {
  const data = props?.wordingYearsMaps?.map((item) => ({
    title: item?.userName,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    content: (
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            width: 200,
          }}
        >
          <div>在职中</div>
        </div>
      </div>
    ),
    actions: (
      <div key={item.department} style={{ color: 'black' }}>
        {item.department}
      </div>
    ),
  }));
  return (
    <ProCard key="DashOldStaffAndStar " gutter={6} ghost={true} style={{ marginBlockStart: 16 }}>
      <ProCard
        key="dashOldStaff"
        title="工龄最老的十位员工"
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
        <ProList
          style={{ width: '100%' }}
          headerTitle="姓名"
          rowKey="workYear"
          size="small"
          metas={{
            title: {},
            avatar: {},
            content: {},
            actions: {},
          }}
          toolBarRender={() => {
            return [<div key={1}>所在部门</div>];
          }}
          dataSource={data}
        />
      </ProCard>

      <ProCard
        key="dashStaffStar"
        title="员工星座分布"
        layout="center"
        bordered
        colSpan={{
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
        }}
        gutter={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        style={{ height: 568.14 }}
      >
        <PieList data={props?.constellationList} isStar={true} total={props?.total} />
      </ProCard>
    </ProCard>
  );
}
