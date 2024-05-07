import { analyzeStaff } from '@/services/ant-design-pro/api';
import { useState } from 'react';

type Amount = {
  title?: string;
  amount?: number;
  id?: number;
};

export default () => {
  const [total, setTotal] = useState<number | undefined>(0);
  const [amountDataList, setAmountDataList] = useState<Amount[] | undefined>([]);
  const [educationPie, setEducationPie] = useState<API.PieData[] | undefined>([]);
  const [genderPie, setGenDerPie] = useState<API.PieData[] | undefined>([]);
  const [marriageList, setMarriageList] = useState<API.PieData[] | undefined>([]);
  const [ageMap, setAgeMap] = useState<API.CloumnData[] | undefined>([]);
  const [departmentList, setDepartmentList] = useState<API.CloumnData[] | undefined>([]);
  const [constellationList, setConstellationList] = useState<API.PieData[] | undefined>([]);
  const [wordingYearsMaps, setWordingYearsMaps] = useState<API.WordingYears[] | undefined>();

  async function initDashboradList() {
    const { data } = await analyzeStaff();
    setWordingYearsMaps(data?.wordingYearsMaps);
    setTotal(data?.total);
    setAmountDataList([
      { title: '入职1年内的员工', amount: data?.onbocrdingTimeData?.one, id: 1 },
      { title: '入职1-2年内的员工', amount: data?.onbocrdingTimeData?.two, id: 2 },
      { title: '入职3年以上的员工', amount: data?.onbocrdingTimeData?.three, id: 3 },
    ]);
    setEducationPie(data?.educationList);
    setGenDerPie(data?.genderList);
    setMarriageList(data?.marriageList);
    setAgeMap(data?.ageMap);
    setDepartmentList(data?.departmentList);
    setConstellationList(data?.constellationList);
  }

  return {
    wordingYearsMaps,
    total,
    amountDataList,
    marriageList,
    ageMap,
    genderPie,
    educationPie,
    departmentList,
    constellationList,
    initDashboradList,
  };
};
