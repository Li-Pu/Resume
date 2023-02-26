import { PersonalInfo } from '~~/components/resume/types';
import Avatar from './avatar.jpg'

const infos: PersonalInfo = {
  name: "张三",
  avatar: Avatar,
  basicInfos: [
    {
      key: "年龄",
      value: "18岁"
    },
    {
      key: "性别",
      value: "男"
    }
  ],
  contactInfos: [
    {
      key: "电话",
      value: "12334566765"
    },
    {
      key: "电子邮箱",
      value: "123@qq.com"
    }
  ],
  jobInfos: [
    {
      key: "工作年限",
      value: "1年"
    },
    {
      key: "求职意向",
      value: "软件攻城狮"
    },
    {
      key: "意向城市",
      value: "北京 杭州"
    }
  ],
  jobSkillInfos: [
    {
      key: "HTML",
      value: 0.8
    },
    {
      key: "CSS",
      value: 0.8
    },
    {
      key: "JavaScript",
      value: 0.9
    }
  ],
  selfEvaluation:
    "自我介绍篇幅不用太长，注意结合简历整体的美观度。自我评价应做到突出自身符合目标岗位要求的“卖点”，避免使用过多的形容词。",
  educationInfos: [
    {
      start: "2000.09",
      end: "2004.06",
      schoolName: "北航",
      schoolImgUrl:
        "https://www.lgstatic.com/i/image/M00/AD/4D/CgqKkVi1E2OAQTwUAAAOQDrOH7435.jpeg",
      degree: "本科",
      subject: "计算机科学与技术"
    }
  ],
  workExperienceInfos: [
    {
      start: "2004.09",
      end: "20012.06",
      companyName: "百度",
      companyImgUrl:
        "https://www.baidu.com/favicon.ico",
      position: "软件攻城狮",
      descriptions: [
        {
          content: "主要负责描述，例如：带领X人团队进行市场营销和产品策划",
          details: [
            "主要负责描述，例如：带领X人团队进行市场营销和产品策划。",
            "1-3行主要负责描述，不要太多。"
          ]
        }
      ]
    }
  ],
  projectInfos: [
    {
      start: "2004.09",
      end: "20012.06",
      companyName: "百度",
      projectName: "百度图片搜索",
      projectImgUrl:
        "https://www.baidu.com/favicon.ico",
      position: "软件攻城狮",
      projectDescriptions: [
        {
          content: "",
          enumrate: true,
          details: [
            "主要负责描述，例如：带领X人团队进行市场营销和产品策划。",
            "1-3行主要负责描述，不要太多。"
          ]
        }
      ],
      taskDescriptions: [
        "主要负责描述，例如：带领X人团队进行市场营销和产品策划。<br/>1-3行主要负责描述，不要太多。",
        {
          content: "主要负责描述，例如：带领X人团队进行市场营销和产品策划。",
          details: [
            "主要负责描述，例如：带领X人团队进行市场营销和产品策划。",
            "1-3行主要负责描述，不要太多。"
          ]
        }
      ]
    }
  ]
};

export default infos;