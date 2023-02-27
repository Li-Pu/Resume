import { PersonalInfo } from '~~/components/resume/types';
import Avatar from './avatar.jpg'
import SamsungIcon from './samsung.png'
import SankuaiIcon from './sankuai.png'
import HongbulinIcon from './hongbulin.png'

const infos: PersonalInfo = {
  name: "李璞",
  avatar: Avatar,
  basicInfos: [
    {
      key: "年龄",
      value: "30岁"
    },
    {
      key: "性别",
      value: "男"
    }
  ],
  contactInfos: [
    {
      key: "电话",
      value: "13070120630"
    },
    {
      key: "电子邮箱",
      value: "lipu@qq.com"
    }
  ],
  jobInfos: [
    {
      key: "工作年限",
      value: "6年"
    },
    {
      key: "求职意向",
      value: "前端软件工程师"
    },
    {
      key: "意向城市",
      value: "深圳"
    }
  ],
  jobSkillInfos: [
    {
      key: "HTML",
      value: 0.8
    },
    {
      key: "CSS",
      value: 0.7
    },
    {
      key: "JavaScript",
      value: 0.8
    },
    {
      key: 'Typescript',
      value: 0.7
    },
    {
      key: 'Vue',
      value: 0.8
    },
    {
      key: 'React',
      value: 0.7
    },
    {
      key: 'React Native',
      value: 0.6
    }
  ],
  selfEvaluation:
    "",
  educationInfos: [
    {
      start: "2013.09",
      end: "2017.06",
      schoolName: "北京航空航天大学",
      schoolImgUrl:
        "https://www.lgstatic.com/i/image/M00/AD/4D/CgqKkVi1E2OAQTwUAAAOQDrOH7435.jpeg",
      degree: "本科",
      subject: "计算机科学与技术"
    }
  ],
  workExperienceInfos: [
    {
      start: "2022.08",
      end: "2023.01",
      companyName: "北京致美生活科技有限公司",
      companyImgUrl: HongbulinIcon,
      position: "前端工程师（商品研发组）",
      descriptions: [
        {
          content: "主要负责的内容有：",
          details: [
            '红布林平台官网（http://hongbulin.com/）的改版开发工作 (Vue)',
            '红布林和开店宝商城App以及红布林小程序中嵌入的H5页面的开发工作(Vue 2)',
            "红布林小程序的开发工作 (Taro)",
            '红布林后端商品管理Pro系统的部分开发工作（Vue 3）',
            '红布林内容推荐平台管理系统前端页面（React 18）',
            '红布林Mis管理系统前端页面（Php + Vue 2)'
          ]
        }
      ]
    },
    {
      start: "2020.08",
      end: "2022.04",
      companyName: "北京三快在线科技有限公司",
      companyImgUrl: SankuaiIcon,
      position: "前端工程师（快驴事业部）",
      descriptions: [
        {
          content: "主要负责的内容有：",
          details: [
            "快驴事业部星辰后台系统PC部分的开发工作，星辰系统是快驴内部管理、采购、招商、运营人员查看每日各方面数据与状态的主要数据产品，为用户提供多维度多方面的数据展示服务（Vue2 + Vue-Router -> React + Recoil + React-Query)",
            "快驴事业部星辰移动项目的开发工作，是一款快驴内部员工使用的数据产品，主要为快驴内部的招商员工提供方便便捷的实时数据查询服务，满足用户的移动数据查询需求，提升用户的工作效率。（Meituan React Native + Rematch)"
          ]
        }
      ]
    },
    {
      start: "2017.06",
      end: "2020.05",
      companyName: "北京三星通信研究院",
      companyImgUrl: SamsungIcon,
      position: "软件工程师（语言智能团队）",
      descriptions: [
        {
          content: "主要负责的内容有：",
          details: [
            "三星生活App的开发工作（Android)",
            "三星语音助手Bixby中部分Capsule的功能开发工作 (Bixby)",
          ]
        }
      ]
    }
  ],
};

export default infos;