export type PersonalInfoAsideItem<T extends string | number> = {
    key: string
    value: T
}

export type PersonalInfoAsideSection<T extends string | number> = Array<PersonalInfoAsideItem<T>>

export type PersonalInfoContentItemDescription = {
    content: string,
    details?: Array<string>
}

export type PersonalInfoContentBaseItem = {
    start: string
    end: string
}

export type PersonalInfoContentComponyItem = PersonalInfoContentBaseItem & {
    companyName: string
    companyImgUrl: string
    position: string
    descriptions: Array<PersonalInfoContentItemDescription>
}

export type PersonalInfoContentSchoolItem = PersonalInfoContentBaseItem & {
    schoolName: string
    schoolImgUrl: string
    degree: string
    subject: string
}

export type PersonalInfoContentProjectItem = PersonalInfoContentBaseItem & {
    companyName: string
    projectName: string
    projectImgUrl: string
    position: string
    projectDescriptions: Array<PersonalInfoContentItemDescription & { enumrate?: boolean }>
    taskDescriptions?: Array<string | PersonalInfoContentItemDescription>
}

export interface PersonalInfo {
    name: string
    avatar: string
    // 基本信息
    basicInfos: PersonalInfoAsideSection<string>
    contactInfos: PersonalInfoAsideSection<string>
    jobInfos: PersonalInfoAsideSection<string>
    jobSkillInfos: PersonalInfoAsideSection<number>
    selfEvaluation: string
    educationInfos: Array<PersonalInfoContentSchoolItem>
    workExperienceInfos: Array<PersonalInfoContentComponyItem>
    projectInfos?: Array<PersonalInfoContentProjectItem>
}