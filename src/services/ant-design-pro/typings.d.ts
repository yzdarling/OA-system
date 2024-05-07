// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };
  /** 登录参数类型 */
  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
    token?: string;
  };
  /** 重置密码参数类型 */
  type ResetResult = {
    username?: string;
    password?: string;
    newPassword?: string;
  };

  type ResetParams = {
    status?: string;
    message?: string;
  };

  /** 员工分析数据参数类型 */

  type AnalyzeStaffParams = {
    data?: AnalyzeStaffData;
    success?: boolean;
  };
  /**员工数据参数类型 */
  type AnalyzeStaffData = {
    ageMap?: PieData[];
    constellationList?: PieData[];
    wordingYearsMaps?: WordingYears[];
    total?: number;
    onbocrdingTimeData?: Onbocrding;
    marriageList?: PieData[];
    genderList?: PieData[];
    educationList?: PieData[];
    departmentList?: CloumnData[];
  };
  /**饼图参数类型 */
  type PieData = {
    name?: string;
    value?: number;
  };
  /**柱状图参数类型 */
  type CloumnData = {
    type?: string;
    value?: number;
  };

  /**工作年龄类型定义 */
  type Onbocrding = {
    one?: number;
    two?: number;
    three?: number;
  };
  /**老员工类型定义 */
  type WordingYears = {
    userName?: string;
    department?: string;
  };
  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
