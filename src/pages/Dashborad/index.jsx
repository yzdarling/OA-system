import { useModel } from '@umijs/max';
import { useEffect } from 'react';

import DashTatal from './components/DashTotal';
import DashSeniority from './components/DashSeniority';
import DashAgeAndMarriage from './components/DashAgeAndMarriage';
import DashOldStaffAndStar from './components/DashOldStaffAndStar';
import DashAgeAndNumber from './components/DashAgeAndNumber';
import DashEducationAndGender from './components/DashEducationAndGender';

export default function DashBorad() {
  const {
    wordingYearsMaps,
    educationPie,
    genderPie,
    total,
    amountDataList,
    ageMap,
    marriageList,
    departmentList,
    constellationList,
    initDashboradList,
  } = useModel('dashborad');

  useEffect(() => {
    initDashboradList();
  }, []);

  return (
    <div>
      <div>
        <DashTatal total={total} />
      </div>
      <div>
        <DashSeniority amountDataList={amountDataList} />
      </div>
      <div>
        <DashEducationAndGender genderPie={genderPie} educationPie={educationPie} total={total} />
      </div>
      <div>
        <DashAgeAndMarriage genderPie={genderPie} marriageList={marriageList} total={total} />
      </div>
      <div>
        <DashAgeAndNumber ageMap={ageMap} departmentList={departmentList} />
      </div>
      <div>
        <DashOldStaffAndStar
          wordingYearsMaps={wordingYearsMaps}
          constellationList={constellationList}
          total={total}
        />
      </div>
    </div>
  );
}
