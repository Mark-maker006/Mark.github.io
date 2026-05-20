export const dashboardData = {
  user: {
    name: '陈思涵',
    role: '人力资源总监',
    avatar: '/static/images/people/1.webp',
    salary: '¥8,500',
  },
  stats: [
    { label: '面试中', value: 78, total: 100, color: 'primary' },
    { label: '已入职', value: 56, total: 100, color: 'primary' },
    { label: '在职员工', value: 203, total: 250, color: 'primary' },
    { label: '待处理', value: 24, total: 50, color: 'primary' },
  ],
  chartData: [
    { label: '周一', value: 2400 },
    { label: '周二', value: 1800 },
    { label: '周三', value: 3200 },
    { label: '周四', value: 4200 },
    { label: '周五', value: 3600 },
    { label: '周六', value: 2800 },
    { label: '周日', value: 2200 },
  ],
  accordionItems: [
    {
      title: '办公设备',
      items: ['MacBook Pro M3', 'iPhone 15 Pro', 'iPad Air'],
    },
    {
      title: '薪酬福利',
      items: ['基本工资: ¥35,000/月', '年终奖金: 3个月', '股权激励: 0.5%'],
    },
    {
      title: '其他福利',
      items: ['五险一金', '带薪年假', '年度体检'],
    },
  ],
  calendarEvents: [
    {
      id: 1,
      title: '面试: 高级前端工程师',
      time: '10:00',
      candidates: ['/static/images/people/2.webp', '/static/images/people/3.webp'],
    },
    {
      id: 2,
      title: '面试: 产品经理',
      time: '14:00',
      candidates: ['/static/images/people/4.webp'],
    },
    {
      id: 3,
      title: '团队周会',
      time: '16:30',
      candidates: [],
    },
  ],
  timeTracker: {
    totalHours: 36,
    targetHours: 40,
    percentage: 90,
  },
  upcomingInterviews: [
    {
      id: 1,
      name: '张明',
      avatar: '/static/images/people/2.webp',
      position: '高级前端工程师',
      type: '视频面试',
      time: '今天 10:00',
    },
    {
      id: 2,
      name: '李华',
      avatar: '/static/images/people/3.webp',
      position: '产品经理',
      type: '现场面试',
      time: '今天 14:00',
    },
  ],
  onboardingTasks: [
    { id: 1, title: '完成税务表格填写', completed: true },
    { id: 2, title: '设置工资卡绑定', completed: true },
    { id: 3, title: '阅读员工手册', completed: false },
    { id: 4, title: '参加新员工培训', completed: false },
  ],
};

export const navItems = [
  { label: '工作台', href: '/dashboard', active: true },
  { label: '候选人', href: '/candidates', active: false },
  { label: '职位管理', href: '/jobs', active: false },
  { label: '数据分析', href: '/analytics', active: false },
  { label: '系统设置', href: '/settings', active: false },
];