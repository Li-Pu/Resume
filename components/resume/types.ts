export type PersonalInfoAsideItem<T extends string | number> = {
    key: string
    value: T
}

export type PersonalInfoAsideSection<T extends string | number> = Array<PersonalInfoAsideItem<T>>

export type PersonalInfoContentItemDescription = {
    content: string,
    details: Array<string>
}

export type PersonalInfoContentBaseItem = {
    start: string
    end: string
}

export type PersonalInfoContentItem = PersonalInfoContentBaseItem & {
    companyName: string
    companyImgUrl: string
    position: string
    descriptions: Array<PersonalInfoContentItemDescription>
} | PersonalInfoContentBaseItem & {
    schoolName: string
    schoolImgUrl: string
    degree: string
    subject: string
} | PersonalInfoContentBaseItem & {
    companyName: string
    projectName: string
    projectImgUrl: string
    position: string
    projectDescriptions: Array<PersonalInfoContentItemDescription & { enumrate: boolean }>
    taskDescriptions: Array<string | PersonalInfoContentItemDescription>
}

export type PersonalInfoContentItemSection = Array<PersonalInfoContentItem>

export interface PersonalInfo {
    name: string
    avatar: string
    // 基本信息
    basicInfos: PersonalInfoAsideSection<string>
    contactInfos: PersonalInfoAsideSection<string>
    jobInfos: PersonalInfoAsideSection<string>
    jobSkillInfos: PersonalInfoAsideSection<number>
    selfEvaluation: string
    educationInfos: PersonalInfoContentItemSection
    workExperienceInfos: PersonalInfoContentItemSection
    projectInfos: PersonalInfoContentItemSection
}